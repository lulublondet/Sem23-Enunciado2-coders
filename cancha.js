window.addEventListener("load",laCancha);

function laCancha() {

/*Reglas de reset para el viewport */
	document.body.style.padding = "0";
	document.body.style.margin ="0";


/*Creacion del titulo */
var titulo = document.createElement("h1");
	titulo.style.paddingLeft = "250px";
var contenido = document.createTextNode("Ejercicio3 - La Cancha");
titulo.appendChild(contenido);
document.body.appendChild(titulo);

/*Creación de la cancha y el contenedor */
var contenedor = document.createElement("div");
var span = document.createElement("span");
var contenidoSpan = document.createTextNode("Laboratoria 2017 - By Lourdes Vílchez");
	
	contenedor.style.width ="750px";
	contenedor.style.height ="450px";
	contenedor.style.backgroundColor ="green";
	contenedor.style.position="relative";
	contenedor.style.left="40px";
	contenedor.style.margin="10px";
	
	span.appendChild(contenidoSpan);
	span.style.position="absolute";
	span.style.bottom ="0px";
	span.style.right="10px";
	
	contenedor.appendChild(span);
	document.body.appendChild(contenedor);	

var cancha = document.createElement("div");
	cancha.style.width ="90%";
	cancha.style.height ="90%";
	cancha.style.backgroundColor ="green";
	cancha.style.border ="1px solid white";
	cancha.style.position="absolute";
	cancha.style.left="30px";
	cancha.style.top="15px";
	cancha.style.padding="5px";
contenedor.appendChild(cancha);

//Creación del arco Izquierdo - Derecho y Centro

var arcoIzquierdo = document.createElement("div");
	arcoIzquierdo.style.width ="100px";
	arcoIzquierdo.style.height ="160px";
	arcoIzquierdo.style.border ="1px solid white";
	arcoIzquierdo.style.position="absolute";
	arcoIzquierdo.style.borderLeft="none";
	arcoIzquierdo.style.top ="45%";
	arcoIzquierdo.style.left="0";
	arcoIzquierdo.style.transform ="translateY(-60px)";
	arcoIzquierdo.setAttribute("class", "left");
	cancha.appendChild(arcoIzquierdo);

	
var arcoDerecho = document.createElement("div");
	arcoDerecho.style.width="100px";
	arcoDerecho.style.height="160px";
	arcoDerecho.style.border ="1px solid white";
	arcoDerecho.style.borderRight ="none";
	arcoDerecho.style.position="absolute";
	arcoDerecho.style.top="45%";
	arcoDerecho.style.right="0";
	arcoDerecho.style.transform = "translateY(-60px)";
	arcoDerecho.setAttribute("class", "right");
	cancha.appendChild(arcoDerecho);

var arcoCentral = document.createElement("div");
	arcoCentral.style.width="100px";
	arcoCentral.style.height="100px";
	arcoCentral.style.borderStyle="solid";
	arcoCentral.style.borderColor="white";
	arcoCentral.style.borderWidth="1px";
	arcoCentral.style.borderRadius="72px";
	arcoCentral.style.MozBorderRadius ="72px";
	arcoCentral.style.WebkitBorderRadius ="72px";
	arcoCentral.style.position="absolute";
	arcoCentral.style.top="50%";
	arcoCentral.style.left="44%";
	arcoCentral.style.transform ="translateY(-50%)";
	arcoCentral.setAttribute("class","center");
	cancha.appendChild(arcoCentral);

}


