from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.template import loader
from django.http import HttpResponse
from .models import Employees
from employee.serializers import EmpolyeesSerializer
# Create your views here.




@api_view(['GET', 'POST'])
def StudentInfo(request):
	if request.method=='GET':
	    snippets = Employees.objects.all()
	    serializer = EmpolyeesSerializer(snippets,many=True)
	    return Response(serializer.data)
	elif request.method=='POST':
		serializer = EmpolyeesSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
	

@api_view(['GET', 'PUT', 'DELETE'])
def Studentdetail(request, pk):
   
    try:
        obj = Employees.objects.filter(id=pk)
    except Employees.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmpolyeesSerializer(obj,many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmpolyeesSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

