from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.db import connection

from jose import jws
import datetime as jwtdt
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view,permission_classes
from rest_framework import status,exceptions
from rest_framework.views import APIView

from .models import User
from django.core import serializers
import json

from .models import UserCropProductMapping
from datetime import datetime, timedelta

from .models import User,Crops,CropsLog,Irrigation,IrrigationLog,LogEveryHour,Products,Irrigation

from rest_framework.authentication import get_authorization_header
import ast
import yaml

def create_jwt(email, password):
    # Just for Uniqueness
    expiry = jwtdt.date.today()

    # Creating token with email known as username and password
    token = jws.sign({'username': email, 'password': password , 'expiry': str(expiry)}, 'seKre8',  algorithm='HS256')
    return token

def decode_jwt(request):
    headers = get_authorization_header(request).split()
    print(headers)
    if headers[0].decode() != 'Token' or len(headers)>2:
        msg = {
            "Authenticated" : 'False',
            "message" : 'Invalid Header'
        }
        return msg
    elif len(headers) == 2:
        # payload = headers[3].decode().split('=')[1]
        decoded_dict = jws.verify(headers[1], 'seKre8', algorithms=['HS256'])
        try:
            data = json.loads(decoded_dict.decode())
            print(data)
            data['Authenticated'] = 'True'    
            return data
        except:
            msg = {
                "Authenticated" : 'False',
                "message" : 'Invalid Header'
            }
            return msg    	
    else:
        msg = {
            "Authenticated" : 'False',
            "message" : 'Invalid Header'
        }
        return msg

class login(APIView):
    def get(self, request, format=None):
        return Response({ "msg": "Get Method" })

    def post(self, request, format=None):
        email_id = request.data['email']
        pwd = request.data['password']

        # For storing data and token
        data = dict()
        try:
            res = User.objects.get(email=email_id, password=pwd)
            data = eval(serializers.serialize('json',[res,]))
            data = data[0]['fields']

            # If user is a registered User
            token = create_jwt(email_id, pwd)
            data = {
                "token": token
            }
        except:
            # If not a registered User
            msg = {
                "Authentication": 'Failed',
                "message": "Not a user",
                "status": 0
            }
            raise exceptions.AuthenticationFailed(msg)

        # Fetching Log details for Dashboard
        try:
            id_list = UserCropProductMapping.objects.filter(uid=res.pk).values('id','pid')
            log_data = list(id_list)
            id = []
            for i in log_data:
                id.append(i['id'])
            id = tuple(id)

            # Getting Log of last 10 days
            d = datetime.today() - timedelta(days=10)
            d = d.strftime("%Y-%m-%d")

            result = LogEveryHour.objects.filter(ucp_id=id)
            result = json.loads(serializers.serialize('json',result))
            log_details = []

            # Encapsulating all the log and product details 
            for i in result:
                for j in log_data:
                    if j['id'] == i['fields']['ucp']:
                        i['fields']['pid'] = j['pid']
                        i['fields']['details'] = json.loads(i['fields']['details'])
                        log_details.append(i['fields'])
                        break
            print(log_details)
            data['log_details'] = log_details              
        except:
            pass

        return Response(data)

class register(APIView):
    def get(self, request, format=None):
        return Response({"data": "Get Method"})

    def post(self, request, format=None):
        email = request.data['email'] or None
        password = request.data['password'] or None
        name = request.data['name'] or None
        type1 = request.data['type'] or 0

        if not(email and password and name):
            msg = {
                "msg": "Not Valid Input...",
                "status": 0
            }
            return Response(msg)

        try:
            user = User.objects.create(email=email,password=password,name=name,type=type1)
            msg = {
                "msg": "Registered Successfully...",
                "status": 1
            }
        except:
            msg = {
                "msg": "Error In Registration...",
                "status": 0
            }
        return Response(msg)

class UpdateCropDetails(APIView):
    def get(self,request,format=None):
        return Response({"data": "Get Method"})

    def post(self, request, format=None):
        # Decoding the Token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        # return Response({"data": decode_data})

        data = dict(request.data)
        if type(data['cid']) == list:
            cid = data['cid'][0]
        # return Response({"data": data})

        # Fetching current crop details and storing it in log
        crop = Crops.objects.get(cid=cid)
        crop_detail = json.loads(serializers.serialize('json',[crop,]))
        pk = crop_detail[0]['pk']
        crop_detail = crop_detail[0]['fields']
        # Storing in crop_log table
        try:
            crop_log = CropsLog.objects.create(cid=pk,cname=crop_detail['cname'],ctype=crop_detail['ctype'],other_type=crop_detail['other_type'],humidity_high=crop_detail['humidity_high'],humidity_low=crop_detail['humidity_low'],temp_high=crop_detail['temp_high'],temp_low=crop_detail['temp_low'],light_intensity_high=crop_detail['light_intensity_high'],light_intensity_low=crop_detail['light_intensity_low'],soil_ph_high=crop_detail['soil_ph_high'],soil_ph_low=crop_detail['soil_ph_low'],air_quality_high=crop_detail['air_quality_high'],air_quality_low=crop_detail['air_quality_low'])

            msg = {
                "msg": "Logged data Successfully...",
                "status": 1
            }
        except:
            msg = {
                "msg": "Error in Logging the data",
                "status": 0
            }
        
        # Inserting new data into crops
        try:
            if type(data['cid']) == list:
                data = request.POST.dict()
            crop.cname = data['cname']
            crop.ctype = data['ctype']
            crop.other_type = data['other_type']
            crop.humidity_high = data['humidity_high']
            crop.humidity_low = data['humidity_low']
            crop.temp_high = data['temp_high']
            crop.temp_low = data['temp_low']
            crop.light_intensity_high = data['light_intensity_high']
            crop.light_intensity_low = data['light_intensity_low']
            crop.soil_ph_high = data['soil_ph_high']
            crop.soil_ph_low = data['soil_ph_low']
            crop.air_quality_high = data['air_quality_high']
            crop.air_quality_low = data['air_quality_low']
            now = datetime.now()
            crop.updated_at = now.strftime("%Y-%m-%d %H:%M:%S")
            crop.save()
            msg["msg1"] = "New Condition Inserted Successfully..."
            msg['status1'] = 1
        except:
            msg["msg1"] = "Error in Putting New Condition..."
            msg['status1'] = 0

        return Response(msg)

class UpdateIrrigationDetails(APIView):
    def get(self, request, format=None):
        return Response({"data": "Get Method"})

    def post(self, request, format=None):
        # usr = UserCropProductMapping.objects.filter(id=1)
        # usr = json.loads(serializers.serialize('json',usr))
        # return Response({"data": usr})

        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        data = dict(request.data)
        if type(data['ucp_id']) == list:
            data = request.POST.dict()
        try:
            irrigation = Irrigation.objects.get(ucp=data['ucp_id'])
            print(irrigation)
            irrigation_details = json.loads(serializers.serialize('json',[irrigation,]))
            irrigation_details = irrigation_details[0]['fields']

            now = datetime.now()
            cur_date = now.strftime("%Y-%m-%d")
            cur_time = now.strftime("%Y-%m-%d %H:%M:%S")

            # Logging previous irrigation
            irrigation_log = IrrigationLog.objects.create(ucp=UserCropProductMapping.objects.get(id=data['ucp_id']),details=irrigation_details['details'],date=cur_date, updated_at=cur_time)

            # Updating the current irrigation
            
            irrigation.date = now.strftime("%Y-%m-%d")
            irrigation.details = data['irrigation_details']
            irrigation.updated_at = now.strftime("%Y-%m-%d %H:%M:%S")
            irrigation.save()
            msg = {
                "msg": "Logged and Updated Successfully...",
                "status": 1
            }
            return Response(msg)
        except:
            msg = {
                "msg": "Error in Logging the Details...",
                "status": 0
            }
        return Response(msg)

class logEveryHour(APIView):
    def get(self, request, format=None):
        return Response({"msg": "Get Method"})

    def post(self, request, format=None):
        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        data = dict(request.data)
        if type(data['ucp_id']) == list:
            data = request.POST.dict()

        details = data['log_details']
        now = datetime.now()
        cur_date = now.strftime("%Y-%m-%d")
        cur_time = now.strftime("%Y-%m-%d %H:%M:%S")
        
        try:
            # Work if entry already exist
            log_hour = LogEveryHour.objects.get(ucp=UserCropProductMapping.objects.get(id=data['ucp_id']), date=cur_date)
            log_details = json.loads(serializers.serialize('json',[log_hour,]))
            # return Response({"data": log_details})
            log_details = json.loads(log_details[0]['details'])
            log_details[cur_time] = details
            log_hour.details = log_details
            log_hour.save()
        except:
            # Works for new Entry
            time=now.strftime("%H")
            log_details = dict()
            log_details[time] = details
            log_hour = LogEveryHour.objects.create(ucp=UserCropProductMapping.objects.get(id=data['ucp_id']),date=cur_date,details=json.dumps(log_details))
        msg = {
            "msg": "Logged Successfully...",
            "status": 1
        }

        # ideal_crop_details = Crops.objects.get(cid=)
        return Response(msg)

class AddNewProduct(APIView):
    def get(self, request, format=None):
        return Response({"method": "Get Method"})
    
    def post(self, request, format=None):
        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        data = dict(request.data)
        if type(data['ucp_id']) == list:
            data = request.POST.dict()

        rpi_number = data['rpi_number']
        sensors = data['sensors']
        crop_num = data['cid']

        try:
            # Adding Product details
            product = Products.objects.create(rpi_number=rpi_number, sensors=sensors)
            product_details = json.loads(serializers.serialize('json',[product,]))
            # return Response({"msg": product_details})
            ucp_map = UserCropProductMapping.objects.create(uid=User.objects.get(uid=uid),cid=Crops.objects.get(cid=crop_num),pid=Products.objects.get(pid=product_details[0]['pk']))
            ucp_details = json.loads(serializers.serialize('json',[ucp_map,]))
            msg = {
                "msg": "Added Successfully....",
                "status": 1
            }
        except:
            msg = {
                "msg": "Error In Adding data...",
                "status": 0
            }
            return Response(msg)

class AddIrrigationDetails(APIView):
    def get(self, request, format=None):
        return Response({"msg": "Get Method"})

    def post(self, request, format=None):
        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        data = dict(request.data)
        if type(data['ucp_id']) == list:
            data = request.POST.dict()
        try:
            irrigation_details = data['irrigation_details']
            ucp_id = data['ucp_id']
            now = datetime.now()
            cur_date = now.strftime("%Y-%m-%d")
            cur_time = now.strftime("%Y-%m-%d %H:%M:%S")

            irrigation = Irrigation.objects.create(ucp=UserCropProductMapping.objects.get(id=ucp_id),details=irrigation_details,date=cur_date,updated_at=cur_time)
            irrigation_dict = json.loads(serializers.serialize('json',[irrigation,]))
            msg = {
                "msg": "Details added Successfully....",
                "status": 1
            }
        except:
            msg = {
                "msg": "Error in Addind Data....",
                "status": 0
            }
        return Response(msg)

class GetIrrigationDetails(APIView):
    def get(self, request, format=None):
        return Response({"method": "Get Method"})

    def post(self, request, format=None):
        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        data = request.data
        if type(data['ucp_id']) == list:
            data = request.POST.dict()
        try:
            now = datetime.now()
            cur_date = now.strftime("%Y-%m-%d")
            cur_time = now.strftime("%Y-%m-%d %H:%M:%S")
            # Fetching current date irrigation details
            irrigation_details = Irrigation.objects.get(ucp=data['ucp_id'], date=cur_date)
            irrigation_details = json.loads(serializers.serialize('json',[irrigation_details,]))[0]
            details = yaml.load(irrigation_details['fields']['details'])
            details = details[0]
            print(type(details),details)
            # print(irrigation_details)
            return Response(details)
        except:
            # If data is not present then fetching default irrigation details
            irrigation_details = UserCropProductMapping.objects.get(id=data['ucp_id'])
            irrigation_details = json.loads(serializers.serialize('json',[irrigation_details,]))
            details = irrigation_details[0]['fields']['default_irrigation']
            return Response(details)

class getCropDetails(APIView):
    def get(self, request, format=None):
        return Response({"msg": "Get Method..."})
    
    def post(self, request, format=None):
        # Decode the token
        decode_data = decode_jwt(request)
        email = decode_data['username']
        password = decode_data['password']
        try:
            # Authenticating the user
            user = User.objects.get(email=email, password=password)
            user_detail = json.loads(serializers.serialize('json',[user,]))
            uid = user_detail[0]['pk']
        except:
            msg = {
                "msg": "Authentication Failed...",
                "status": 0
            }
            return Response(msg)
        
        data = request.data
        if type(data['cid']) == list:
            data = request.POST.dict()
        crop_details = Crops.objects.get(cid=data['cid'])
        crop_details = json.loads(serializers.serialize('json',[crop_details]))
        crop_details = crop_details[0]['fields']
        print(crop_details)
        return Response(crop_details)