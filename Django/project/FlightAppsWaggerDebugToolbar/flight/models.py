from django.db import models
from django.contrib.auth.models import User

# birinci tablo
class Flight(models.Model):
    flight_number = models.CharField(max_length=20)
    operating_airlines = models.CharField(max_length=20)
    departure_city = models.CharField(max_length=20)
    arrival_city = models.CharField(max_length=20)
    date_of_departure = models.DateField()
    etd = models.TimeField()
    
    def __str__(self):
        return f'{self.flight_number} - {self.departure_city} - {self.arrival_city}'

    # ikinci tablo
class Passenger(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    phone_number = models.IntegerField()
    create_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
    # üçüncü tablo 
class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    passenger = models.ManyToManyField(Passenger, related_name='reservations')
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name="reservation")
    
    
    
    
    # r.passenger.all()
    # p.reservations.all()