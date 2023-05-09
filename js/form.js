var formulario = document.querySelector(".formulario");

formulario.onsubmit = function (e) {
  e.preventDefault();

  var nombre = document.querySelector("#name").value;
  var edad = document.querySelector("#age").value;
  var nacionalidad = document.querySelector("#nationality").value;

  if (nombre.length === 0) {
    document.querySelector("#name").classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    document.querySelector("#age").classList.add("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  var lista = document.querySelector(".lista-de-invitados");

  var fila = document.createElement("tr");
  lista.appendChild(fila);

  var tdNombre = document.createElement("td");
  tdNombre.textContent = nombre;
  fila.appendChild(tdNombre);

  var tdEdad = document.createElement("td");
  tdEdad.textContent = edad;
  fila.appendChild(tdEdad);

  var tdNacionalidad = document.createElement("td");
  tdNacionalidad.textContent = getNacionalidad(nacionalidad);
  fila.appendChild(tdNacionalidad);

  var tdBoton = document.createElement("td");
  fila.appendChild(tdBoton);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  tdBoton.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    fila.remove();
  };
}

function getNacionalidad(codigo) {
  switch (codigo) {
    case "ar":
      return "Argentina";
    case "mx":
      return "Mexicana";
    case "per":
      return "Peruana";
    case "vnzl":
      return "Venezolana";
    default:
      return "Desconocida";
  }
}