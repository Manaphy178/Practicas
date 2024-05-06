const form = document.querySelector("#formularioCompleto");
// console.log(form);

form.addEventListener("submit", valid);
let mujer = document.querySelector("#Mujer");
let hombre = document.querySelector("#Hombre");
let Wlabel = document.querySelector("#WLabel");
let Mlabel = document.querySelector("#MLabel");
let conf = document.querySelector("#conf");
mujer.addEventListener("click", () => {
  Wlabel.classList.remove("radLabel");
  Wlabel.classList.add("radLabelCheck");
  Mlabel.classList.remove("radLabelCheck");
  Mlabel.classList.add("radLabel");
});
hombre.addEventListener("click", () => {
  Wlabel.classList.add("radLabel");
  Wlabel.classList.remove("radLabelCheck");
  Mlabel.classList.add("radLabelCheck");
  Mlabel.classList.remove("radLabel");
});
function valid(event) {
  event.preventDefault();
  let datosUser = [];
  // Booleano para saber si enseñar la lista o no
  let showLista = false;
  const EXPREGULARMAIL =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  let nombre = document.querySelector("#nombre").value;
  let mail = document.querySelector("#correo").value;
  let genero;
  let term = document.querySelector("#term");

  // Lista y elementos de error
  let lista = document.querySelector("#lista");
  let errNombre = document.querySelector("#errorNombre");
  let errMail = document.querySelector("#errorMail");
  let errGenero = document.querySelector("#errorSexo");
  let errTerm = document.querySelector("#errorTerminos");

  if (nombre.length > 2 && nombre.length < 20) {
    datosUser.push(nombre);
    errNombre.classList.remove("elementoErrorShow");
    errNombre.classList.add("oculto");
  } else {
    showLista = true;
    errNombre.classList.add("elementoErrorShow");
    errNombre.classList.remove("oculto");
  }

  if (EXPREGULARMAIL.test(mail)) {
    datosUser.push(mail);
    errMail.classList.remove("elementoErrorShow");
    errMail.classList.add("oculto");
  } else {
    showLista = true;
    errMail.classList.add("elementoErrorShow");
    errMail.classList.remove("oculto");
  }

  if (mujer.checked || hombre.checked) {
    genero = document.querySelector('input[name="genero"]').value;
    datosUser.push(genero);
    errGenero.classList.remove("elementoErrorShow");
    errGenero.classList.add("oculto");
  } else if (!mujer.checked && !hombre.checked) {
    showLista = true;
    errGenero.classList.add("elementoErrorShow");
    errGenero.classList.remove("oculto");
  }

  if (term.checked) {
    errTerm.classList.remove("elementoErrorShow");
    errTerm.classList.add("oculto");
  } else {
    showLista = true;
    errTerm.classList.add("elementoErrorShow");
    errTerm.classList.remove("oculto");
  }

  if (showLista) {
    lista.classList.remove("oculto");
    lista.classList.add("listaErrorShow");
    conf.classList.remove("conf");
    conf.classList.add("oculto");
  } else {
    lista.classList.add("oculto");
    lista.classList.remove("listaErrorShow");
    conf.classList.add("conf");
    conf.classList.remove("oculto");
  }
}
