/**
 * BYOK AI Chat — Landing Page JavaScript
 * Minimal JS for navigation, smooth scroll, and accessibility
 * No external dependencies, no analytics, no tracking
 */

(function () {
    'use strict';

    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close nav when a link is clicked (mobile)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close nav when clicking outside (mobile)
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });

    // --- Scroll-based Nav Background ---
    const nav = document.querySelector('.nav');
    if (nav) {
        let lastScroll = 0;

        function updateNav() {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                nav.style.background = 'rgba(10, 14, 26, 0.95)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.background = 'rgba(10, 14, 26, 0.85)';
                nav.style.boxShadow = 'none';
            }
            lastScroll = scrollY;
        }

        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    // --- Intersection Observer for Animations ---
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.feature-card, .provider-card, .step-card, .faq-item');

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // --- FAQ Accordion (one open at a time, optional) ---
    // Uncomment below to enable single-open accordion behavior:
    /*
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        item.addEventListener('toggle', function () {
            if (item.open) {
                faqItems.forEach(function (other) {
                    if (other !== item && other.open) {
                        other.removeAttribute('open');
                    }
                });
            }
        });
    });
    */

    // --- Active Nav Link Highlighting ---
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length && navAnchors.length) {
        function updateActiveNav() {
            const scrollY = window.scrollY;
            const navHeight = document.querySelector('.nav').offsetHeight;

            sections.forEach(function (section) {
                const sectionTop = section.offsetTop - navHeight - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    navAnchors.forEach(function (anchor) {
                        anchor.classList.remove('active');
                        if (anchor.getAttribute('href') === '#' + sectionId) {
                            anchor.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav();
    }

})();