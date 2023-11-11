var cubo = document.querySelector('.cubo');
var isMouseDown = false;
var lastMouseX, lastMouseY;
var rotateX = 0, rotateY = 0;

// Cambia estos oyentes de eventos para que se activen en todo el documento
document.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
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
});