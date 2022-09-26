from django.contrib import admin
from .models import (
    Category,
    Quiz,
    Question,
    Option
)

from .serializers import(
    CategorySerializer,
)

class CategoryList(generics.ListAPIViews):
    queryset = Category.objects.all()
    serializer_class = 
