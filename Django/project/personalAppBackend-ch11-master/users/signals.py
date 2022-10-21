from django.contrib.auth.models import User
from .models import Personal
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save,sender=Personal)
def is_staffed_user(sender,instance,**kwargs):
    if instance.is_staffed:
        user= User.objects.get(first_name=instance.first_name,last_name=instance.last_name)
        if user:
            user.is_staff = True
            user.save()
        else:
            instance.is_staffed = False
            instance.save()