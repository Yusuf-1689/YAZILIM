from math import frexp
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Transaction


@receiver(pre_save, sender=Transaction)
def calculate_total_price(sender, instance, **kwargs):
    if not instance.price_total:
        instance.price_total = instance.quantity * instance.price
        