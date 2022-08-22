

from django.db import models
class Creator(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# one2one relation:
class Language(models.Model):
    name = models.CharField(max_length=50)
    creator = models.models.OneToOneField(Creator, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"
