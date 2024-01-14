document.addEventListener('DOMContentLoaded', function () {
    const noBtn = document.getElementById('no-btn');
  
    noBtn.addEventListener('click', function () {
      // Move the button randomly
      noBtn.style.position = 'absolute';
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
      noBtn.disabled = true; // Disable the button
    });
  });
  