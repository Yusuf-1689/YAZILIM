from asyncore import write
from pyexpat import model
from typing_extensions import Required
from urllib import request
from rest_framework import serializers
from .models import Flight, Passenger, Reservation



class FlightSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Flight
        fields = (
            "flight_number",
            "operating_airlines",
            "departure_city",
            "arrival_city",
            "date_of_departure",
            "etd"
        )
        
        
class PassengerSerializer(serializers.ModelSerializer):
    class Meata:
        model = Passenger
        fields = "__all__"

class ReservationSerializer(serializers.ModelSerializer):
    
    
    passenger = PassengerSerializer(many=True, Required=False)
    flight = serializers.StringRelatedField()
    flight_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Reservation
        fields = "__all__"