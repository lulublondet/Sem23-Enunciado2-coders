window.addEventListener("load",coders);


function coders(){

/*Reglas de reset para el viewport */
	document.body.style.margin ="0";
	document.body.style.padding ="0";

/*Seccion cabecera */
	var titulo = document.createElement("h1");
	var contenido = document.createTextNode("Ejercicio2 - Las coders");
	titulo.appendChild(contenido);
	document.body.appendChild(titulo);

/*Seccion Galeria */			
	var contenedorGaleria = document.createElement("div");
		contenedorGaleria.setAttribute("class","contenedorGaleria");
	var h2 = document.createElement("h2");
	var subsitulo = document.createTextNode("Nuestras coders")
		h2.appendChild(subsitulo);
		contenedorGaleria.appendChild(h2);

/*Arreglo para la entidad coders */

	var arr = [{name:"Daguiana Revoredo", url: "img/daguiana-revoredo.jpg"},
		   	   {name:"Elizabeth Condori", url: "img/elizabeth-condori.jpg"},
		       {name:"Grecia Rayme", url: "img/grecia-rayme.jpg"},
		       {name:"Janine Vega", url: "img/janine-vega.jpg"},
		       {name:"Michelle More", url: "img/michelle-more.jpg"},
		       {name:"Arantza Burga", url:"img/arantza-burga.jpg"}
		       ]; 

	arr.forEach(function(e){
		var contenedor = document.createElement("div");
		var imagen = document.createElement("img");
			imagen.src =  e.url;
		var span = document.createElement("span");              	
		var nombre = document.createTextNode(e.name);
			span.appendChild(nombre);
			contenedor.appendChild(imagen);
			contenedor.appendChild(span);
			contenedorGaleria.appendChild(contenedor);
			document.body.appendChild(contenedorGaleria);
	})		


/*Enlace para dirigirme al ejercicio Enunciado 3 - la Cancha */

var enlaceCancha = document.createElement("a");
enlaceCancha.href="cancha.html";
var contenido = document.createTextNode("Click hacia la cancha");
enlaceCancha.appendChild(contenido);
document.body.appendChild(enlaceCancha);

}


