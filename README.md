### wwweather - worldwide weather is a utility to get the current weather in any city

## Install

```bash
npm install -g wwweather
```

## Usage

To get a token, you need to register at the https://openweathermap.org/ and get an API token (it's free).
Then you need to pass token

```bash
weather -t [YOUR_TOKEN]
```

The token will be saved locally on your computer in the json format

You must save your favourite city with:

```bash
weather -s [CITY]
```

Run the command:

```bash
weather 
```
Output:
```console
WEATHER  Погода в городе Москва
☁️ пасмурно
Температура: 23.35 (ощущается как 22.97)
Влажность: 47%
Скорость ветра: 4.52 м/с
```

-h flag - To get all available commands

```bash
weather -h
```
Output:
```console
Без параметров - вывод погоды     
-s [CITY] для установки города    
-h вывод помощи                   
-t [API_KEY] для сохранения токена
```
