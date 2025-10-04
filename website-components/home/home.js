// Home JavaScript - Access PathLab

// Global Variables
let isLoaded = false;
let componentsLoaded = 0;
const totalComponents = 4; // header, banner, services, booking

// Initialize Home Page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Home Page loading...');
    initializeHomePage();
});

// Initialize Home Page Functions
function initializeHomePage() {
    // Show loading screen
    showLoadingScreen();
    
    // Load all components
    loadComponents();
    
    // Initialize other features
    setTimeout(() => {
        initializeScrollAnimations();
        initializePerformanceOptimizations();
        initializeSEO();
        initializeAccessibility();
        
        console.log('Access PathLab Home Page loaded successfully!');
        isLoaded = true;
    }, 1000);
}

// Load Components
function loadComponents() {
    // Load Header
    loadComponent('../header/header.html', 'headerSection', () => {
        console.log('Header component loaded');
        componentLoaded();
    });
    
    // Load Banner
    loadComponent('../banner/banner.html', 'bannerSection', () => {
        console.log('Banner component loaded');
        componentLoaded();
    });
    
    // Load Services
    loadComponent('../services/services.html', 'servicesSection', () => {
        console.log('Services component loaded');
        componentLoaded();
    });
    
    // Load other components
    setTimeout(() => {
        loadComponent('../packages/packages.html', 'packagesSection', () => {
            console.log('Packages component loaded');
        });
        
        loadComponent('../concerns/concerns.html', 'concernsSection', () => {
            console.log('Concerns component loaded');
        });
        
        loadComponent('../footer/footer.html', 'footerSection', () => {
            console.log('Footer component loaded');
        });
        
        componentLoaded(); // For booking system
    }, 500);
}

// Load Individual Component
function loadComponent(url, targetId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Extract only the body content from the loaded HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const bodyContent = doc.body.innerHTML;
                targetElement.innerHTML = bodyContent;
                
                if (callback) callback();
            }
        })
        .catch(error => {
            console.error(`Error loading component ${url}:`, error);
            // Load fallback content
            loadFallbackContent(targetId);
            if (callback) callback();
        });
}

// Component Loaded Counter
function componentLoaded() {
    componentsLoaded++;
    
    if (componentsLoaded >= totalComponents) {
        // All critical components loaded
        setTimeout(() => {
            hideLoadingScreen();
        }, 1000);
    }
}

// Load Fallback Content
function loadFallbackContent(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    switch(targetId) {
        case 'headerSection':
            targetElement.innerHTML = `
                <header style="padding: 20px; background: #14b8a6; color: white; text-align: center;">
                    <h1>Access PathLab</h1>
                    <p>Complete Healthcare Solutions</p>
                </header>
            `;
            break;
            
        case 'bannerSection':
            targetElement.innerHTML = `
                <section style="padding: 60px 20px; background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; text-align: center;">
                    <h2>Family Health Checkup Package</h2>
                    <p>Starting from ₹199</p>
                    <button onclick="openBookingModal('Family Checkup')" style="padding: 12px 24px; background: white; color: #14b8a6; border: none; border-radius: 25px; font-weight: 600; cursor: pointer;">Book Now</button>
                </section>
            `;
            break;
            
        case 'servicesSection':
            targetElement.innerHTML = `
                <section style="padding: 60px 20px; text-align: center;">
                    <h2>Our Services</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                        <div style="padding: 30px; background: #f8fafc; border-radius: 12px; cursor: pointer;" onclick="openBookingModal('Lab Tests')">
                            <h3>Lab Tests</h3>
                            <p>Blood tests, urine tests, and more</p>
                        </div>
                        <div style="padding: 30px; background: #f8fafc; border-radius: 12px; cursor: pointer;" onclick="openBookingModal('Health Checkups')">
                            <h3>Health Checkups</h3>
                            <p>Complete body checkups</p>
                        </div>
                        <div style="padding: 30px; background: #f8fafc; border-radius: 12px; cursor: pointer;" onclick="openBookingModal('X-rays & Scans')">
                            <h3>X-rays & Scans</h3>
                            <p>Digital imaging services</p>
                        </div>
                    </div>
                </section>
            `;
            break;
    }
}

// Show Loading Screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('hidden');
    }
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const scrollAnimationElements = document.querySelectorAll('.scroll-animate, .service-card, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.classList.add('animate-fade-in-up');
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollAnimationElements.forEach(element => {
        observer.observe(element);
    });
    
    console.log('Scroll animations initialized');
}

// Initialize Performance Optimizations
function initializePerformanceOptimizations() {
    // Lazy load images
    lazyLoadImages();
    
    // Optimize scroll performance
    optimizeScrollPerformance();
    
    console.log('Performance optimizations applied');
}

// Lazy Load Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Optimize Scroll Performance
function optimizeScrollPerformance() {
    let ticking = false;
    
    function updateScrollPosition() {
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize SEO
function initializeSEO() {
    addStructuredData();
    updateMetaTags();
    console.log('SEO optimizations applied');
}

// Add Structured Data
function addStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Access PathLab",
        "description": "Leading diagnostic center offering comprehensive lab tests, health checkups, X-rays, MRI scans with home collection service.",
        "url": "https://accesspathlab.com",
        "telephone": "+91-98765-43210",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "medicalSpecialty": [
            "Pathology",
            "Radiology",
            "Laboratory Medicine"
        ],
        "serviceType": [
            "Lab Tests",
            "Health Checkups",
            "X-rays",
            "MRI Scans",
            "Home Collection"
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Update Meta Tags
function updateMetaTags() {
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
    }
    
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#14b8a6';
    document.head.appendChild(themeColor);
}

// Initialize Accessibility
function initializeAccessibility() {
    addAriaLabels();
    setupKeyboardNavigation();
    setupFocusManagement();
    console.log('Accessibility features enabled');
}

// Add ARIA Labels
function addAriaLabels() {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            const text = button.textContent.trim();
            if (text) {
                button.setAttribute('aria-label', text);
            }
        }
    });
}

// Setup Keyboard Navigation
function setupKeyboardNavigation() {
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            
            card.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    card.click();
                }
            });
        });
    }, 2000);
}

// Setup Focus Management
function setupFocusManagement() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                trapFocus(event, modal);
            }
        });
    }
}

// Trap Focus in Modal
function trapFocus(event, container) {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
        if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    } else {
        if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
}

// Error Handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
});

// Performance Monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Home page loaded in ${loadTime.toFixed(2)}ms`);
});

// Export functions for global use
window.showLoadingScreen = showLoadingScreen;
window.hideLoadingScreen = hideLoadingScreen;
window.loadComponent = loadComponent;
