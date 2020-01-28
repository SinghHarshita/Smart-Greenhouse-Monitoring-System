from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.db import connection

from jose import jws
import datetime
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view,permission_classes
from rest_framework import status,exceptions
from rest_framework.views import APIView

from .models import User
from django.core import serializers
import json

class login(APIView):
    def get(self, request, format=None):
        return Response({ "msg": "Get Method" })

    def post(self, request, format=None):
        email_id = request.data['email']
        pwd = request.data['password']
        
        try:
            res = User.objects.get(email=email_id, password=pwd)
            data = serializers.serialize('json',[res,])
        except:
            data = json.dumps({ "data": "Not Registered...." })
        dict1 = {
            "data": json.loads(data)
        }
        return Response(dict1)