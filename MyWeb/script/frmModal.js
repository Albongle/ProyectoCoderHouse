let frmContacto;
let btnContacto;
let btnCancelar;
window.addEventListener("DOMContentLoaded", () => {
  btnContacto = document.getElementById("btnContacto");
  frmContacto = document.getElementById("dialogo");
  btnCancelar = document.getElementById("btnCancelar");
  btnContacto.addEventListener("click", loadFormulario);
  btnCancelar.addEventListener("click", closeFormulario);
});

const loadFormulario = () => {
  frmContacto.setAttribute("open", "");
};
const closeFormulario = () => {
  frmContacto.removeAttribute("open");
};

