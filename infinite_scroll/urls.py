from django.urls import path

from . import views

urlpatterns = [path("", views.home), path("api/students", views.api_students)]
