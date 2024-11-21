document.addEventListener('mousemove', (event) => {
  const ojos = document.querySelectorAll('.ojo');
  
  ojos.forEach((ojo) => {
    const rect = ojo.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;

    const maxDistance = 10; // Limita el movimiento a 10px en cualquier dirección
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const moveX = maxDistance * (deltaX / distance);
    const moveY = maxDistance * (deltaY / distance);

    ojo.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
