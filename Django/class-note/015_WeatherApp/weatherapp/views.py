from multiprocessing import context
from django.shortcuts import render
from decouple import config
import requests
from pprint import pprint

def index(request):
    API_KEY = config("API_KEY")
    city = "Mersin"
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    content = response.json()
    # pprint(content)
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