var color = document.getElementById("seleccion_color");
var numero = document.getElementById("numer");
var botong = document.getElementById("boton");
var hoja = document.getElementById("area_dibujo");
var papel = hoja.getContext("2d");
var estado;
var x;
var y;
var imagen;

hoja.addEventListener("mousedown", presionaMouse);
hoja.addEventListener("mousemove", moverMouse);
hoja.addEventListener("mouseup", soltarMouse);
botong.addEventListener("click",guardaImagen);

dlinea("black", 2, 1, 55, 799, 55);
dlinea("black", 2, 1, 55, 1, 599);
dlinea("black", 2, 1, 599, 799, 599);
dlinea("black", 2, 799, 55, 799, 599);


function dlinea(color, numero, xi, yi, xf, yf)
{
papel.beginPath();
papel.strokeStyle = color;
papel.lineWidth = numero;
papel.moveTo(xi, yi);
papel.lineTo(xf, yf);
papel.stroke();
papel.closePath();
}

function presionaMouse(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function moverMouse(evento)
{
  if(estado == 1) {
  dlinea(color.value, numero.value, x, y, evento.layerX, evento.layerY);
  x = evento.layerX;
  y = evento.layerY;
  }
  else
  {
    x = evento.layerx;
    y = evento.layerY;

  }
}

function soltarMouse(evento)
{
estado = 0;

}

function guardaImagen()
{

alert("Te engañe te toca tomar captura de pantalla :c");
}
