from multiprocessing import context
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import logout,login


from django.contrib import messages

from users.forms import UserForm, UserProfileForm

# Create your views here.

def home(request):
    return render(request, 'users/home.html')

def user_logout(request):
    logout(request)
    return redirect('home')

def register(request):
    form_user=UserForm()
    form_profile=UserProfileForm()
    if request.method=='POST':
        form_user=UserForm(request.POST)
        form_profile=UserProfileForm(request.POST, request.FILES)
        if form_user.is_valid() and form_profile.is_valid():
            form_user.save()
            # form_profile.save()
            profile=form_profile.save(commit=False)          
            profile.user=form_user.save()
            profile.save()
            login(request,user)
            
            return redirect('home')
            
    
    
    
    context={
        'form_profile':form_profile,
        'form_user':form_user
    }
    return render(request,'users/register.html',context)