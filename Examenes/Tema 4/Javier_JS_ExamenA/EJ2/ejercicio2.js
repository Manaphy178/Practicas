const form = document.querySelector("#formulario");

form.addEventListener("submit", validar);
function validar(event) {
  event.preventDefault();
  let goodM = false;
  let goodP = false;
  var email = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  let mail = document.querySelector("#email").value;
  let passw = document.querySelector("#pass").value;
  let errMail = document.querySelector("#errMail");
  let errPass = document.querySelector("#errPass");
  if (email.test(mail)) {
    errMail.style.display = "none";
    goodM = true;
  } else {
    goodM = false;
    errMail.style.display = "block";
  }
  if (pass.test(passw)) {
    errPass.style.display = "none";
    goodP = true;
  } else {
    goodP = false;
    errPass.style.display = "block";
  }
  if (goodM && goodP) {
    alert("El formulario está perfecto");
  }
}
