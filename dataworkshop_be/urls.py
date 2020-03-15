
from django.urls import path
from .views import ListProjectView


urlpatterns = [
    path('projects/', ListProjectView.as_view(), name="projects-all")
]
