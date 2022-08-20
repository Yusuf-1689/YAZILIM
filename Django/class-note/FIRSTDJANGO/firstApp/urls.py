from django.contrib import path

from fscohortApp.views import home

# from fscohortApp.views import fshome
urlpatterns = [
    path("", home),
]
