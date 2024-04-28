var pin = "2201";
for (i = 0; i < 3; i++) {
  var res = prompt("Dime el pin a ver si lo adivinas");
  if (res == pin) {
    alert("ES CORRECTO");
  } else {
    alert("Lo siento, esta mal");
  }
}
