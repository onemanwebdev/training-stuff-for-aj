var C = document.getElementById('celsius');
var F = document.getElementById('fahrenheit');

function przeliczF() {
    F.value = "";
    var pattern = /^(\-)?[0-9]*(\,|\.)?[0-9]*$/; /* pattern - wzór */
    var testResult = pattern.test(C.value);
    if (!testResult || C.value == "") { /* ! jest zaprzeczeniem */
        document.querySelector("#celsius").value = "Podaj temperaturę";
    } else {
        var resultF = (32 + (9 / 5) * parseFloat(C.value));
        document.querySelector("#fahrenheit").value = resultF.toFixed(2); /* .value - dla inputu, toFixed - zaokrągla */
    }
}

function przeliczC() {
    C.value = "";
    var pattern = /^(\-)?[0-9]*(\,|\.)?[0-9]*$/;
    var testResult = pattern.test(F.value);
    if (!testResult || F.value == "") {
        document.querySelector("#fahrenheit").value = "Podaj temperaturę";
    } else {
        var resultC = ((5 / 9) * (parseFloat(F.value) - 32));
        document.querySelector("#celsius").value = resultC.toFixed(2);
    }
}

document.onclick = clear;

function clear(event) {
    if (event.target.getAttribute('type') !== 'submit') {
        C.value = "";
        F.value = "";
    }
}
