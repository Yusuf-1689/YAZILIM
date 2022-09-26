from django.contrib import admin

# Register your models here.
from .models import(
    Category,
    Quiz,
    Question,
    Option
)

admin.site.register(Category)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Option)