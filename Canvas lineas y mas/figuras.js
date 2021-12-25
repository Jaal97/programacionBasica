var a = document.getElementById("figuras");
var lienzo = a.getContext("2d");
var lineas = 30
var l = 0
var yi, xf;

for(l=0; l < lineas; l++)
{
  yi = 10 * l
  xf = 10 * (l + 1)
  dibujafigura("red", 0, yi, xf, 300);
  console.log("lineas" + l);
}

dibujafigura("black", 1, 1, 1, 300);
dibujafigura("black", 1, 299, 299, 299);

function dibujafigura(color, xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color,
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}
