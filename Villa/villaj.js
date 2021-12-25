var vj = document.getElementById("villajaal");
var papel = vj.getContext("2d");

var teclas =
{
UP: 38,
DOWN: 40,
RIGHT: 39,
LEFT: 37

};

var xl = 420;
var yl = 420;


var fondo =
{
url:"villa.png",
cargaOK: false
};

fondo.img = new Image();
fondo.img.src = fondo.url;
fondo.img.addEventListener("load", cfondo);

var vaca =
{
url: "vaca.png",
cargaOK: false
};

vaca.img = new Image();
vaca.img.src = vaca.url;
vaca.img.addEventListener("load", cvaca);
var cantidad = aleatorio(8,4);

var cerdo = 
{
url: "cerdo.png",
cargaOK: false
};

cerdo.img = new Image();
cerdo.img.src = cerdo.url;
cerdo.img.addEventListener("load", ccerdo);
var cerdos = aleatorio(5,3);

var pollo = 
{
url: "pollo.png",
cargaOK: false
};

pollo.img = new Image();
pollo.img.src = pollo.url;
pollo.img.addEventListener("load", cpollo);
var pollos = aleatorio(6,4);

var gato =
{
url: "gato.png",
cargaOK: false
};

gato.img = new Image();
gato.img.src = gato.url;
gato.img.addEventListener("load", cgato);
var gatos = aleatorio(2,2);

var lobo =
{
url: "lobo.png",
cargaOK: false
};

lobo.img = new Image();
lobo.img.src = lobo.url;
lobo.img.addEventListener("load", clobo);

function cfondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cvaca()
{
    vaca.cargaOK = true;
    dibujar();
}

function ccerdo()
{
cerdo.cargaOK = true;
dibujar();

}

function cpollo()
{
pollo.cargaOK = true;
dibujar();
}

function cgato()
{
gato.cargaOK = true;
dibujar();

}

function clobo()
{
lobo.cargaOK = true;
dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.img, 0, 0);

    }
    if(vaca.cargaOK)
    {
        
        console.log(cantidad);
        for(var v = 0; v<cantidad; v++) 
        {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 70
        var y = y * 70
        papel.drawImage(vaca.img, x, y);
        }
        if(cerdo.cargaOK)
        {
            for(var c =0; c<cerdos; c++)
            {
                var x = aleatorio(0,7);
                var y = aleatorio(0,7);
                var x = x * 70
                var y = y * 70
                papel.drawImage(cerdo.img, x, y);
            }
        }
        if(pollo.cargaOK)
        {
            for(var p=0; p<pollos; p++)
            {
                var x = aleatorio(0,6)
                var y = aleatorio(0,6)
                var x = x * 80
                var y = y * 80
                papel.drawImage(pollo.img, x, y);


            }
        }
        if(gato.cargaOK)
        {
            for(var g=0; g<gatos; g++)
            {
                var x = aleatorio(0,6)
                var y = aleatorio(0,6)
                var x = x * 70
                var y = y * 70
                papel.drawImage(gato.img, x, y);
            }

        }
        if(lobo.cargaOK)
        {
            papel.drawImage(lobo.img, xl, yl);


        }
    }
}



document.addEventListener("keydown", lanzateclas);


function lanzateclas(evento)
{
var movimiento = 5;

switch(evento.keyCode)
{
case teclas.UP:
yl = yl - movimiento
if(yl <-5)
{
    yl = 500
}
dibujar();
break;

case teclas.DOWN:
alert("abajo")

break;

case teclas.RIGHT:


break;

case teclas.LEFT:


break;

default:
console.log("Otra que no es");
break;
}

}




function aleatorio(maxi, min)
{
var resultado;
resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
return resultado
}