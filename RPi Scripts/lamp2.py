import RPi.GPIO as GPIO

def light_On():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(2, GPIO.OUT)
    GPIO.output(2, True)
