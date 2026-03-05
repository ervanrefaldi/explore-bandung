/*
    Project: Explore Kota Kembang - Website Pariwisata Bandung
    Author: Antigravity Assistant (untuk Ujikom Junior Web Developer)
    Description: File JavaScript sederhana untuk interaksi website.
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links (Handled by CSS, but good for older browsers)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash (internal target)
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Buffer for sticky navbar
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu after clicking
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });

    // EFFECT: Change navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.paddingTop = '10px';
            navbar.style.paddingBottom = '10px';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.paddingTop = '20px';
            navbar.style.paddingBottom = '20px';
        }
    });

    // Logging for testing (Simple check for Ujikom examiner)
    console.log("Website 'Explore Kota Kembang' berhasil dimuat!");

});
