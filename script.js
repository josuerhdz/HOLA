// Mostrar carta después de la animación del vino
setTimeout(() => {
    document.getElementById("animation-container").classList.add("hidden");
    document.getElementById("carta-container").classList.remove("hidden");
  }, 3500);
  
  function mostrarCita() {
    document.getElementById("carta-container").classList.add("hidden");
    document.getElementById("cita-container").classList.remove("hidden");
  }
  
  function cerrarCarta() {
    document.getElementById("carta-container").classList.add("hidden");
  }
  