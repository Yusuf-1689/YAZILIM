from django.shortcuts import render
from rest_framework import status
from rest_framework import generics
from personalApp.models import Deparment, Personal
from rest_framework.generics import GenericAPIView,ListCreateAPIView,RetrieveUpdateDestroyAPIView
from personalApp.serializers import DeparmentPersonalSerializer, DeparmentSerializer, PersonalSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


