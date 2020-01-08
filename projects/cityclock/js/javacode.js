/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Functie die kijkt naar de tijd/datum, en zorgt dat alles word laten zien
function updateTijd() {
    var vandaag = new Date();

    //tijd variabelen
    var uren = vandaag.getHours();
    var minuten = vandaag.getMinutes();
    var secondes = vandaag.getSeconds();

    //voor een 0 bij 06 secondes/minuten
    if (minuten < 10) {
        minuten = "0" + minuten;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    //Ik maak een string met de tijd en zet die in de HTML
    var tijd = uren + ':' + minuten + ':' + secondes;
    document.getElementById('tijd').innerHTML = tijd;

    // Dit veranderd de achtergrond en kleuren na 21 uur, door de class aan te passen van de body
    var background = document.getElementById("body");
    if (uren >= 21 || uren <= 6) {
        background.classList.add("night");
        //bron afbeelding: https://4.bp.blogspot.com/-Xryn2ce0j_8/TvCkg3NEQmI/AAAAAAAAAgM/oZcjSf8IVMI/s1600/BlackandWhiteMarinaandSkyline-TLG2011.png
    } else {
        background.classList.add("day");
        //bron afbeelding: https://www.pinterest.co.uk/pin/287808232416222979/
    }

    //Met var zone kijk ik welke optie er staat in de html
    var zone = document.getElementById('tijdzone').value;
    //In de if/else geef ik alk nummer van de zone een plaatsnaam en bereken ik de tijd
    var berichtUur = uren;
    var zoneNaam = 'Naam van stad';
    if (zone == 1) {
        berichtUur = uren;
        zoneNaam = 'Amsterdam';
    } else if (zone == 2) {
        berichtUur = uren - 1;
        zoneNaam = 'London';
    } else if (zone == 3) {
        berichtUur = uren;
        zoneNaam = 'Parijs';
    } else if (zone == 4) {
        berichtUur = uren - 6;
        zoneNaam = 'New York';
    } else if (zone == 5) {
        berichtUur = uren - 9;
        zoneNaam = 'Los Angeles';
    } else if (zone == 6) {
        berichtUur = uren + 7;
        zoneNaam = 'Tokio';
    } else if (zone == 7) {
        berichtUur = uren + 1;
        zoneNaam = 'Moskou';
    } else if (zone == 8) {
        berichtUur = uren + 5;
        zoneNaam = 'Jakarta';
    }
    //Wanneer het aantal uren negatief is zorgen deze ervoor dat er een normale tijd staat
    if (berichtUur == -1) {
        berichtUur = 17;
    } else if (berichtUur == -2) {
        berichtUur = 18;
    } else if (berichtUur == -3) {
        berichtUur = 19;
    } else if (berichtUur == -4) {
        berichtUur = 20;
    } else if (berichtUur == -5) {
        berichtUur = 19;
    } else if (berichtUur == -6) {
        berichtUur = 18;
    } else if (berichtUur == -7) {
        berichtUur = 17;
    } else if (berichtUur == -8) {
        berichtUur = 16;
    } else if (berichtUur == -9) {
        berichtUur = 15;
    }

    //En als de uren boven 24 komen word het hierdoor weer goedgezet
    if (berichtUur == 24) {
        berichtUur = '00';
    } else if (berichtUur == 25) {
        berichtUur = '0' + 1;
    } else if (berichtUur == 26) {
        berichtUur = '0' + 2;
    } else if (berichtUur == 27) {
        berichtUur = '0' + 3;
    } else if (berichtUur == 28) {
        berichtUur = '0' + 4;
    } else if (berichtUur == 29) {
        berichtUur = '0' + 5;
    } else if (berichtUur == 30) {
        berichtUur = '0' + 6;
    } else if (berichtUur == 31) {
        berichtUur = '0' + 7;
    }

    //Hiermee schrijf ik de tijd op dat het daar is.
    document.getElementById('tijdverschil').innerHTML = 'In ' + zoneNaam + ' is het nu ' + berichtUur + ':' + minuten + ':' + secondes + '.';
}

function updateDate() {
    //Datum weergeven
    var vandaag = new Date();
    var datum = vandaag.getDate();
    var dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
    var dezeDag = dagen[vandaag.getDay() - 1];
    var maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];
    var dezeMaand = maanden[vandaag.getMonth()];
    document.getElementById('date').innerHTML = dezeDag + ' ' + datum + ' ' + dezeMaand;
}
//Om de tijd live te laten zien laat ik de functie updateTijd elke 1000(1 seconde) opnieuw gaan
var refreshTijd = 1000;
setInterval(updateTijd, refreshTijd);
//Dit update de datum wanneer de pagina word geladen
updateDate();

//Code voor de afgelopen maanden
//variabelen die ik nodig heb
var vandaag = new Date();
var maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];
var afgelopenMaanden = "";
var maand = vandaag.getMonth();

//Loop zorgt ervoor dat de juiste maanden worden neergezet
var i;
for (i = 0; i <= maand; i++) {
    afgelopenMaanden += maanden[i] + ' ';
}

//zet de goede text neer wanneer aangeroepen
function afgelopenMaand() {
    document.getElementById('maand').innerHTML = "Maanden die dit jaar al geweest zijn: " + afgelopenMaanden;
}

//roept de functie aan wanneer er geklikt word
document.getElementById('maand').addEventListener("click", afgelopenMaand);



//Voor later: Alles uit de grote functie halen, zodat alles veel makkelijker is en overzichtelijker.
