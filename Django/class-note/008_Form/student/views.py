from django.shortcuts import render

from student.models import Student
from .forms import StudentForm


def index(request):
    return render(request, 'student/index.html')


# def student_page(request):
#     return render(request, 'student/student.html')


# def student_page(request):
    # print(request.POST)
    # print(request.FILES)
    # form = StudentForm()
    # context = {
    #     'form': form
    # }

    # return render(request, 'student/student.html', context)


def student_page(request):
    form = StudentForm()
    if request.method == "POST":
        form = StudentForm(request.POST, request.FILES)
        if form.is_valid():
            student_data = {
                "first_name": form.cleaned_data.get('first_name'),
                "last_name": form.cleaned_data.get("last_name"),
                "number": form.cleaned_data.get("number"),
                "profile_pic": form.cleaned_data.get("profile_image")
            }
            # Student.objects.create(**student_data)
            student = Student(**student_data)
            student.save()
    context = {
        'form': form
    }
    
    return render(request, 'student/student.html', context)