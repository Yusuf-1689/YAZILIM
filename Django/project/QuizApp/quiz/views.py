from rest_framework import generics
from .models import (
    Category,
    Quiz,
    Question,
    Option
)
from .serializers import (
    CategorySerialzier,
)


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialzier


class QuizList(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = ''