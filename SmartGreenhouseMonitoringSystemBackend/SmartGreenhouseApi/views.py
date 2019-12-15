from django.shortcuts import render
from django.http import HttpResponse
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from django.db import connection

@api_view(['POST'])
def login(request):
    print(request.POST.dict())
    data = request.POST.dict()
    res = requests.get("https://oauth2.googleapis.com/tokeninfo?id_token=" + data['token'])
    print(res.status_code)
    if res.status_code != 200:
        msg = {
            "msg": "Not Registerd User",
            "status": 0
        }
    elif res.status_code == 200:
        try:
            email = data['email']
        except:
            msg = {
                "msg": "Not Registerd User",
                "status": 0
            }   
        sql = "SELECT * from users where email = '{}'".format(data['email'])
        try:
            with connection.cursor() as cursor:
                cursor.execute(sql)
                # Gives Single Tuple with all information
                result = cursor.fetchall()[0]
                print(result)
                msg = {
                    "msg": "Valid User",
                    "status": 1
                }
        except:
            msg = {
            "msg": "Not Registerd User",
            "status": 0
        }
    return Response(res.status_code)

@api_view(['POST'])
def register(request):
    data = requesst.POST.dict()
    try:
        email = data['email']
        name = data['name'].split()
        gender = data['gender']
        dob = data['dob']
        phone = data['phone']
        address = data['address']
    except:
        msg = {
            "msg": "Details are not Filled Properly",
            "status": 0
        }
        return Response(msg)
    if(len(name) == 2):
        fname = str(name[0])
        lname = str(name[1])
    else:
        fname = name[0]
        lname = None

    sql = "INSERT into users (fname,lname,email,dob,gender,phone,address) values ('{}','{}','{}','{}','{}','{}','{}')"
    with connection.cursor() as cursor:
        cursor.execute(sql)
        
    msg = {
        "msg" : "Registered Successfully",
        "status" : 1
    }
    return Response(msg)