const body = document.querySelector("body");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});