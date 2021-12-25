var a = document.getElementById("gato");
var papel = a.getContext("2d");

dibujagato("black", 30, 10, 50, 10);
dibujagato("black", 50, 10, 50, 20);
dibujagato("black", 50, 20, 30, 40);
dibujagato("black", 30, 40, 20, 40);
dibujagato("black", 30, 10, 0, 40);
dibujagato("black", 20, 40, 20, 70);
dibujagato("black", 0, 40, 0, 80);
dibujagato("black", 0, 80, 10, 140);
dibujagato("black", 10, 140, 50, 140);
dibujagato("black", 60, 140, 60, 100);
dibujagato("black", 60, 100, 40, 100);
dibujagato("black", 40, 100, 30, 110);
dibujagato("black", 30, 110, 30, 120);
dibujagato("black", 30, 120, 50, 120);
dibujagato("black", 50, 120, 50, 140);
dibujagato("black", 20, 40, 30, 40);
dibujagato("black", 40, 50, 20, 70);
dibujagato("black", 40, 50, 60, 50);
dibujagato("black", 60, 50, 80, 70);
dibujagato("black", 80, 70, 80, 30);
dibujagato("black", 80, 30, 100, 50);
dibujagato("black", 100, 50, 140, 50);
dibujagato("black", 140, 50, 160, 30);
dibujagato("black", 160, 30, 160, 90);
dibujagato("black", 160, 90, 150, 100);
dibujagato("black", 150, 100, 130, 110);
dibujagato("black", 130, 110, 110, 110);
dibujagato("black", 110, 110, 90, 100);
dibujagato("black", 90, 100, 80, 90);
dibujagato("black", 80, 90, 80, 120);
dibujagato("black", 80, 120, 90, 120);
dibujagato("black", 90, 120, 90, 140);
dibujagato("black", 90, 140, 60, 140);
dibujagato("black", 90, 60, 90, 80);
dibujagato("black", 90, 80, 110, 80);
dibujagato("black", 110, 80, 110, 60);
dibujagato("black", 110, 60, 90, 60);
dibujagato("black", 130, 60, 150, 60);
dibujagato("black", 150, 60, 150, 80);
dibujagato("black", 130, 80, 130, 60);
dibujagato("black", 130, 80, 150, 80);
dibujagato("black", 120, 80, 110, 90);
dibujagato("black", 110, 90, 130, 90);
dibujagato("black", 120, 80, 130, 90);

function dibujagato(color, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

alert("He terminado mi gato")
var eleccion = parseInt(prompt("Te gusta mi gato 1 para Si, o No 2 ? "));
var respuesta = ("bien")


if (eleccion == 1)
{
  respuesta = ("bien gracias te quiero :3");
}

else if(eleccion == 2)
{
  respuesta = ("mal ahora te jodes jajaja");
}

document.write(" Que " + respuesta);
