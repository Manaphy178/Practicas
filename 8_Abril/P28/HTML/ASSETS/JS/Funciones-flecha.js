// Ejercicio 1
cuadrado = (num) => num ^ 2;
console.log("Cuadrado de numero ", cuadrado(5));

// Ejercicio 2
areaR = (altura, ancho) => ancho * altura;
console.log("Area del rectangulo", areaR(4, 6));

// Ejercicio 3
MS = (KMH) => KMH * (5 / 18);
console.log("Metros segundo: ", MS(9));

// Ejercicio 4
const pokemones = [
  "Charmander",
  "Squirtle",
  "Bulbasur",
  "Manaphy",
  "Phione",
  "Chimchar",
];
pokedex = (pokemon) => console.log("Pokemon: ", pokemon);
pokedex(pokemones);
