
//Inicio de codificación
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeusuario === numeroSecreto); // valor booleano True o False
    console.log(intentos);
    if (numeroDeusuario === numeroSecreto) {
        asignarTextoElemento('p',  `¡Enhorabuena! Has acertado el numeros secreto en ${intentos} ${intentos  == 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if(numeroSecreto > numeroDeusuario) {
                asignarTextoElemento('p','El número secreto es mayor'); 
            } else{
                if(numeroSecreto  < numeroDeusuario){
                     asignarTextoElemento('p',"El número secreto es menor") ;
                    }
             }
            intentos++;
            limpiarCampo();
    }
    return;
    
}

function limpiarCampo() {
  document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    // let numeroSecreto = Math.Floor(Math.random()*10)+1; opcion de declarar variable global
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

    
}
function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto' );
    asignarTextoElemento('p', 'Indica un número entre 1 y 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}


function reiniciarJuego() {
    // limpiar Caja
    limpiarCampo();
    // Indicar mensae de intervalo de juego
    condicionesInciales();
    // Generar un numero aletorio
    //Deshabilitar boton de nuevo juego
    // Reiniciar contador de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesInciales();