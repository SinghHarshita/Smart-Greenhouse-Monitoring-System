from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('login', views.login.as_view(),name="login"),
    path('register', views.register.as_view(),name="register"),
    path('updatecropdetails', views.UpdateCropDetails.as_view(),name="updatecropdetails"),
    path('updateirrigationdetails', views.UpdateIrrigationDetails.as_view(), name="updateirrigationdetails"),
    path('logeveryhour', views.logEveryHour.as_view(), name="logeveryhour"),
    path('addnewproduct', views.AddNewProduct.as_view(), name='addnewproduct'),
    path('addirrigationdetails', views.AddIrrigationDetails.as_view(), name="addirrigationdetails"),
    path('getirrigationdetails', views.GetIrrigationDetails.as_view(), name="getirrigationdetails"),
]