var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

dibujarlinea("red", 300, 300, 150, 200);
dibujarlinea("black", 200, 100, 90, 60);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal,)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
