from django.urls import path
from .views import user_logout,register
urlpatterns = [
    path('logout/',user_logout,name='user_logout'),
    path('register/',register,name='register'),
]