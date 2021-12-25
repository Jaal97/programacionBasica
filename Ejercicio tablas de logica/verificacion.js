var user = document.getElementById("user");
var pass = document.getElementById("pass");

var boton = document.getElementById("ingresa");

boton.addEventListener("click", accede);

var cliente = "juan";
var password = 2312;
var cuenta_verificada = 129037;

var consulta = document.getElementById("consulta");
var saldo = 1000000;
consulta.addEventListener("click", dasaldo);

var banco_cliente = "bancolombia";
var banco_destino = document.getElementById("banco");
var destino = banco_destino.value;
var selecBanco = document.getElementById("selecBanco");
selecBanco.addEventListener("click", sBanco);

var cuenta_destino = document.getElementById("cuenta");
var cuenta = parseInt(cuenta_destino.value);
var selecCuenta = document.getElementById("selecCuenta");
selecCuenta.addEventListener("click", sCuenta);

var usuario = user.value;
var contra = parseInt(pass.value);

var resu = document.getElementById("costo");
var ncuenta = document.getElementById("ncuenta");

var mtransferir = document.getElementById("monto");
var transferir = parseInt(mtransferir.value);
var iva = transferir * 0.05;

function dasaldo()
    {
        alert("Su saldo es de " + " $ " + saldo);
    }

function accede()
{
    var usuario = user.value;
    var contra = parseInt(pass.value);
if(usuario == cliente  && contra == password)
{
    alert("Acceso concedido");
     
} 
else
    {
        alert("Acceso denegado")
    }   
}

function sBanco()
{
if(banco_cliente == destino)
{
    iva = 0
resu.innerHTML= "Su transaccion no tiene costo";

}
else
{
    iva = transferir * 0.05;
    resu.innerHTML = " Su transaccion vale " + iva;
}
}

function sCuenta()
{
if(cuenta_verificada == cuenta)
{
    ncuenta.innerHTML = "Su cuenta de destino es correcta";

    if(transferir > saldo)
    {
        ncuenta.innerHTML += "</br>";
    ncuenta.innerHTML += "</br>"+ "No tienes esa cantidad de dinero por favor intenta enviar menos";
    }
    else if (transferir <= saldo)
    {
        saldo = saldo - transferir;
    ncuenta.innerHTML += "</br>"
    ncuenta.innerHTML += "</br>" + "Transaccion realizada correctamente por " + " $ " + transferir + " Su nuevo saldo es de " +  " $ " + saldo + " Costo transferencia " + " $ " + iva;
    }
}
else
{
ncuenta.innerHTML = "Su cuenta de destino no es correcta por favor verificala";

}
}


