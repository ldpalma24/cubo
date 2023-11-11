var cubo = document.querySelector('.cubo');
var isMouseDown = false;
var lastMouseX, lastMouseY;
var rotateX = 0, rotateY = 0;
var timeoutId;

// Cambia estos oyentes de eventos para que se activen en todo el documento
document.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;

  // Inicia el temporizador cuando se presiona el botón del mouse
  timeoutId = setTimeout(function() {
    alert('AJAAAAA MI PANITA TODO BIEN');
  }, 10000); // 10000 milisegundos son 10 segundos
});

document.addEventListener('mousemove', function(e) {
  if (isMouseDown) {
    var deltaX = e.clientX - lastMouseX;
    var deltaY = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    rotateX += deltaY * 0.5;
    rotateY += deltaX * 0.5;
    cubo.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
  }
});

document.addEventListener('mouseup', function() {
  isMouseDown = false;

  // Cancela el temporizador cuando se suelta el botón del mouse
  clearTimeout(timeoutId);
});