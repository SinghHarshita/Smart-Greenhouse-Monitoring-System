import serial
import requests
import json
import time

from lamp2 import light_On
from lamp1 import light_Off

from my_url import server_url

ser = serial.Serial('/dev/ttyACM0', 9600)

params = {
    "email": "abc@gmail.com",
    "password": "password",
    "cid": 1
}


def main_light_Air():
    url = server_url + '/getCropDetails'
    # url = 'http://127.0.0.1:8000/getCropDetails'
    print("Request start")
    flag = 0

    try:            
        r = requests.post(url = url, data = params, headers={"Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiZXhwaXJ5IjoiMjAyMC0wMS0zMSJ9.W_r0gs3YS6icdnqhwatbZVo3EB_aUwBKmQxrg7jU2YU"})

        crop_details = json.loads(r.text)
        # print(crop_details)
        flag = 1
    except:
        print("Error in parsing")
        pass
    return crop_details

def measurelight_from_arduino():
    ser.write(b'1')
    read_serial = ser.readLine()

    intensity = int(read_serial.decode())
    return intensity
    

def check_lightIntensity():
    intensity = measurelight_from_arduino()
    crop_det = main_light_Air()
    while crop_det['light_intensity_low'] > intensity:
        light_On()
        time.sleep(60)
        intensity = measurelight_from_arduino()
        if crop_det['light_intensity_low'] < intensity:
            light_Off()
            break



def measure_AirQuality_Arduino():
    ser.write(b'2')
    read_serial = ser.readLine()

    air_quality = int(read_serial.decode())
    return air_quality


def check_AirQuality():
    quality = measure_AirQuality_Arduino()
    return quality

def check_air_light():
    result = dict()
    result['air_quality'] = check_AirQuality()
    result['light_intensity'] = measurelight_from_arduino()
    return result    