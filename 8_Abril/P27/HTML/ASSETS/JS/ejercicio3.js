var num = prompt("Dime un numero del 1 al 7");
var dia = parseInt(num);
switch (dia) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miercoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sabado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Has puesto mal el numero");
    break;
}
