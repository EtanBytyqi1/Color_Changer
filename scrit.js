function changeColor(color) {
 document.body.style.backgroundColor = color;   
}

function randomColor() {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}