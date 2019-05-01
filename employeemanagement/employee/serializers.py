from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Employees

class EmpolyeesSerializer(serializers.ModelSerializer):
	class Meta:
		model=Employees
		fields=('id','gender','city','first_name','surname','username','age','image_thumb','country')






