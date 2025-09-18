// Archivo principal de JavaScript
// Navegación suave entre secciones
// Validación básica de formulario
// Efectos interactivos

// Navegación suave (scroll)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Animación de entrada para cards (solo cuando aparecen en viewport)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.equipo-card, .estadio-card').forEach((card) => {
  observer.observe(card);
});

// Validación básica de formulario de contacto
document.getElementById('formFanatico').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const formMsg = document.getElementById('formMsg');

  // Validación simple
  if (!nombre || !email || !mensaje) {
    formMsg.innerHTML = '<div class="alert alert-danger">Por favor, completa todos los campos.</div>';
    return;
  }
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    formMsg.innerHTML = '<div class="alert alert-warning">Ingresa un email válido.</div>';
    return;
  }
  formMsg.innerHTML = '<div class="alert alert-success">¡Gracias por tu mensaje, ' + nombre + '! Pronto te contactaremos.</div>';
  this.reset();
});

// ...otros scripts interactivos...
