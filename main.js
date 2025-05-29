// JavaScript to animate text on hover
document.addEventListener('DOMContentLoaded', function () {
  const text = document.getElementById('animated-text');
  if (text) {
    text.addEventListener('mouseenter', () => {
      text.classList.add('animate-text');
    });
    text.addEventListener('mouseleave', () => {
      text.classList.remove('animate-text');
    });
  }
});