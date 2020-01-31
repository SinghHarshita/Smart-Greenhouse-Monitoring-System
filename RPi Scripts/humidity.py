import Adafruit_DHT

def air_temperature_humidity(data):
    print(data)
    DHT_SENSOR = Adafruit_DHT.DHT22
    DHT_PIN = 4

    if data == 1:
        humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
        
        if humidity is not None and temperature is not None:
            print("Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity))
        else:
            print(humidity, temperature)
            print("Failed to retrieve data from humidity sensor")

    #  Logging the Data from the Raspberry Pi Humidity Sensor

print("hello")
air_temperature_humidity(1)