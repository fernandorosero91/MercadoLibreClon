// Main JavaScript for MercadoLibre Clone
console.log('JavaScript loaded!');

// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    
    if (mobileMenuToggle && mobileNav && mobileNavOverlay) {
        // Open menu
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.add('active');
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close menu
        function closeMenu() {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (mobileNavClose) {
            mobileNavClose.addEventListener('click', closeMenu);
        }
        
        mobileNavOverlay.addEventListener('click', closeMenu);
        
        // Close menu when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
    }
});
