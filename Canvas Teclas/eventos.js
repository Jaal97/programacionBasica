var teclas =
{
UP: 38,
DOWN: 40,
RIGHT: 39,
LEFT: 37

};

document.addEventListener("keydown", dlanza);

var c = document.getElementById("dibujar");
var papel = c.getContext("2d");
var xi, yi, xf, yf;
var color;
var x = 150;
var y = 150;

dlinea("red", x - 1, y - 1, x + 1, y + 1);

function dlinea(color, xi, yi, xf, yf,)
{
papel.beginPath();
papel.strokeStyle = color;
papel.lineWidth = 3;
papel.moveTo(xi, yi);
papel.lineTo(xf, yf);
papel.stroke();
papel.closePath();


}

function dlanza(evento)
{
var colorido = "yellow";
var movimiento = 10;

switch(evento.keyCode)
{
case teclas.UP:
dlinea(colorido, x, y, x, y - movimiento);
y = y - movimiento;
break;

case teclas.DOWN:
dlinea(colorido, x, y, x, y + movimiento);
y = y + movimiento;
break;

case teclas.RIGHT:
dlinea(colorido, x, y, x + movimiento, y);
x = x + movimiento;
break;

case teclas.LEFT:
dlinea(colorido, x, y, x - movimiento, y);
x = x - movimiento;
break;

default:
console.log("Otra que no es");
break;

}

}
