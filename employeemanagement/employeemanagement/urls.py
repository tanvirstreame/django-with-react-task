from django.contrib import admin
from django.urls import path
from employee.views import StudentInfo,Studentdetail
from django.conf.urls import url
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/all', StudentInfo),
    url(r'^api/v1/Studentdetail/(?P<pk>\d+)/$', Studentdetail),
]
