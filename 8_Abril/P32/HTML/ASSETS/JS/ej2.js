let body = document.querySelector("body");
let p = document.createElement("p");
let selecto = document.querySelector("select");
body.append(p);
selecto.addEventListener("change", (event) => {
  p.textContent = "El lenguaje elegido es: " + selecto.value;
});
