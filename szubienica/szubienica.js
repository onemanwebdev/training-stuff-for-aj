var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase(); /* funkcja wbudowana zamieniająca litery na wielkie */

var dlugosc = haslo.length; /* potrzebujemy długość łańcucha hasła, aby móc go wykreskować (ukryć hasło) */

var haslo1 = ""; /* to będzie hasło zastępcze - zakreskowane */

for (i=0; i<dlugosc; i++) {                              /* Tworzymy pętlę for, która wykona się tyle razy, ile znaków jest w haśle (rozpocznij od i=0 i powtarzaj dopóki i<dlugosc) */
    if (haslo.charAt(i) == " ") {                        /* charAt(i) - jaki znak przy danym numerze w łańcuchu */
        haslo1 = haslo1 + " ";
    } else {                                             /* W każdej iteracji pętli, do zmiennej haslo1 dokleimy albo myślnik albo spcję */
        haslo1 = haslo1 + "-";
    }
}

function wypisz_haslo() {
    document.getElementById("plansza").innerHTML = haslo1; /* hasło będzie wyświetlone w divie "plansza". Funkcja ta spowoduje odświeżenie hasła (docelowo po każdym kliknięciu literki) */
}

window.onload = start;  /* kiedy w oknie załaduje się strona wywoła się funkcja. Odpowiednik onload w sekcji <body> Tylko jedna funkcja do jednego zdarzenia, dlatego funkcja wypisz_haslo() wywołuje się z funkcji start() */

var litery = [];

litery[0] = "A"; /* litery[] to tablica przechowująca 35 łańcuchów; dla tablicy możemy stosować notację z nawiasami [] dla łańcuchów nie */
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {

    var tresc_diva = ""; /* w tej zmiennej umieścimy wewnętrzny HTML diva alfabet, czyli w praktyce 35 divów z poszczególymi literami alfabetu */

    for (i = 0; i <=34; i++) { /* pętla wykona się 35 razy, w każdej iteracji wygenerujemy jednego diva klasy .litera */
        var element = "lit" + i; /* div z nazwą litery */
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>' /* % dzielenie */
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}

function sprawdz(nr) {
    for(i=0; i<dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1.charAt(i) = litery[nr];
        }
    }
    wypisz_haslo;
}
