// Variables globales
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (!nombre) {
    alert("Por favor, introduce un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    return;
  }

  amigos.push(nombre);
  actualizarListaAmigos();
  inputAmigo.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpiar la lista

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para realizar el sorteo
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes tener al menos 2 amigos para realizar el sorteo.");
    return;
  }

  resultado.innerHTML = ""; // Limpiar resultados
  const mezclados = [...amigos].sort(() => Math.random() - 0.5); // Mezclar la lista

  mezclados.forEach((amigo, index) => {
    const asignado = mezclados[(index + 1) % mezclados.length];
    const li = document.createElement("li");
    li.textContent = `${amigo} → ${asignado}`;
    resultado.appendChild(li);
  });
}

// Función para reiniciar todo (opcional)
function reiniciar() {
  amigos = [];
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";
  inputAmigo.value = "";
}
