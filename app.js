let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

condiconesIniciales();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document .querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function mensajesIniciales() {
     asignarTextoElemento("h1", "Juego del número secreto");
     asignarTextoElemento("p", `Adivina un número entre el 1 y ${numeroMaximo}.`);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Verificar si ya se han generado todos los números posibles.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "¡Ya has adivinado todos los números!");
    // Verificar que el número no se haya generado antes.
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            // Agregar el número a la lista de números sorteados.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function intentoUsuario() {

    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(`El usuario eligió el número ${numeroDeUsuario}.`);

    if (numeroDeUsuario == numeroSecreto) {
        // El usuario acertó el número.
        asignarTextoElemento("p", `¡Felicidades!, acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}.`);
        console.log(`El usuario acertó el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}.`);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó el número.
        intentos++;
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
    }
    return;
}

function reiniciarJuego() {
    // Mensaje de reinicio.
        console.log("El jugador ha reiniciado el juego.");
    // Limpiar la caja.
        limpiarCaja();
    // Reiniciar mensaje del inicio.
    // Generar un nuevo número secreto.
    // Reiniciar contador de intentos.
        condiconesIniciales();
    // Deshabilitar el botón de reiniciar.
        document.getElementById("reiniciar").setAttribute("disabled", true);
}

function condiconesIniciales() {
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
        console.log(`Número secreto: ${numeroSecreto}.`);
    intentos = 1;
}

function limpiarCaja () {
    document.querySelector("#valorUsuario").value = "";
    // También se puede usar:
    // document.getElementById("valorUsuario").value = "";
}

