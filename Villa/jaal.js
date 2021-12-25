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
    if(gato.cargaOK)
    {
        
        
        for(var g = 0; g<2; g++) 
        {
        var x = aleatorio(0, 6);
        var y = aleatorio(0, 6);
        var x = x * 10
        var y = y * 10
        papel.drawImage(gato.img, x, y);
        }
    }
        if(cerdo.cargaOK)
        {
            for(var c =0; c<3; c++)
            {
                papel.drawImage(cerdo.img, 280, 8);
                papel.drawImage(cerdo.img, 360, 42);
                papel.drawImage(cerdo.img, 306, 60);
            }
        }
        if(pollo.cargaOK)
        {
            for(var p=0; p<pollos; p++)
            {
                var x = aleatorio(0,6)
                var y = aleatorio(0,6)
                var x = x * 20
                var y = y * 20
                papel.drawImage(pollo.img, x, y);


            }
        }
        if(vaca.cargaOK)
        {
            for(var v=0; v<4; v++)
            {
                papel.drawImage(vaca.img, 20, 420);
                papel.drawImage(vaca.img, 34, 360);
                papel.drawImage(vaca.img, 10, 280);
                papel.drawImage(vaca.img, 64, 312);
            }

        }
        if(lobo.cargaOK)
        {
            papel.drawImage(lobo.img, xl, yl);


        }
    
}



document.addEventListener("keydown", lanzateclas);


function lanzateclas(evento)
{
var movimiento = 10;

switch(evento.keyCode)
{
case teclas.UP:

xl, yl - movimiento;

yl = yl - movimiento

dibujar();
break;

case teclas.DOWN:
yl = yl + movimiento
if(yl > 500)
{
    yl = 0
}
dibujar();
break;

case teclas.RIGHT:
xl = xl + movimiento
if(xl > 500 )
{
    xl = 0
}
dibujar();
break;

case teclas.LEFT:
xl = xl - movimiento
if(xl < -5)
{
xl = 500
}
dibujar();
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