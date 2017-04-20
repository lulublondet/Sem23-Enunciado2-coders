window.addEventListener("load",coders);

function coders() {


var enlaceCancha = document.createElement("a");
enlaceCancha.href="cancha.html";
var contenido = document.createTextNode("Click hacia la cancha");
enlaceCancha.appendChild(contenido);
document.body.appendChild(enlaceCancha);

}


