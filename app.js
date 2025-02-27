// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];

function agregarAmigo() {
    //obteniendo el nombre del amigo --- .trim() para que solo capture el nombre sin espacios    
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre");
    } else {
        listaAmigosSorteados.push(nombreAmigo);    
        LimpiarCaja();
        actualizarLista();
    }    

    //validando que la lista se este agregando correctamente 
    console.log(listaAmigosSorteados);

    return;
}

function LimpiarCaja () {
    document.querySelector('#amigo').value = '';
    return;
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiando la lista antes de actualizarla 

    listaAmigosSorteados.forEach(amigo => {
        let li = document.createElement('li'); // Agregando un nuevo elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo
        lista.appendChild(li); // Agregando el elemento <li> a la lista <ul>
    });

    return;
}

    //FALTA CORREGIRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

function sortearAmigo() {
    if (listaAmigosSorteados.length === 0) {
        alert("No existe una lista de amigos para sortear.");
        return;
    }

    //obteniendo el indice del amigo que salió ganador
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = listaAmigosSorteados[indiceGanador];

    //valida si lo puede mostrar de manera directa o necesitamos crear un <li>
    document.getElementById('resultado').textContent = "🎉 El ganador es: " + ganador + " 🎉";

    return;
}

//VALIDACIONES

// tienes que validar que el campo no se encuentre vació y que lanza la alerta 

// validar que no se agregue valores vacios al array 

// actualizar la lista de amigos 

//sortear amigos



// Validar que no se pueda ingresar dos nombres igulaes, ya que puede que exista una confusión. Mejor enviar una alerta para volver a ingresar otro nombre
// o al inició inabilitar el botón de sortear para que se habilite cuando ya hay un registro
