const colores = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];
const random = colores[Math.floor(Math.random() * colores.length)];
const app = document.querySelector(".app");
const cuadrado = document.createElement("div");
cuadrado.className = random;
cuadrado.textContent = "Soy un cuadrado";
app.append(cuadrado);
