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

// Carousel functionality - Ultra Simple Version
window.addEventListener('load', function() {
    console.log('Window loaded, starting carousel...');
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    console.log('Found', slides.length, 'slides');
    console.log('Found', indicators.length, 'indicators');
    
    if (slides.length === 0) {
        console.error('ERROR: No slides found!');
        return;
    }
    
    let currentIndex = 0;
    let autoPlayInterval;
    
    // Function to show a specific slide
    function showSlide(index) {
        console.log('Showing slide:', index);
        
        // Hide all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        
        // Hide all indicators
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        
        // Show current indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentIndex = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        let next = currentIndex + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        let prev = currentIndex - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }
    
    // Start auto-play
    function startAutoPlay() {
        console.log('Starting auto-play...');
        stopAutoPlay();
        autoPlayInterval = setInterval(function() {
            console.log('Auto-advancing to next slide...');
            nextSlide();
        }, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Next button clicked');
            nextSlide();
            startAutoPlay();
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            console.log('Previous button clicked');
            prevSlide();
            startAutoPlay();
        });
    }
    
    // Indicator clicks
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            console.log('Indicator', index, 'clicked');
            showSlide(index);
            startAutoPlay();
        });
    });
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            console.log('Mouse entered - pausing');
            stopAutoPlay();
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            console.log('Mouse left - resuming');
            startAutoPlay();
        });
    }
    
    // Initialize
    showSlide(0);
    startAutoPlay();
    console.log('Carousel initialized successfully!');
});