/* =========================================================
   YOKALP × CLOUDBEE
   PCOD / PCOS WELLNESS WORKSHOP
========================================================= */

'use strict';

/* =========================================================
   DOM READY
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initMobileNavigation();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  initRegisterButtons();
});

/* =========================================================
   PRELOADER
========================================================= */

function initPreloader() {
  const preloader = document.getElementById('preloader');

  if (!preloader) {
    return;
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 500);
  });
}

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function initNavbar() {
  const header = document.getElementById('siteHeader');

  if (!header) {
    return;
  }

  const updateNavbar = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  updateNavbar();

  window.addEventListener('scroll', updateNavbar, {
    passive: true,
  });
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initMobileNavigation() {
  const navbar = document.getElementById('mainNav');
  const toggler = document.querySelector('.mobile-menu');

  if (!navbar || !toggler) {
    return;
  }

  const navLinks = navbar.querySelectorAll('.nav-link, .nav-cta');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbar.classList.contains('show')) {
        const collapse = bootstrap.Collapse.getInstance(navbar);

        if (collapse) {
          collapse.hide();
        }
      }
    });
  });
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) {
    return;
  }

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add('visible');
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {
  const button = document.getElementById('backToTop');

  if (!button) {
    return;
  }

  const toggleButton = () => {
    if (window.scrollY > 500) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };

  toggleButton();

  window.addEventListener('scroll', toggleButton, {
    passive: true,
  });

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const header = document.getElementById('siteHeader');

      const headerHeight = header ? header.offsetHeight : 0;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}

/* =========================================================
   REGISTER BUTTONS
========================================================= */

function initRegisterButtons() {
  const registerButtons = document.querySelectorAll('a[href="#"]');

  registerButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      /*
       * Replace this alert with your actual
       * registration URL later.
       *
       * Example:
       *
       * window.location.href = "YOUR_FORM_URL";
       *
       */

      alert('Registration link will be connected here.');
    });
  });
}

/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  const navbar = document.getElementById('mainNav');

  if (navbar && navbar.classList.contains('show') && window.innerWidth < 992) {
    const collapse = bootstrap.Collapse.getInstance(navbar);

    if (collapse) {
      collapse.hide();
    }
  }
});
