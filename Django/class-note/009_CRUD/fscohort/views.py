from django.shortcuts import render
from .models import Student

# Create your views here.

def index(request):
    return render (request, 'fscohort/index.html')

def student_list(request):
    students = Student.objects.all()
    context = {
        'students': students,
    }
    return render(request, 'fscohort/student_list.html', context)
    # return render(request, 'fscohort/student_list.html', { 'students': students})