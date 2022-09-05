from distutils.command.upload import upload
from django.db import models
# from django.contrib.auth.models import User

# # Create your models here.
# class UserProfile(models.Model):
#     portfolio=models.URLField(blank=True)
#     profile_pic=models.ImageField(upload_to='profile_pics',blank=True)
#     user=models.OneToOneField(User,on_delete=models.CASCADE)

#     def __str__(self):
#         return self.user.username


from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    portfolio=models.URLField(blank=True)
    profile_pic=models.ImageField(upload_to='profile_pics', blank=True)