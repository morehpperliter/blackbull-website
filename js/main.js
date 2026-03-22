// =============================================
// BLACK BULL CAPITAL PARTNERS — main.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- NAV: Scroll behavior ---
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- NAV: Mobile toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll(
    '.service-card, .team-card, .step, .about-grid, .stat, .contact-grid, .about-values'
  );
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards within the same parent
    const siblings = el.parentElement.querySelectorAll('.reveal');
    const idx = Array.from(siblings).indexOf(el);
    if (idx > 0) el.classList.add(`reveal-delay-${Math.min(idx, 5)}`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // --- SMOOTH ACTIVE NAV LINK ---
  const sections  = document.querySelectorAll('section[id]');
  const navItems  = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // --- CONTACT FORM ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#2e7d32';
      btn.disabled = true;
      // Reset after 4 seconds
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  }

});
