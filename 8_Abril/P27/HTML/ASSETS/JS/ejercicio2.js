var num1 = prompt("Dime un numero");
var num2 = prompt("Dime un numero");
var num3 = prompt("Dime un numero");
var n1 = parseInt(num1);
var n2 = parseInt(num2);
var n3 = parseInt(num3);
if (n1 > n2 && n1 > n3) {
  console.log("El primer numero es el mayor");
} else if (n2 > n1 && n2 > n3) {
  console.log("El segundo numero es el mayor");
} else if (n3 > n1 && n3 > n2) {
  console.log("El tercer numero es el mayor");
}
