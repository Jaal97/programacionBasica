var color = document.getElementById("seleccion_color");
var hoja = document.getElementById("area_dibujo");
var papel = hoja.getContext("2d");
var clicks = false;
var x;
var y;

dlinea("black", 0, 0, 500, 0);
dlinea("black", 0, 0, 0, 500);
dlinea("black", 0, 499, 499, 499);
dlinea("black", 500, 0, 500, 500);

function dlinea(color, xi, yi, xf, yf)
{
papel.beginPath();
papel.strokeStyle = color;
papel.lineWidth = 3;
papel.moveTo(xi, yi);
papel.lineTo(xf, yf);
papel.stroke();
papel.closePath();
}
hoja.addEventListener("mousedown", presionaM);
hoja.addEventListener("mousemove", dMouse);
hoja.addEventListener("mouseup", sueltaM);

function presionaM(evento)
{
x = evento.layerX;
y = evento.layerY;
clicks = true;
}

function dMouse(evento)
{
  if (clicks == true)
  {
    dlinea(color.value, x, y, evento.layerX, evento.layerY)
    x = evento.layerX;
    y = evento.layerY;

  }
}

function sueltaM(evento)
{
  clicks = false;
}
