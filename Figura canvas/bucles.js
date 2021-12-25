var c = document.getElementById("bucles");
var lienzo = c.getContext("2d");

var texto1 = document.getElementById("texto_1");
var boton1 = document.getElementById("boton_1");
boton1.addEventListener("click", lanzamiento);

var j = parseInt(texto1.value);
var lineas = j
var ancho = c.width
var espacio = ancho / lineas;
var l = 0
var xi, yi, xf, yf;
var colorsin;

function dibujalinea(color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function lanzamiento()
{


  var l = 0

  do
  {
  xi = 400 - (espacio * l)
  yf = espacio * l
  dibujalinea("black", xi, 0, 0, yf);
  console.log("lineas " + l);
  l = l + 1
  } while (l < lineas);

  var l = 0

  for(l=0; l < lineas; l++)
  {
  yi = espacio * (0 + l)
  xf = espacio * l
  dibujalinea("red", 0, yi, xf, 400);

  }

  var l = 0

  do
  {
  yi = 400 - (espacio * l)
  xf = 390 - (espacio * l)
  dibujalinea("green", 400, yi, xf, 0);
  l = l + 1
  } while (l < lineas);

  var l = 0


  while(l < 3 )
  {
  dibujalinea("#e3b510", 0, 0, 400, 0);
  dibujalinea("#e3b510", 0, 0, 0, 400);
  dibujalinea("#e3b510", 0, 400, 400, 400);
  dibujalinea("#e3b510", 400, 0, 400, 400);

  l = l + 1

  do
  {
  xi = espacio * l
  yf = 390 - (espacio * l)
  dibujalinea("blue", xi, 400, 400, yf);
  console.log("lineas " + l);
  l = l + 1

} while (l < lineas);

  }
}
