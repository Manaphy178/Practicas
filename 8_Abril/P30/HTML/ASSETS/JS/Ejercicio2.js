// Longitud
const enlaces = document.querySelectorAll("a");
console.log(enlaces.length);
// A donde apuntan cada uno
const primerEnlace = enlaces[0];
console.log(primerEnlace.getAttribute("href"));

const penultimoEnlace = enlaces[enlaces.length - 2];
console.log(penultimoEnlace.getAttribute("href"));

const ultimoEnlace = enlaces[enlaces.length - 1];
console.log(ultimoEnlace.getAttribute("href"));
