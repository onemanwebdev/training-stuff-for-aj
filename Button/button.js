var object = {}

document.onclick = getText;

function getText(e) { //e - argument funkcji, to konkretne kliknięcie, które zrobiliśmy
    // console.log('e.target', e.target);
    // console.log('e.target.tagName', e.target.tagName);
    if (e.target.tagName == "INPUT") {
        e.target.onblur = check;
        function check() {
            object[e.target.id] = e.target.value;
        }
    }
    console.log(object);
}

function createButton() {
    //console.log(object.name);
    if (object.name && object.height && object.width) {
        var container = document.querySelector('.rightbox')
        container.innerHTML = `<button style="height:${object.height}px; width:${object.width}px;">${object.name}</button>`;
        var buttonStyle = container.children[0].style;
        buttonStyle.backgroundColor = object.backgroundColor;
        buttonStyle.color = object.color;
        buttonStyle.fontSize = `${object.fontSize}px`;
        container.children[0].id = object.id;
        container.children[0].classList.add(object.class);
    }
}
