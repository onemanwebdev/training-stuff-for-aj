var degC = document.getElementById("celsjusze");
var degF = document.getElementById("fahrenheity");

degC.onblur = calculateToF;
degC.onfocus = start;

function calculateToF() {
    var pasedValue = check(degC.value);
    var wynik = (32 + (9 / 5) * parseFloat(pasedValue));
    degF.value = wynik.toFixed(2);
}

degF.onblur = calculateToC;
degF.onfocus = start;

function calculateToC() {
    var pasedValue = check(degF.value);
    var wynik = ((5 / 9) * (parseFloat(pasedValue) - 32));
    degC.value = wynik.toFixed(2);
}

function check(arg) {
    var pattern = /^(\-)?[0-9]*(\,|\.)?[0-9]*$/;
    var testResult = pattern.test(arg)
    if (testResult) {
        return arg;
    } else {
        document.querySelector(".label").textContent = "Podana temperatura nie jest liczbą. Podaj temperaturę";
    }
}

function start () {
    degC.value = ""
    degF.value = ""
    document.querySelector(".label").textContent = "Przelicz temperaturę";
}
