var shadow = require("express");
var aplicacion = shadow();

aplicacion.get("/", inicio);
aplicacion.get("/bajoterra", bajoterra);

function inicio(peticion, resultado)

{
    resultado.send("Este es el <strong>home </strong> ");


}

function bajoterra(peticion, resultado)
{
    resultado.sendfile("Bajoterra.html");

}


aplicacion.listen(8989);