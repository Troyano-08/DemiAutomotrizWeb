// Cargar Header y Footer automáticamente
document.addEventListener("DOMContentLoaded", function () {
  // Cargar header
  fetch("../components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Activar la clase 'active' al enlace correspondiente
      const currentPage = window.location.pathname.split("/").pop();
      const links = document.querySelectorAll("#navbar-container .nav-link");

      links.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
          link.classList.add("active");
        }
      });
    });

  // Cargar footer
  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
