let botonEncriptar = document.querySelector(".boton-encriptar")
let botonDesincriptar = document.querySelector(".boton-desincriptar")
let munieco = document.querySelector(".contenedor-imagen")
let contenedor = document.querySelector(".parrafo-aviso")
let resultado = document.querySelector(".texto-resultado")

botonEncriptar.onclick = encriptar;
botonDesincriptar.onclick = desincriptar;


function encriptar() {
    oculatarAdelante();
    var cajetexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desincriptar() {
    oculatarAdelante();
    var cajetexto = recuperarTexto()
    resultado.textContent = desincriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajtexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.lenght; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "ie"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "io"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "uco"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "sucu"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desincriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.lenght; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] = "e") {
            textoFinal = textoFinal + "e"
            i = i + 1;
        }
        else if (texto[i] = "i") {
            textoFinal = textoFinal + "i"
            i = i + 1;
        }
        else if (texto[i] = "o") {
            textoFinal = textoFinal + "o"
            i = i + 1;
        }
        else if (texto[i] = "u") {
            textoFinal = textoFinal + "u"
            i = i + 1;
        }
        return textoFinal;
    }

    const btncopiar = document.querySelector(".boton-copiar");
    btncopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    } 
}
