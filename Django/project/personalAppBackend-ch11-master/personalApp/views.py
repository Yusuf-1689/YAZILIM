from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from personalApp.models import Department, Personal
from rest_framework.generics import GenericAPIView,ListCreateAPIView,RetrieveUpdateDestroyAPIView
from personalApp.serializers import DepartmentPersonalSerializer, DepartmentSerializer, PersonalSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


class DepartmentView(generics.ListAPIView):
    serializer_class=DepartmentSerializer
    queryset=Department.objects.all()
    # permission_classes= [IsAuthenticated]
    
class DepartmentPersonalView(generics.ListAPIView):
    serializer_class=DepartmentSerializer
    queryset=Department.objects.all()
    # permission_classes= [IsAuthenticated]
    
    def get_queryset(self):
        name = self.kwargs['department']
        
        return Department.objects.filter(name__iexact=name)
    

class PersonalListCreate(ListCreateAPIView):
    queryset = Personal.objects.all()
    serializer_class=PersonalSerializer
    # permission_classes = [IsAuthenticated]
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if self.request.user.is_superuser or self.request.user.is_staff:#sadece ilgili kullanıcı staff veya superuser ise personel create işlemi yapabilir
            self.perform_create(serializer)
            data = {
                "message": f"Personal {serializer.validated_data.get('first_name')} saved successfully!"}
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            data = {
                "message": "You are not authorized to perform this operation"
            }
            return Response(data, status=status.HTTP_401_UNAUTHORIZED)
    def perform_create(self, serializer):
        serializer.save()
        
class 
     
