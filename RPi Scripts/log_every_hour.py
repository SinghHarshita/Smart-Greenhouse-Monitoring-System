import requests
import json
import datetime

from my_url import server_url, is_connected

from temperature import measure_temp
from airQ_lightIntensity import check_air_light

def log_every_hour_main():
    url = server_url + '/logeveryhour'
    result_dict = dict()

    var1 = datetime.datetime.now()
    hour = var1.strftime("%H")
    res_dict = measure_temp()
    try:
        if res_dict['status'] == 1:
            result_dict['temp'] = res_dict['temperature']
            result_dict['humdity'] = res_dict['humidity']
        else:
            result_dict['temp'] = -1
            result_dict['humdity'] = -1
    except:
        result_dict['temp'] = -1
        result_dict['humdity'] = -1
    
    air_light = check_air_light()
    result_dict['light_intensity'] = air_light['light_intensity']
    result_dict['air_quality'] = air_light['air_quality']

    params['log_details'] = json.dumps(result_dict)
    if is_connected():
        try:
            r = requests.post(url = url, data = params, headers={"Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiZXhwaXJ5IjoiMjAyMC0wMS0zMSJ9.W_r0gs3YS6icdnqhwatbZVo3EB_aUwBKmQxrg7jU2YU"})
            print("Logged Successfully....")
        except:
            print("Error in Logging")
    
    time.sleep(60*60)
    log_every_hour_main()