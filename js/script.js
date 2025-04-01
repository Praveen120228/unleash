document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Optional: Change hamburger icon to 'X'
            this.innerHTML = mainNav.classList.contains('active') ? '✕' : '☰';
            // Optional: Aria expanded attribute for accessibility
            this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
        });

        // Close nav if clicking outside of it on mobile
        document.addEventListener('click', function(event) {
            if (mainNav.classList.contains('active') &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }


    // --- Sticky Header Background on Scroll ---
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Add background after scrolling down 50px
                siteHeader.style.backgroundColor = 'rgba(26, 26, 26, 0.95)'; // More opaque
            } else {
                siteHeader.style.backgroundColor = 'rgba(26, 26, 26, 0.9)'; // Default transparency
            }
        });
    }


    // --- Scroll Animations using Intersection Observer ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: Unobserve after animation to save resources
                    // observer.unobserve(entry.target);
                }
                 // Optional: Remove class if scrolling back up to re-trigger animation
                 // else {
                 //    entry.target.classList.remove('is-visible');
                 // }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
            // rootMargin: "-50px 0px -50px 0px" // Adjust trigger area (optional)
        });

        animatedElements.forEach(el => observer.observe(el));

    } else {
        // Fallback for browsers that don't support IntersectionObserver
        // Make elements visible immediately or use a simpler scroll listener (less performant)
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }


    // --- Smooth Scrolling for Anchor Links (Optional) ---
    // Select all links with hashes
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         // Check if the link is just a hash (like for tabs/accordions) or an actual section link
    //         if (this.getAttribute('href').length > 1 && document.querySelector(this.getAttribute('href'))) {
    //             e.preventDefault(); // Prevent default anchor click behavior

    //             const targetElement = document.querySelector(this.getAttribute('href'));
    //             const headerOffset = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0; // Adjust for fixed header height
    //             const elementPosition = targetElement.getBoundingClientRect().top;
    //             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth" // Smooth scroll effect
    //             });

    //              // Close mobile nav if open after clicking a link
    //              if (mainNav && mainNav.classList.contains('active')) {
    //                 mainNav.classList.remove('active');
    //                 menuToggle.innerHTML = '☰';
    //                 menuToggle.setAttribute('aria-expanded', 'false');
    //             }
    //         }
    //     });
    // });

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // --- Basic Contact Form Placeholder ---
    // Add more robust validation and handling here if needed.
    // This primarily relies on HTML5 'required' attribute for now.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // IMPORTANT: Prevent actual submission until backend is set up
             // e.preventDefault();
            // console.log('Form submitted (prevented default). Add AJAX/Fetch call here.');
            // Add validation logic here if desired
            // Example: Show a success/error message after backend response
        });
    }

}); // End DOMContentLoaded