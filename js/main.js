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

// Benefits scroll functionality
window.addEventListener('load', function() {
    const benefitsGrid = document.querySelector('.benefits-grid');
    const prevBtn = document.getElementById('benefitsPrev');
    const nextBtn = document.getElementById('benefitsNext');
    
    if (benefitsGrid && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            benefitsGrid.scrollBy({
                left: -280,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            benefitsGrid.scrollBy({
                left: 280,
                behavior: 'smooth'
            });
        });
        
        // Hide/show buttons based on scroll position
        function updateScrollButtons() {
            const scrollLeft = benefitsGrid.scrollLeft;
            const maxScroll = benefitsGrid.scrollWidth - benefitsGrid.clientWidth;
            
            prevBtn.sstyle.opacity = scrollLeft > 0 ? '1' : '0.3';
            prevBtn.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            nextBtn.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            nextBtn.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        benefitsGrid.addEventListener('scroll', updateScrollButtons);
        updateScrollButtons();
    }
});

// Offers scroll functionality
window.addEventListener('load', function() {
    const offersScroll = document.querySelector('.offers-scroll');
    const offersPrev = document.getElementById('offersPrev');
    const offersNext = document.getElementById('offersNext');
    
    if (offersScroll && offersPrev && offersNext) {
        offersPrev.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: -240,
                behavior: 'smooth'
            });
        });
        
        offersNext.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: 240,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility
        function updateOffersButtons() {
            const scrollLeft = offersScroll.scrollLeft;
            const maxScroll = offersScroll.scrollWidth - offersScroll.clientWidth;
            
            offersPrev.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            offersPrev.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            offersNext.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            offersNext.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        offersScroll.addEventListener('scroll', updateOffersButtons);
        updateOffersButtons();
    }
});

// Best Sellers scroll functionality
window.addEventListener('load', function() {
    const bestSellersScroll = document.querySelector('.best-sellers-scroll');
    const bestSellersPrev = document.getElementById('bestSellersPrev');
    const bestSellersNext = document.getElementById('bestSellersNext');
    
    if (bestSellersScroll && bestSellersPrev && bestSellersNext) {
        bestSellersPrev.addEventListener('click', function() {
            bestSellersScroll.scrollBy({
                left: -240,
                behavior: 'smooth'
            });
        });
        
        bestSellersNext.addEventListener('click', function() {
            bestSellersScroll.scrollBy({
                left: 240,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility
        function updateBestSellersButtons() {
            const scrollLeft = bestSellersScroll.scrollLeft;
            const maxScroll = bestSellersScroll.scrollWidth - bestSellersScroll.clientWidth;
            
            bestSellersPrev.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            bestSellersPrev.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            bestSellersNext.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            bestSellersNext.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        bestSellersScroll.addEventListener('scroll', updateBestSellersButtons);
        updateBestSellersButtons();
    }
});

// Update offers scroll to use new class
window.addEventListener('load', function() {
    const offersScroll = document.querySelector('.offers-scroll-main');
    const offersPrev = document.getElementById('offersPrev');
    const offersNext = document.getElementById('offersNext');
    
    if (offersScroll && offersPrev && offersNext) {
        offersPrev.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: -240,
                behavior: 'smooth'
            });
        });
        
        offersNext.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: 240,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility
        function updateOffersButtons() {
            const scrollLeft = offersScroll.scrollLeft;
            const maxScroll = offersScroll.scrollWidth - offersScroll.clientWidth;
            
            offersPrev.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            offersPrev.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            offersNext.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            offersNext.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        offersScroll.addEventListener('scroll', updateOffersButtons);
        updateOffersButtons();
    }
});

// Sample developer portfolios data
const developers = [
    {
        name: "Felipe Narvaes",
        role: "Full Stack Developer",
        description: "Especializado en desarrollo web moderno con experiencia en aplicaciones escalables.",
        services: [
            "Desarrollo Frontend",
            "Desarrollo Backend",
            "Diseño de APIs REST"
        ],
        technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
        github: "https://github.com/dev1",
        portfolio: "portafolio/dev1/index.html"
    },
    {
        name: "Fernando Rosero",
        role: "Frontend Developer & UI/UX Designer",
        description: "Experto en crear interfaces de usuario atractivas y responsivas.",
        services: [
            "Diseño UI/UX",
            "Desarrollo React",
            "Optimización Web"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
        github: "https://github.com/dev2",
        portfolio: "portafolio/dev2/index.html"
    },
    {
        name: "Nicol Muñoz",
        role: "Backend Developer & Database Specialist",
        description: "Especialista en arquitectura de servidores y bases de datos.",
        services: [
            "Desarrollo de APIs",
            "Gestión de Bases de Datos",
            "Arquitectura Cloud"
        ],
        technologies: ["Python", "Django", "PostgreSQL", "AWS"],
        github: "https://github.com/dev3",
        portfolio: "portafolio/dev3/index.html"
    },
    {
        name: "Yeraldin Araujo",
        role: "DevOps Engineer & Cloud Architect",
        description: "Enfocado en automatización, CI/CD y gestión de infraestructura.",
        services: [
            "Automatización",
            "CI/CD Pipelines",
            "Gestión de Contenedores"
        ],
        technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
        github: "https://github.com/dev4",
        portfolio: "portafolio/dev4/index.html"
    }
];

// Function to create portfolio cards
function createPortfolioCard(dev, index) {
    const initials = dev.name.split(' ').map(n => n.charAt(0)).join('');
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    return `
        <div class="portfolio-card">
            <div class="portfolio-avatar" style="background: ${colors[index]}">
                ${initials}
            </div>
            <h3>${dev.name}</h3>
            <p class="portfolio-role">${dev.role}</p>
            <p class="portfolio-description">${dev.description}</p>
            
            <div class="portfolio-services">
                <h4>Servicios</h4>
                <ul>
                    ${dev.services.map(service => `<li>• ${service}</li>`).join('')}
                </ul>
            </div>
            
            <div class="portfolio-tech">
                <h4>Tecnologías</h4>
                <div class="tech-tags">
                    ${dev.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="portfolio-actions">
                <a href="${dev.portfolio}" class="portfolio-btn portfolio-view">Ver Portafolio</a>
                <a href="${dev.github}" class="portfolio-btn portfolio-github" target="_blank">GitHub</a>
            </div>
        </div>
    `;
}

// Load portfolios on page load
window.addEventListener('load', function() {
    console.log('Loading portfolios and setting up navigation...');
    
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        portfolioGrid.innerHTML = developers.map((dev, index) => createPortfolioCard(dev, index)).join('');
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando: ${searchTerm}`);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Buscando: ${searchTerm}`);
                }
            }
        });
    }
});

// Smooth scroll functionality - Execute after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up smooth scroll...');
    
    // Handle all anchor links with smooth scroll
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            const href = link.getAttribute('href');
            console.log('Clicked link with href:', href);
            
            if (href && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1); // Remove the #
                const target = document.getElementById(targetId);
                
                console.log('Looking for element with id:', targetId);
                console.log('Found target:', target);
                
                if (target) {
                    console.log('Scrolling to target...');
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    console.error('Target element not found:', targetId);
                }
            }
        }
    });
    
    console.log('Smooth scroll setup complete');
});

// Handle cart icon click
document.addEventListener('click', function(e) {
    if (e.target.closest('.cart-icon')) {
        e.preventDefault();
        alert('Carrito de compras - Funcionalidad por implementar');
    }
});

// Handle offer card clicks
document.addEventListener('click', function(e) {
    const offerCard = e.target.closest('.offer-card');
    if (offerCard && !e.target.closest('a')) {
        console.log('Producto seleccionado');
    }
});
