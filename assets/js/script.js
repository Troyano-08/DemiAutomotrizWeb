// Esperar que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Cargar header si existe el contenedor
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    fetch("../components/header.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;

        // Activar la clase 'active' al enlace correspondiente
        const currentPage = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll("#navbar-container .nav-link");

        links.forEach(link => {
          if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
          }
        });
      });
  }

  // Cargar footer si existe el contenedor
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    fetch("../components/footer.html")
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      });
  }

  // Validación: aceptar términos antes de enviar formulario
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const terms = document.getElementById("aceptar-terminos");
      if (terms && !terms.checked) {
        e.preventDefault();
        alert("Debes aceptar los términos y condiciones antes de enviar.");
      }
    });
  }

  // Scroll suave para anclas internas (si se usan en alguna página)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
    // Inicializar AOS (animaciones al hacer scroll)
  AOS.init({
    duration: 1000,
    once: true
  });

});

