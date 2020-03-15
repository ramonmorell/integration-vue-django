from django.db import models

# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=50, null=False)
    description = models.CharField(max_length=250, null=False)
    author = models.CharField(max_length=50, null=False)
