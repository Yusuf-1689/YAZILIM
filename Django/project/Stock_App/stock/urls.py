from django.urls import path
from .views import (
    CategoryView
)

from rest_framework import routers

router = routers.DefaultRouter()
router.register('category', CategoryView)

urlpatterns = [
    #  path('category/', CategoryView.as_view()),
     
] + router.urls
