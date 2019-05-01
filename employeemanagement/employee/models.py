from django.db import models

# Create your models here.
class Employees(models.Model):
    gender = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30, default='')
    surname = models.CharField(max_length=30, default='')
    username = models.CharField(max_length=30, default='')
    age = models.IntegerField(default=0)
    image_thumb= models.CharField(max_length=30, default='')
    city = models.CharField(max_length=30, default='')
    country = models.CharField(max_length=30, default='')