var texto = document.getElementById("t_1");
var boton = document.getElementById("bt_1");
boton.addEventListener("click", lanza);

var a = document.getElementById("caja");
var hoja = a.getContext("2d");

var c = 0
var xi, yi, xf, yf;
var j = parseInt(texto.value);
var lineas = j
var ancho = a.width;
var espacio = ancho / lineas;

var texto2 = document.getElementById("t_2");
var boton2 = document.getElementById("bt_2");
boton2.addEventListener("click", lanzador);

var e = parseInt(texto2.value);
var lineas2 = e
var ancho2 = a.width;
var espacio2 = ancho2 / lineas2;

function dlinea(color, xi, yi, xf, yf)
{
hoja.beginPath();
hoja.strokeStyle = color;
hoja.moveTo(xi, yi);
hoja.lineTo(xf, yf);
hoja.stroke();
hoja.closePath();
}

function lanza()
{

  do
  {
    var lineas = parseInt(texto.value)

  xi = espacio * c
  yf = 490 - (espacio * c)
  dlinea("black", xi, 500, 500, yf );
  c = c + 1

  } while (c < lineas);


}

function lanzador()

{
  do
  {
    var lineas2 = parseInt(texto2.value)

  yi = espacio2 * (0 + c)
  xf = espacio2 * c
  dlinea("red", 0, yi, xf, 500 );
  c = c + 1

} while (c < lineas2);


}
