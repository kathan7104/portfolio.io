// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
        const typed = new Typed('.typed', {
            strings: typedElement.getAttribute('data-typed-items').split(','),
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            cursorChar: '|',
            smartBackspace: true,
            startDelay: 1000,
            showCursor: true,
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation Active State
    function setActiveNavItem() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Navbar Scroll Effect
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Loading Animation
    function handlePageLoad() {
        document.body.classList.remove('loading');
    }

    // Form Validation (if needed)
    function validateForm(formElement) {
        const inputs = formElement.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        return isValid;
    }

    // Image Loading Animation
    function handleImageLoad() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }

    // Theme Toggle (if needed)
    function initializeThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                localStorage.setItem('theme', 
                    document.body.classList.contains('dark-theme') ? 'dark' : 'light'
                );
            });
        }
    }

    // Mobile Menu Toggle
    function initializeMobileMenu() {
        const menuToggle = document.querySelector('.navbar-toggler');
        const navbar = document.querySelector('.navbar-collapse');

        if (menuToggle && navbar) {
            menuToggle.addEventListener('click', () => {
                navbar.classList.toggle('show');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                    navbar.classList.remove('show');
                }
            });
        }
    }

    // Animation on Scroll
    function initializeScrollAnimation() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Initialize all functions
    function initialize() {
        setActiveNavItem();
        handleImageLoad();
        initializeThemeToggle();
        initializeMobileMenu();
        initializeScrollAnimation();

        // Event Listeners
        window.addEventListener('scroll', handleNavbarScroll);
        window.addEventListener('load', handlePageLoad);

        // Form submission (if needed)
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!validateForm(this)) {
                    e.preventDefault();
                }
            });
        });
    }

    // Error Handling
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo);
        return false;
    };

    // Initialize everything
    initialize();
});

// Utility Functions
const utils = {
    // Debounce function for performance optimization
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date
    formatDate: (date) => {
        return new Date(date).toLocaleDateString();
    },

    // Validate email
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
};