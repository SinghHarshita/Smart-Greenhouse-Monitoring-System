import RPi.GPIO as GPIO          
from time import sleep
import requests
import json
from datetime import datetime
import ast
import time

in1 = 24
in2 = 23
en = 25
# For Sprinkle
sin1 = 14
sin2 = 15
sen = 18

temp1=1

GPIO.setmode(GPIO.BCM)
GPIO.setup(in1,GPIO.OUT)
GPIO.setup(in2,GPIO.OUT)
GPIO.setup(en,GPIO.OUT)
GPIO.output(in1,GPIO.HIGH)
GPIO.output(in2,GPIO.LOW)
p=GPIO.PWM(en,1000)
p.start(25)

GPIO.setup(sin1,GPIO.OUT)
GPIO.setup(sin2,GPIO.OUT)
GPIO.setup(sen,GPIO.OUT)
GPIO.output(sin1,GPIO.HIGH)
GPIO.output(sin2,GPIO.LOW)
s=GPIO.PWM(sen,1000)
s.start(25)
'''
print("\n")
print("The default speed & direction of motor is LOW & Forward.....")
print("r-run s-stop f-forward b-backward l-low m-medium h-high e-exit")
print("\n")
'''

'''
while(1):

    x=input()
    
    if x=='r':
        print("run")
        if(temp1==1):
         GPIO.output(in1,GPIO.HIGH)
         GPIO.output(in2,GPIO.LOW)
         print("forward")
         x='z'
        else:
         GPIO.output(in1,GPIO.LOW)
         GPIO.output(in2,GPIO.HIGH)
         print("backward")
         x='z'
    elif x=='e':
        GPIO.cleanup()
        break
'''
    
def irrigate():
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)

params = {
    "email": "abc@gmail.com",
    "password": "password",
    "ucp_id": 1
}

def ground_irrigate(server_url):
    url = server_url + "/getirrigationdetails"
    print("Request start")
    flag = 0
    if is_connected():
        try:
            r = requests.post(url = url, data = params, headers={"Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiZXhwaXJ5IjoiMjAyMC0wMS0zMSJ9.W_r0gs3YS6icdnqhwatbZVo3EB_aUwBKmQxrg7jU2YU"})
            print(r.text)

            irrigation_details = json.loads(r.text)
            print(irrigation_details)
            flag = 1
        except:
            print("Error in parsing")
            pass
        #print(irrigation_details,type(irrigation_details))

        now = datetime.now()
        cur_time = now.strftime("%Y-%m-%d %H:%M:%S")
        if(flag == 1 and (irrigation_details['starttime']<cur_time and irrigation_details['endtime']>cur_time)):
            print("Irrigation Starts")
            while(irrigation_details['endtime']>cur_time):
                now = datetime.now()
                cur_time = now.strftime("%Y-%m-%d %H:%M:%S")
                irrigate()
            print("Irrigation ends")
        else:
            print("No irrigation")
        print("Request Finish")

    time.sleep(60*60)
    main_irrigate(server_url)

def sprinkle_irrigate():
    GPIO.output(sin1,GPIO.HIGH)
    GPIO.output(sin2,GPIO.LOW)

def finish_irrigation():
    GPIO.cleanup()
