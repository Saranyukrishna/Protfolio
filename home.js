// Subtle parallax for hero floating shapes
const shapes = document.querySelectorAll('.floating-shape');
document.addEventListener('mousemove', (e) => {
  const w = window.innerWidth, h = window.innerHeight;
  const x = (e.clientX - w/2) / w, y = (e.clientY - h/2) / h;
  shapes.forEach((shape, i) => {
    const factor = (i+1) * 12;
    shape.style.transform = `translate(${x*factor}px, ${y*factor}px)`;
  });
});

// Animate glass card on scroll
const hero = document.querySelector('.hero-content');
if(hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    hero.style.boxShadow = `0 8px 40px 0 rgba(103,232,249,${0.12 + Math.min(scrolled/600,0.18)})`;
    hero.style.borderColor = `rgba(165,180,252,${0.18 + Math.min(scrolled/600,0.22)})`;
  });
}
