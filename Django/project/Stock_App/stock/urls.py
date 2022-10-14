from django.urls import path
from .views import (
    CategoryView,
    BrandView,
)

from rest_framework import routers

router = routers.DefaultRouter()
router.register('category', CategoryView)
router.register('brand', BrandView)

urlpatterns = [
    #  path('category/', CategoryView.as_view()),
     
] + router.urls
