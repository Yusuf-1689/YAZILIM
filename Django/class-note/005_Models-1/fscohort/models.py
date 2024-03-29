

from tabnanny import verbose
from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number = models.IntegerField()
    description = models.TextField(null=True, blank=True)
    register_date = models.DateField(auto_now_add=True)
    last_update_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.number} - {self.first_name}"

    def student_year_status(self):
        "Returns the student's year status."
        import datetime

        if self.register_date < datetime.date(2019, 1, 1):
            return "Senior"
        elif self.register_date < datetime.date(2020, 1, 1):
            return "Junior"
        else:
            return "Freshman"

    class Meta:
        ordering = ["number"]
        verbose_name_plural = "student_list"
