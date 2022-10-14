
from rest_framework import viewsets
from .models import (
    Category,
    Brand,
    Product,
    Firm,
    Transaction
)

from .serializers import (
    CategorySerializer,
    BrandSerializer,
)
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']