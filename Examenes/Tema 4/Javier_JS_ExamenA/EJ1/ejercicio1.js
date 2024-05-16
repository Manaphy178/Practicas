// Acceso
const botonAc = document.querySelector("#accessBtn");
const inpUsu = document.querySelector("#usuario");
const err = document.querySelector("#error");
botonAc.addEventListener("click", CompruebaUser);
function CompruebaUser() {
  if (
    inpUsu.value == "admin" ||
    inpUsu.value == "facturación" ||
    inpUsu.value == "marketing"
  ) {
    err.textContent = "Bienvenido " + inpUsu.value;
    err.style.color = "black";
  } else if (inpUsu.value == "facturacion") {
    err.style.color = "red";
    err.textContent = "Facturación lleva tilde";
  } else {
    err.style.color = "red";
    err.textContent = "Usuario no válido";
  }
}

// Select
const sel = document.querySelector("#anno");
sel.addEventListener("change", () => {
  if (sel.value != "default") {
    alert(sel.value);
  }
});

// Botones
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", cambiar);
btn2.addEventListener("click", cambiar);

function cambiar() {
  if (btn1.disabled) {
    btn2.disabled = true;
    btn1.disabled = false;
  } else if (btn2.disabled) {
    btn1.disabled = true;
    btn2.disabled = false;
  }
}
