
var texto1 = document.getElementById("usuario");
var pass = document.getElementById("contraseña");
var boton1 = document.getElementById("botoni");

var u1 = "and";
var u2 = "haw";
var u3 = "sha";

var c1 = 2312;
var c2 = 9012;
var c3 = 9728;




boton1.addEventListener("click", lanza);

var usuario = texto1.value;
var contraseña = parseInt(pass.value);

function lanza()
{
    var usuario = texto1.value;
    var contraseña = parseInt(pass.value);
if(usuario == u1 && contraseña == c1)
    {
        alert("Acceso Garantizado  And");
        window.location= "retiro.html";
    }
else if(usuario == u2 && contraseña == c2)
{
alert("Acceso permitido haw");
window.location= "retiro.html";

}
else if(usuario == u3 && contraseña == c3)
{

    alert("Acceso Garantizado señor Sha");
    window.location= "retiro.html";
}
else
{
    alert("Usuario y contraseña incorrectas");
}
}

