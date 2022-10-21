from django.urls import path

from .views import DepartmentView,DepartmentPersonalView, PersonalGetUpdateDelete, PersonalListCreate

urlpatterns = [
    path('', DepartmentView.as_view()),
    path('department/<str:department>/', DepartmentPersonalView.as_view()),
    path('personal/', PersonalListCreate.as_view()),
    path('personal/<int:pk>',PersonalGetUpdateDelete.as_view()),
]
