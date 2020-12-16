# Future Me

Een webapplicatie waarin je een boodschap kunt typen over bijvoorbeeld hoe het nu met je gaat. Ook kun je een bepaald periode aangeven, waarna je je eigen bericht per email gestuurd krijgt om te kunnen reflecteren op je eigen boodschap.

## Table of Contents
1. Installation
2. What it does
3. Usage
4. Feedback
5. License

## 1. Installation

De applicatie is reeds in ontwikkeling en nog niet geschikt gemaakt om te exporteren. Je kunt de applicatie wel downloaden en zelf bouwen, hiervoor is wel een (lokale) database benodigd en Node.js.

Voor het installeren en draaien van API zijn een paar stappen die doorlopen dienen te worden. 
1. Installeren van Node.js
2. Downloaden van Github bestanden
3. Bestanden uitpakken en locatie geven
4. in de terminal naar de locatie navigeren
5. API starten

### a. Install Node.js for Mac

1. Go to the Node.js [Downloads page](https://nodejs.org/en/download/)
2. Download Node.js for macOS by clicking the "Macintosh Installer" option
3. Run de gedownloade Node.js .pkg Installer
4. Voer de installer uit, inclusief het accepteren van de  license, het selecteren van een locatie en toestemming geven voor de installatie.
5. Node.js is geinstalleerd! Om er zeker van te zijn dat Node.js juist is geinstalleerd, run *node -v* in de terminal en als antwoord zou je iets moeten krijgen zoals *v6.9.4*

### a. Install Node.js for Windows

1. Go to the Node.js [Downloads page](https://nodejs.org/en/download/)
2. Download Node.js for Windows by clicking the "Windows Installer" option
3. Run de gedownloade Node.js .pkg Installer
4. Voer de installer uit, inclusief het accepteren van de  license, het selecteren van een locatie en toestemming geven voor de installatie.
5. Node.js is geinstalleerd! Om er zeker van te zijn dat Node.js juist is geinstalleerd, run *node -v* in de terminal en als antwoord zou je iets moeten krijgen zoals *v6.9.4*

### b. Downloaden van Github bestanden
Voor het downloaden van de API bestanden in een browser dient de API branch geselecteerd te zijn. Wanneer de juiste branch is geselecteerd kan op het pijlte naar beneden, op de groene knop waarop "code" staat, gedrukt worden en kun je kiezen voor "Download ZIP".

### c. Bestanden uitpakken en locatie geven
De bestanden in dit zip bestanden kunnen uitgepakt worden met de optie hiervoor in het besturingssysteem of met een programma als [WinZip](https://www.winzip.com/win/en/prod_down.html). Plaats de bestanden uit de zip op een plek die makkelijk terug te vinden is. 

### d. In terminal naar locatie navigeren
Navigeer naar de locatie waar je de bestanden hebt opgeslagen in de terminal. Voor het navigeren in de terminal kun je gebruik maken van het command *ls* om een lijst van documenten te zien in de huidige folder en het command *cd* gevolgd door de naam van een folder om te navigeren naar deze foler. 

### e. API starten
Het starten van de API kan, wanneer er naar de juiste folder is genavigeert in de terminal, met het command *npm run start* in de terminal. De API wordt automatisch gestart en wanneer er geen foutmeldingen terug komen werkt de API.

## 2. What it does
In de interface zijn de benodigde gegevens in te vullen voor de API. Deze API heeft je naam, emialadress, een bericht en een dag nodig. De bedoeling is om een zelf reflecteren bericht te schrijven aan jezelf, waarin je bijvoorbeeld beschrijft hoe je huidige stituatie is en hoe je wilt dat je leven eruit ziet wanneer je het bericht ontvangt. Het bericht ontavng je op de door jou aangegeven datum via het emailadress dat je hebt opgegeven. 

## 3. Usage

Via een webapplicatie of het programma postman en een terminal programma kunnen de functie van de applicatie getest worden, Dit houdt in het invoeren van gegevens en het versturen van emails. 

## 4. Testing
Er zijn enkele mogelijkheden voor het testen van de verschillende onderdelen van de applicatie en API. 

### front-end
Voor het testen van de front-end kan deze offline worden geopend zonder dat de API draait. Wanneer je test gegevens invult kun je in de console zien of dit correct gedaan is of niet. Wanneer de gegevens juist zijn ingevuld kun je een object verwachten met het volgende format:

```json
{
    "firstName": "Test",
    "lastName": "Message",
    "message": "test message number 2",
    "email": "nielsmanders@gmail.com",
    "createdAt": 1602626400,
    "sendAt": 1602626400
}
```
Wanneer er wel gebruik wordt gemaakt van de API kan in de database ook gekeken worden of het ingevulde testbericht hierin terug komt. Dit kan door in bijvoorbeeld MYSQL Workbench de volgende query in te vullen:
```
select * FROM message;
```
De database zal alle ingevulde messages teruggeven en wanneer alles goed werkt zal het testbericht hier ook tussen staan, onder aan de lijst van messages.

### Messages
Om te zien of de juiste berichten geselecteerd worden kan de API gesstart worden, deze geeft na enige tijd zelf aan welke timestamp bij vandaag hoort en laat zien welke berichten hiermee overeen komen en verstuurd worden op de huidige dag. Het starten van de API kan op de volgende manier:

```shell
npm run start:dev
```

### Emails
Voor het versturen van de email wordt gebruikt gemaakt van een Gmail API die door Google beschikbaar gesteld wordt. Helaas is de enige manier om te testen, of de het versturen van email werkt, hierdoor het invullen van gegevens in de front-end of direct in de database waarbij een eigen emailadress gebruikt wordt. Als het goed is ontvang je na enige tijd automatisch je ingevuld test gegevens via email. 

## 5. Feedback
Alle soorten feedback zijn welkom. Dit kan zijn in de vorm van [issues](https://github.com/nielsmanders/FutureMe/issues), [pull requests](https://github.com/nielsmanders/FutureMe/pulls) of iets anders via [email](mailto:lunde@adobe.com?subject=[Github]%Feedback%20FutureMe).

## 6. License
MIT License

Copyright (c) 2020 nielsmanders

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
