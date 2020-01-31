#!/usr/bin/python
import RPi.GPIO as GPIO
import time

def soil_moisture():

        #GPIO SETUP
        channel1 = 21
        channel2 = 20
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(channel1, GPIO.IN)
        GPIO.setup(channel2, GPIO.IN)
         
        def callback(channel):
                #print("0")
                try : 
                        print(channel)
                        if GPIO.input(channel[0]) or GPIO.input(channel[1]):
                                print("0")
                                #print(GPIO.input(channel))
                        else:
                                #print("oops")
                                print("1")
                except Exception as e:
                        print("2")
        GPIO.add_event_detect(channel1, GPIO.BOTH, bouncetime=300)  # let us know when the pin goes HIGH or LOW
        GPIO.add_event_detect(channel2, GPIO.BOTH, bouncetime=300)
        GPIO.add_event_callback(channel1, callback)  # assign function to GPIO PIN, Run function on change
        GPIO.add_event_callback(channel2, callback)
        
        callback((channel1, channel2))
        # infinite loop
        #while True:
                #time.sleep(1)
                #callback((channel1, channel2))
                #GPIO.add_event_detect(channel, GPIO.BOTH, bouncetime=300)  # let us know when the pin goes HIGH or LOW
                #GPIO.add_event_callback(channel, callback)  # assign function to GPIO PIN, Run function on change
soil_moisture()