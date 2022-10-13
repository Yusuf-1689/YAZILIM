
from rest_framework import serializers
from .models import(
    Category,
    Brand,
    Product,
    Firm,
    Transaction
)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'name'
        )