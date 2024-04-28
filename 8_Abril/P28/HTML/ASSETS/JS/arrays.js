// Ejercicio 1
let colores = ["Rojo", "Verde", "Naranja", "Azul", "Amarillo"];
console.log(colores[0], colores[4]);

// Ejercicio 2
let veces = parseInt(prompt("Cuantas ciudades quieres añadir"));
let ciudades = new Array();
for (i = 0; i < veces; i++) {
  ciudades.push(prompt("Añade la ciudad"));
}
ciudades.forEach((ciu) => {
  alert(ciu);
});

// Ejercicio 3
const likes = [];
let pregunta;
while ((pregunta = prompt("¿Quién ha dado like?")) !== null) {
  likes.push(pregunta);
}

function like(nombres) {
  switch (nombres.length) {
    case 0:
      console.log("Nadie ha dado like");
      break;
    case 1:
      console.log(nombres[0] + " ha dado like");
      break;
    case 2:
      console.log(nombres.join(" y ") + " han dado like");
      break;
    case 3:
      console.log(
        nombres.slice(0, 2).join(", ") + " y " + nombres[2] + " han dado like"
      );
      break;
    default:
      console.log(
        nombres.slice(0, 3).join(", ") +
          " y " +
          (nombres.length - 3) +
          " personas más han dado like"
      );
      break;
  }
}
like(likes);

// Ejercicio 4
const users = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobby: "fútbol",
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobby: "leer",
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobby: "programar",
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobby: "programar",
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobby: "poker",
  },
];
const madriles = users.filter((us) => us.city == "Madrid");
console.log(madriles);
const mayores = users.filter((us) => us.age > 25);
console.log(mayores);
const programador = users.find((us) => us.hobby == "programar");
console.log(programador);
