const body = document.querySelector("#body");
body.addEventListener("click", () => {
  let random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.backgroundColor = random;
});
