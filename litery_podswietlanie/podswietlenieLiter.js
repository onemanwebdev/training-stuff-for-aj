window.onload = start;
var big =   ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'];
var small = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ż','ź']

function start () {

    var squareLeft = "";

    for (i = 0; i < big.length; i++) {
        var element = "bigLetter" + i;
        squareLeft = squareLeft + '<div class="letter_template" id="' + element + '">' + big[i] + '</div>';
        if ((i+1) % 7 == 0) { squareLeft = squareLeft + '<div style="clear:both;"></div>'; }
    }

    document.querySelector(".bigletters").innerHTML = squareLeft;

    var squareRight = "";

    for (i = 0; i < small.length; i++) {
        var element = "smallLetter" + i;
        squareRight = squareRight + '<div class="letter_template" id="' + element + '">' + small[i] + '</div>';
        if ((i+1) % 7 == 0) { squareRight = squareRight + '<div style="clear:both;"></div>'; }
    }

    document.querySelector(".smallletters").innerHTML = squareRight;
}


function sprawdz() {

    var litera = document.getElementById("pole").value;

    if (litera.length !== 1 || (big.indexOf(litera) == -1 && small.indexOf(litera) == -1)) {
        document.querySelector("#communique").textContent = "Wpisz pojedyńczą literę";
        start();
    } else {
        document.querySelector("#communique").textContent = "";
        highlightLetter(litera);
    }
}

function highlightLetter(letter) {

    if (big.indexOf(letter) !== -1) {
        var index = big.indexOf(letter);
        document.querySelector("#bigLetter" + index).setAttribute("class", "letter_highlight");
    }
    if (small.indexOf(letter) !== -1) {
        var index = small.indexOf(letter);
        document.querySelector("#smallLetter" + index).setAttribute("class", "letter_highlight");
    }
}
