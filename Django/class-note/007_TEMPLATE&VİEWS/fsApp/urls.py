
from django.urls import path,include

from .views import home

urlpatterns = [
    path('fs', home,name='home')
]
