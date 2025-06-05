// Frases de amor para Dany
const frasesDany = [
  "Dany mi amor, cada latido de mi corazón pronuncia tu nombre.",
  "Eres el sueño que nunca quiero dejar de soñar.",
  "Eres mi persona favorita.",
  "contigo voy hasta infinito y mas alla.",
  "Si el amor fuera un color, sería el de tus ojos.",
  "me gusta tus tetitas",
  "Contigo hasta el silencio es hermoso.",
  "eres mi luz que ilumina mis dias",
  "El mejor momento de mi día es cuando pienso en ti.",
  "tu amor es la melodía que baila en mi corazón."
];

// Mostrar modal con frase aleatoria
document.querySelectorAll('.marco-foto').forEach((foto, index) => {
  foto.addEventListener('click', function() {
    const modal = document.getElementById('fraseModal');
    const frase = document.getElementById('fraseAmor');
    const randomFrase = frasesDany[Math.floor(Math.random() * frasesDany.length)];
    
    frase.textContent = randomFrase;
    modal.style.display = 'block';
    
    // Cambiar color de fondo del modal según la foto
    const colors = ['#ff6b8b', '#ff8e9e', '#ff9bb3', '#ffb3c6', '#ffc2d1'];
    document.querySelector('.modal-contenido').style.background = `linear-gradient(135deg, ${colors[index % colors.length]}, ${colors[(index + 2) % colors.length]})`;
  });
});

// Cerrar modal
document.querySelector('.cerrar-modal').addEventListener('click', function() {
  document.getElementById('fraseModal').style.display = 'none';
});

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('fraseModal')) {
    document.getElementById('fraseModal').style.display = 'none';
  }
});