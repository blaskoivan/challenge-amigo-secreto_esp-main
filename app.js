// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (
        typeof nombreAmigo !== "string" ||
        nombreAmigo.trim() === "" ||
        /^\d+$/.test(nombreAmigo.trim())
    ) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);
    
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let amigos = listaAmigos.getElementsByTagName("li");
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio].textContent;
    
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo seleccionado es: " + amigoSeleccionado;
    listaAmigos.innerHTML = "";
}