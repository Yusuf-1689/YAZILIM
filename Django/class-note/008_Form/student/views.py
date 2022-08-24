from django.shortcuts import render

def index(request):
    return render(request, 'student/index.html')

def student_page(request):
    return render(request,'student/student.html')