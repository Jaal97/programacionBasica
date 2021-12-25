
var imagenes = [];

imagenes["Infernus"] = "infernus.webp";
imagenes["Electroshock"] = "Electroshock.webp";
imagenes["Flatulorhinka"] = "Flatulorhinka.webp";
imagenes["Torrente"] = "Torrente.webp";

var coleccion = [];

coleccion.push(new Slug("Infernus", 102, 35, "Fuego", "Agua", "Las babosas Infierno son un tipo muy raro de babosas que son del elemento fuego. Las más famosa Infierno es Burpy de Eli. Su versión malvada es Darkfurnus. "));
coleccion.push(new Slug("Electroshock", 98, 38, "Electrico", "Descargarse", "Al transformarse, crecen sus antenas, se alargan hasta la espalda y su cola se cargan de electricidad, le crecen brazos azules eléctricos y garras amarillas. "));
coleccion.push(new Slug("Flatulorhinka", 110, 30, "Aire", "Ninguna", "Las babosas Flatulorinka o apestosas son babosas tipo tóxico que causan un olor asqueroso, y la mas famosa de ellas es Stinky la babosa apestosa de Pronto."));
coleccion.push(new Slug("Torrente", 105, 34, "Agua", "Electricidad", "Son Babosas azules, turquesa, y blancas con elemento de agua. Sus hábitats preferidos son cavernas de mar y arrecifes de coral como la caverna de Corriente Submarina."));



for (var slugs of coleccion)
{
    slugs.mostrar();
}
