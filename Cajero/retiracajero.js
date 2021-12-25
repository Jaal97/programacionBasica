var monto = document.getElementById("monto");
var dinero = parseInt(monto.value);
var boton = document.getElementById("bot");
var botoncito = document.getElementById("botonci");
boton.addEventListener("click", entregardinero);
botoncito.addEventListener("click", ejecuta);

var sold = document.getElementById("saldo");
var resultado = document.getElementById("resultado");


var j = 0;
var p = 0;
var div = 0;
var papeles = 0;
var totaldinero = 500;

class billete
{
    constructor(n, v, c)
    {
        
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];

    }
}

imagenes = [];

imagenes["50"] = "50usd.jpg"
imagenes["20"] = "20usd.png"
imagenes["10"] = "10.png"

var caja = [];

caja.push(new billete("50", 50, 6));
caja.push(new billete("20", 20, 6));
caja.push(new billete("10", 10, 8));

var entregado = [];

for(var s of caja)
{
    j += parseInt(s.cantidad * s.valor);
    p += parseInt(s.cantidad * s.valor);
    sold.innerHTML = "<font size=5> Saldo de la cuenta: $" + j + "</font>";

}

var retirado = [];
var entregado = [];
var papeles = 0;

function entregardinero()
{

for(var b of caja)
{
if(dinero>0)
{
var div = Math.floor(dinero / b.valor);
if(div > b.cantidad)
{
papeles = b.cantidad;
}
else
{
    papeles = div;
} 
entregado.push(new billete( b.nombre, b.valor, papeles));
dinero = dinero - (b.valor * papeles);
var t = j - dinero;
}    
}
if(dinero>0)
{
    resultado.innerHTML = "No hay fondos"
}
else
{
    for( var e of entregado)
    {
        if(e.cantidad > 0)
        {
            
            resultado.innerHTML = resultado.innerHTML +  e.cantidad + " Billetes de $ " + e.valor + "<br />";
        }
        for (var i = 0; i<e.cantidad; i++)
        {
            resultado.appendChild(e.imagen);
            if(e.valor == e.valor)
            {
                resultado.innerHTML += " ";
            }
            else
            {
                resultado.innerHTML += "<br />";
            }
        }
        resultado.innerHTML += "<br /><br />"
    }
    sold.innerHTML = "<font size=5> Saldo del Cajero: $" + t + "</font>";
}

}




function ejecuta()
{

    window.location = "cierra.html";

}


