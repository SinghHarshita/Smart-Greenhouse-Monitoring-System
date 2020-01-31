#!/usr/bin/python
import RPi.GPIO as GPIO
import time

channel = 14
GPIO.setmode(GPIO.BCM)
GPIO.setup(channel, GPIO.IN)

def callback(channel):
    if GPIO.input(channel):
        print(GPIO.input(channel))
    else :
        print(GPIO.input(channel))

GPIO.add_event_detect(channel, GPIO.BOTH, bouncetime=300)  # let us know when the pin goes HIGH or LOW
# GPIO.add_event_detect(channel2, GPIO.BOTH, bouncetime=300)
GPIO.add_event_callback(channel, callback)  # assign function to GPIO PIN, Run function on change
# GPIO.add_event_callback(channel2, callback)

callback(channel)