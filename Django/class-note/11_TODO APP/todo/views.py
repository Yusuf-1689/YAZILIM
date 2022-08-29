

from multiprocessing import context
from django.shortcuts import render
from django.http import HttpResponse
from .models import Todo


def home(request):
    todos = Todo.objects.all()
    context={
        "todos": todos
    }
    return render(request, "todo/home.html", context)
