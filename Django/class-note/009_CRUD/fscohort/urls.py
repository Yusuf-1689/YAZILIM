
from django.urls import path,include
from .views import index, student_add,student_list,student_add

urlpatterns = [
    path('',index,name='index'),
    path('list/',student_list , name='list'),
    path('add',student_add,name='add')
]
