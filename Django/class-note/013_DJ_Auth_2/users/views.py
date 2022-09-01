from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import logout

from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, 'users/home.html')

def user_logout(request):
    logout(request)
    return redirect("home")