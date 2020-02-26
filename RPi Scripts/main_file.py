from soil import soil_moisture
from humidity import air_temperature_humidity
from my_url import server_url

from irrigation import main_irrigate
from lamp1 import light_Off
from lamp2 import light_On
from soil import soil_moisture
from temperature import temperature_main
from log_every_hour import log_every_hour_main
from airQ_lightIntensity import check_lightIntensity


import threading
thread_list = []

irrigation_thread = threading.Thread(target=ground_irrigate, args=(server_url,))
thread_list.append(irrigation_thread)

soil_thread = threading.Thread(target=soil_moisture_main)
thread_list.append(soil_thread)

temp_and_humidity = threading.Thread(target=temperature_main)
thread_list.append(temp_and_humidity)

log_every_hour = threading.Thread(target=log_every_hour_main)
thread_list.append(log_every_hour)

light_intensity = threading.Thread(target=check_lightIntensity)
thread_list.append(light_intensity)

thread_list = list(map(lambda x: x.start(), thread_list))
thread_list = list(map(lambda x: x.join(), thread_list))