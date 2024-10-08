from random import choices
from django.db import models
from django.contrib.auth.models import User


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

    def __str__(self):
        return self.name


class Product(UpdateCreate):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(
        Brand, on_delete=models.CASCADE, related_name='b_products')
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
    TRANSACTION = (
        (1, 'IN'),
        (0, 'OUT')
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    firm = models.ForeignKey(
        Firm, on_delete=models.SET_NULL, null=True, related_name='transactions')
    transaction = models.SmallIntegerField(choices=TRANSACTION)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='transaction')
    quantity = models.SmallIntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    price_total = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True)

    def __str__(self):
        return f'{self.transaction} - {self.product} - {self.quantity}'