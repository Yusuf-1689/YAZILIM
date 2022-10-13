from enum import auto
from itertools import product
from operator import mod
from secrets import choice
from unicodedata import decimal
from django.db import models


class UpdateCreate(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
        
class Category(models.Model):
    name = models.CharField(max_length=25)
    
    def __str__(self):
        return self.name
    
class Brand(models.Model):
    name = models.CharField(max_length=30)
    
    
class Product(UpdateCreate):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name='products')
    stock = models.SmallIntegerField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
class Firm(UpdateCreate):
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
class Transaction(UpdateCreate):
    TRANSACTİON = (
        (1, 'IN'),
        (0, 'OUT')
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    firm = models.ForeignKey(Firm, on_delete=models.SET_NULL, null=True, relate_name='transactions')
    transaction = models.SmallIntegerField(choices=TRANSACTİON)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='transaction')
    quantitiy = models.SmallIntegerField()
    price = models.DecimalField(max_digit=6, decimal_places=2)
    price_total = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    
    def __str__(self):
        return f'{self.transaction} - {self.product} - {self.quantity}'
    
    