const sections = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

sections.forEach((section) => observer.observe(section));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 740 && nav) {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});
