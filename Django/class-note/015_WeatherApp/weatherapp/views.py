from multiprocessing import context
from django.shortcuts import render
from decouple import config
import requests
from pprint import pprint
from django.contrib import messages

def index(request):
    API_KEY = config("API_KEY")
    city = "Mersin"
    u_city = request.POST.get("name")
    
    if u_city:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)
        print(response.ok)
        
        
    if response.ok:
        pass
    else:
        messages.warning(request, "There is no city")
    
    
        
    
    
    
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    content = response.json()
    pprint(content["name"])
    pprint(content["main"]["temp"])
    pprint(content["weather"][0]["description"])
    pprint(content["weather"][0]["icon"])
    
    context = {
        "city": content["name"],
        "temp": content["main"]["temp"],
        "icon": content["weather"][0]["icon"],
        "desc": content["weather"][0]["description"]
    }
    
    return render(request, 'weatherapp/index.html', context)