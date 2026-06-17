// =========================================================
// PRODESK IT — Landing Page Scripts (v2)
// Vanilla JS only — no frameworks (per Sprint 01 constraints)
// Note: this site defaults to DARK mode; toggle switches to light.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Dark / Light Mode Toggle ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const THEME_KEY = 'prodesk-theme';

  // Restore saved preference on load (default = dark, so we only ever add 'light-mode')
  const savedTheme = getSavedTheme();
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    saveTheme(isLight ? 'light' : 'dark');
  });

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (e) {
      /* ignore — theme just won't persist */
    }
  }

  /* ---------- Mobile Hamburger Menu ---------- */
  const burger = document.getElementById('burger');
  const primaryNav = document.getElementById('primary-nav');

  burger.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    burger.classList.toggle('is-active');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Dynamic Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});