class Slug
{
constructor(n, v, a, t, d, i)
{
this.imagen = new Image();
this.nombre = n;
this.vida = v;
this.ataque = a;
this.tipo = t;
this.debilidad = d;
this.informacion = i;

this.imagen.src = imagenes[this.nombre];


}
hablar()
{

    alert(this.nombre);
}
mostrar()
{
    
    document.write("<br />");

    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />" + "<br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<br />");
    document.write("Tipo: " + this.tipo + "<br />");
    document.write("Debilidad: " + this.debilidad + "<br />" + "<br />");
    document.write("<strong>" + "Informacion" + "</strong>" + "<br />" + "<br />" + this.informacion + "<hr />");
    document.write("<p />");
}

}