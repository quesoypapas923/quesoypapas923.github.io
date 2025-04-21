const imagen = document.getElementById("imagenCambio");
let cambioHecho = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 300 && !cambioHecho) {
    imagen.classList.add("fuera");

    setTimeout(() => {
      imagen.src = "img/yo linda.png";
      imagen.classList.remove("fuera");
    }, 800);
    cambioHecho = true;
  }

  if (scrollY <= 300 && cambioHecho) {
    imagen.classList.add("fuera");

    setTimeout(() => {
      imagen.src = "img/yo.jpeg";
      imagen.classList.remove("fuera");
    }, 800);
    cambioHecho = false;
  }
});