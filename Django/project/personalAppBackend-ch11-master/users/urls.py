from django.urls import include, path

from .views import RegisterView, logout 

urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path("auth/register/",RegisterView.as_view(),name="register"),
    path("auth/logouts/",logout,name="logout_user"),
]
