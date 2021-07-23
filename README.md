# Proyecto Lampara:

Imagen Proyecto:

![AppLamp_Estructura_bb](https://user-images.githubusercontent.com/41652885/126735611-682a077c-583f-4669-8646-2b45e67440e7.png)


Codigo Arduino:
```
  #include <SoftwareSerial.h>
  // You should get Auth Token in the Blynk App.
  // Go to the Project Settings (nut icon).
  SoftwareSerial SerialBLE(10,11); //tx , rxs
  int led1 = 8;
  char data;
  void setup()
  {
    pinMode(led1, OUTPUT);
    SerialBLE.begin(9600);
    Serial.println("connection");
  }

  void loop() {
    // put your main code here, to run repeatedly:
    if(SerialBLE.available())
      data = SerialBLE.read();
     if(data == 'A'){
        digitalWrite(led1,HIGH);
      }
      if(data == 'B'){
        digitalWrite(led1,LOW);
      }


  }
```
