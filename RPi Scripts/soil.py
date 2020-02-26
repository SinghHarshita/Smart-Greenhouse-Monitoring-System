#!/usr/bin/python
import RPi.GPIO as GPIO
import time
from datetime import datetime

from irrigation import irrigate
import requests

def callback(channel):
        #print("0")
        try : 
                print(channel)
                if GPIO.input(channel[0]) or GPIO.input(channel[1]):
                        return 0
                        #print(GPIO.input(channel))
                else:
                        #print("oops")
                        return 1
        except Exception as e:
                return 2

def soil_moisture():
        try:
                #GPIO SETUP
                channel1 = 21
                channel2 = 20
                GPIO.setmode(GPIO.BCM)
                GPIO.setup(channel1, GPIO.IN)
                GPIO.setup(channel2, GPIO.IN)
                

                GPIO.add_event_detect(channel1, GPIO.BOTH, bouncetime=300)  # let us know when the pin goes HIGH or LOW
                GPIO.add_event_detect(channel2, GPIO.BOTH, bouncetime=300)
                GPIO.add_event_callback(channel1, callback)  # assign function to GPIO PIN, Run function on change
                GPIO.add_event_callback(channel2, callback)
        except:
                pass

        return callback((channel1, channel2))
        # infinite loop
        #while True:
                #time.sleep(1)
                #callback((channel1, channel2))
                #GPIO.add_event_detect(channel, GPIO.BOTH, bouncetime=300)  # let us know when the pin goes HIGH or LOW
                #GPIO.add_event_callback(channel, callback)  # assign function to GPIO PIN, Run function on change

def start_irrigate():
        now = time.time()
        print("Irrigation Starts")
        while True:
            var1 = time.time()
            if var1 - now < 60:
                irrigate()


def soil_moisture_main():
        check_var = soil_moisture()

        if check_var == 0:
                print("Irrigation Started...")
                start_irrigate()
                print("Irrigation Stoppped...")
        else:
                print("No Irrigation")
        
        time.sleep(60*35)
        soil_moisture_main()