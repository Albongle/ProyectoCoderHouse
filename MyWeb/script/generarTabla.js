import { anuncios } from "../db/db.js";
window.addEventListener("DOMContentLoaded", () => {
  handlerLoadTable();
  document.addEventListener("click", handlerClick);
  mostrarAnuncio(1);
});

function handlerClick(e) {
  if (e.target.matches("td")) {
    let id = e.target.parentNode.dataset.id;
    console.log(id);
    mostrarAnuncio(id);
  }
}

function mostrarAnuncio(id){
  let anuncio =  anuncios.find(element=> element.id === parseInt(id));
  console.log(anuncio);
  let foto =  document.getElementsByClassName("articulo__foto-venta");
  let marca =  document.getElementsByClassName("articulo__marca");
  let precio =  document.getElementsByClassName("articulo__precio");
  let puertas =  document.getElementsByClassName("puertas");
  let potencia =  document.getElementsByClassName("potencia");
  let combustible =  document.getElementsByClassName("combustible");
  foto[0].src = anuncio.Foto;
  marca[0].textContent= anuncio.Marca;
  precio[0].textContent= anuncio.Precio;
  puertas[0].textContent =  anuncio.Puertas;
  potencia[0].textContent =  anuncio.Potencia;
  combustible[0].textContent =  anuncio.Combustible;

}

function handlerLoadTable(e) {
  renderizarTable(createTable(anuncios), document.getElementById("anuncios"));
}

function renderizarTable(tabla, contenedor) {
  while (contenedor.hasChildNodes()) {
    contenedor.removeChild(contenedor.firstChild);
  }
  if (tabla) {
    contenedor.appendChild(tabla);
  }
}

function createTable(items) {
  const tabla = document.createElement("table");
  tabla.appendChild(createThead(items[0]));
  tabla.appendChild(createTbody(items));
  return tabla;
}

function createThead(items) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (const key in items) {
    if (key != "id") {
      const th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
    }
  }
  thead.appendChild(tr);
  return thead;
}

function createTbody(items) {
  const tbody = document.createElement("tbody");
  items.forEach((element) => {
    const tr = document.createElement("tr");
    for (const key in element) {
      if (key === "id") {
        tr.setAttribute("data-id", element[key]);
      } else if (key === "Foto") {
        const td = document.createElement("td");
        const img = document.createElement("img");
        img.setAttribute("src", element[key]);
        img.setAttribute("alt", "imagen anuncio");
        td.appendChild(img);
        tr.appendChild(td);
      } else {
        const td = document.createElement("td");
        td.textContent = element[key];
        tr.appendChild(td);
      }
    }


    tbody.appendChild(tr);
  });
  return tbody;
}
