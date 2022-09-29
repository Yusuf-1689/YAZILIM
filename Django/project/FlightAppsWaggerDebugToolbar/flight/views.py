from django.shortcuts import render
from .serializers import FlightSerializers
from rest_framework import viewsets
from .models import Flight, Passenger, Reservation

class FlightView(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializers


