// Main JavaScript - Access PathLab

// Global Variables
let isLoaded = false;
let scrollAnimationElements = [];

// Initialize Website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Website loading...');
    initializeWebsite();
});

// Initialize Website Functions
function initializeWebsite() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize components
    setTimeout(() => {
        initializeScrollAnimations();
        initializePerformanceOptimizations();
        initializeSEO();
        initializeAccessibility();
        
        // Hide loading screen
        hideLoadingScreen();
        
        console.log('Access PathLab Website loaded successfully!');
        isLoaded = true;
    }, 2000);
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
    // Get all elements that should animate on scroll
    scrollAnimationElements = document.querySelectorAll('.scroll-animate, .service-card, .section-header');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Add staggered animation for service cards
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
    
    // Observe all elements
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
    
    // Preload critical resources
    preloadCriticalResources();
    
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
        // Add scroll-based animations here
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

// Preload Critical Resources
function preloadCriticalResources() {
    const criticalResources = [
        '../images/logo.svg',
        '../images/family1.jpg',
        '../css/header.css',
        '../css/banner.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        
        if (resource.endsWith('.css')) {
            link.as = 'style';
        } else if (resource.endsWith('.js')) {
            link.as = 'script';
        } else {
            link.as = 'image';
        }
        
        document.head.appendChild(link);
    });
}

// Initialize SEO
function initializeSEO() {
    // Add structured data
    addStructuredData();
    
    // Update meta tags dynamically
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
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
    }
    
    // Add theme color
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#14b8a6';
    document.head.appendChild(themeColor);
}

// Initialize Accessibility
function initializeAccessibility() {
    // Add ARIA labels
    addAriaLabels();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Add focus management
    setupFocusManagement();
    
    console.log('Accessibility features enabled');
}

// Add ARIA Labels
function addAriaLabels() {
    // Add labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            const text = button.textContent.trim();
            if (text) {
                button.setAttribute('aria-label', text);
            }
        }
    });
    
    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label])');
    inputs.forEach(input => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            const labelText = label.textContent.trim();
            if (labelText) {
                input.setAttribute('aria-label', labelText);
            }
        }
    });
}

// Setup Keyboard Navigation
function setupKeyboardNavigation() {
    // Tab navigation for service cards
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
}

// Setup Focus Management
function setupFocusManagement() {
    // Focus trap for modal
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

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error Handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
    
    // Log error for analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': event.error.message,
            'fatal': false
        });
    }
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Measure page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Log performance metrics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
            'name': 'page_load',
            'value': Math.round(loadTime)
        });
    }
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for global use
window.showLoadingScreen = showLoadingScreen;
window.hideLoadingScreen = hideLoadingScreen;
window.debounce = debounce;
window.throttle = throttle;
