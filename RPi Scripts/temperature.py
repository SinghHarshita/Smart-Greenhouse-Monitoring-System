import sys
import Adafruit_DHT
import requests
import json

from irrigation import sprinkle_irrigate
from lamp1 import light_Off
from lamp2 import light_On

sensor = Adafruit_DHT.DHT11
pin = '17'

def measure_temp():
    result_dict = dict()
    try:
        humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
        if humidity is not None:
            result_dict['humidity'] = humidity
        else:
            result_dict['humidity'] = -1
        
        if temperature is not None:
            result_dict['temperature'] = temperature
        else:
            result_dict['temperature'] = -1
        
        result_dict['status'] = 1
    except:
        result_dict['status'] = 0
    
    return result_dict

params = {
    "email": "abc@gmail.com",
    "password": "password",
    "cid": 1
}

def temperature_main(server_url):
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
    
    
    temp_hum = measure_temp()
    if (temp_hum['temperature'] > crop_details['temp_high'] or temp_hum['humidity'] < crop_details['humidity_low']):
        now = time.time()
        while (time.time() - now)<60:
            sprinkle_irrigate()
    elif (temp_hum['temperature'] < crop_details['temp_low'] or temp_hum['humidity'] > crop_details['humidity_high']):
        now = time.time()
        fl_temp = 0
        while (time.time() - now)<60:
            light_On()
            fl_temp = 1

        if fl_temp == 1:
            fl_temp = 0
            light_Off()
    time.sleep(60*60)
    temperature_main(server_url)