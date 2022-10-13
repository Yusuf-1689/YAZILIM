
from rest_framework import viewsets
from .models import (
    Category,
    Brand,
    Product,
    Firm,
    Transaction
)

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
