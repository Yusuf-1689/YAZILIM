

from django.contrib import path

from fscohortApp.views import fshome
# from fscohortApp.views import fshome
urlpatterns = [
    path('',fshome),
]