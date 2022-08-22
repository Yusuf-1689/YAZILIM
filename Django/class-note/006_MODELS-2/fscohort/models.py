


from distutils.command.upload import upload
from turtle import update
from django.db import models

class Student(models.Model):
    COUNTRIES = [
        ('TR', 'Turkey'),
        ('US', 'America'),
        ('DE', 'Germany'),
        ('FR', 'France'),
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField('Numara')
    about = models.TextField('Hakkında', blank=True, null=True)
    country = models.CharField('Ülke', max_length=2 choices=COUNTRIES, default='TR')
    avatar = models.ImageField('Resim', blank=True, null=True, upload_to='media/')
    registered_date = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.number} - {self.first_name} - {self.last_name}"


    class Meta:
        ordering = ['number']
        verbose_name_plural = 'Öğrenciler'


