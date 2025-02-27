// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];

function agregarAmigo() {
    //obteniendo el nombre del amigo y agregandolo a la lista  --- .trim() para que solo capture el nombre sin espacios    
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre");
    } else {
        listaAmigosSorteados.push(nombreAmigo);    
        LimpiarCaja();
        actualizarLista();
    }    
    console.log(listaAmigosSorteados);
}


function LimpiarCaja () {
    document.querySelector('#amigo').value = '';
}


function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiando la lista antes de actualizarla 

    listaAmigosSorteados.forEach(amigo => {
        let li = document.createElement('li'); // Creando un nuevo elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo
        lista.appendChild(li); // Agregando el elemento <li> a la lista <ul>
    });
}


//VALIDACIONES

// tienes que validar que el campo no se encuentre vació y que lanza la alerta 

// validar que no se agregue valores vacios al array 

// actualizar la lista de amigos 

//sortear amigos