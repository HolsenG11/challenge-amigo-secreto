// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];

function agregarAmigo() {
  //obteniendo el nombre del amigo --- .trim() para que solo capture el nombre sin espacios
  let nombreAmigo = document.getElementById("amigo").value.trim();

  //document.querySelector("#resultado").value = "";
  let mensajeResultado = document.getElementById("resultado");
  mensajeResultado.innerHTML = "";

  if (nombreAmigo === "") {
    alert("Por favor, ingrese un nombre");
  } else {
    if (listaAmigosSorteados.includes(nombreAmigo)) {
      alert(
        "Por favor, ingrese su segundo nombre o un apodo, ya que este nombre que desea ingresar, ya se encuentra en la lista"
      );
      LimpiarCaja();
    } else {
      listaAmigosSorteados.push(nombreAmigo);
      LimpiarCaja();
      actualizarLista();
    }
  }

  //validando que la lista se este agregando correctamente
  console.log(listaAmigosSorteados);
  return;
}

function LimpiarCaja() {
  document.querySelector("#amigo").value = "";
  return;
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiando la lista para evitar duplicados

  listaAmigosSorteados.forEach((amigo) => {
    let li = document.createElement("li"); // Agregando un nuevo elemento <li>
    li.textContent = amigo; // Asignamos el nombre del amigo
    lista.appendChild(li); // Agregando el elemento <li> a la lista <ul>
  });

  return;
}

function sortearAmigo() {
  if (listaAmigosSorteados.length === 0) {
    alert("No existe una lista de amigos para sortear.");
    return;
  } else if (listaAmigosSorteados.length == 1) {
    alert("Debe de ingresar más de un amigo para empezar a sortear.");
    return;
  } else {
    //obteniendo el indice del amigo que salió ganador
    let indiceGanador = Math.floor(Math.random() * listaAmigosSorteados.length);
    let ganador = listaAmigosSorteados[indiceGanador];

    //valida si lo puede mostrar de manera directa o necesitamos crear un <li>
    document.getElementById("resultado").textContent =
      "🎉 El amigo secreto es: " + ganador + " 🎉";

    //eliminando de la lista el amigo que ya ha sido sorteado y actualizando la lista
    listaAmigosSorteados.splice(indiceGanador, 1);
    actualizarLista();
    return;
  }
}

/* VALIDACIONES

// Validar si se debe Limpiar la lista para poder volver a sortear o se debe poder seguir agregando y sorteando

//reiniciar juego 

//Validar que no se pueda ingresar ningún número y ver si podemos corregir lo de caractéres especiales 

//Ver si podemos cambiar algunos mensajes a que se visualicen en el lu y no en el alert

*/
