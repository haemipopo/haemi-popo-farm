document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isExpanded = siteNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header Hide/Show on Scroll
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !siteNav.classList.contains('open')) {
      // Scroll down
      header.classList.add('hidden');
    } else {
      // Scroll up
      header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  // Intersection Observer for Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Parallax Effect Optimization (optional simple parallax for tree bg)
  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      // Note: background-attachment: fixed in CSS usually handles this better for performance,
      // but this is an alternative for mobile browsers where fixed background is buggy.
      // Leaving the CSS to handle it for now, just keeping this hook if needed.
    }, { passive: true });
  }
});
