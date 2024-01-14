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

document.addEventListener('DOMContentLoaded', function () {
  const ball = document.getElementById('ball');
  const leftGoal = document.getElementById('left-goal');

  leftGoal.addEventListener('click', function () {
    moveBall('left');
  });

  function moveBall(direction) {
    const ballSpeed = 5;
    const interval = setInterval(function () {
      const currentTop = parseInt(ball.style.top) || 0;
      if (currentTop >= window.innerHeight) {
        clearInterval(interval);
      } else {
        ball.style.top = `${currentTop + ballSpeed}px`;
      }
    }, 20);
  }
});
