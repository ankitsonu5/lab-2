// Services JavaScript - Access PathLab

// Global Variables
let selectedService = '';

// Initialize Services
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Services loaded successfully!');
    initializeServices();
});

// Initialize Services Functions
function initializeServices() {
    setupServiceCards();
    setupServiceAnimations();
    setupServiceInteractions();
    animateServices();
}

// Setup Service Cards
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click handlers
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('.card-title')?.textContent || 'Service';
            handleServiceClick(serviceName);
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
        
        // Add animation delay
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log(`${serviceCards.length} service cards initialized`);
}

// Handle Service Click
function handleServiceClick(serviceName) {
    selectedService = serviceName;
    
    // Add click animation
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        clickedCard.style.transform = 'translateY(-10px) scale(1.02)';
        
        // Open booking modal
        if (typeof openBookingModal === 'function') {
            openBookingModal(serviceName);
        } else {
            console.log('Booking modal function not available');
            showServiceInfo(serviceName);
        }
    }, 150);
    
    console.log('Service clicked:', serviceName);
}

// Show Service Info (fallback)
function showServiceInfo(serviceName) {
    alert(`You selected: ${serviceName}\n\nPlease call +91 98765 43210 to book this service.`);
}

// Setup Service Animations
function setupServiceAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for service cards
                if (entry.target.classList.contains('service-card')) {
                    const cards = document.querySelectorAll('.service-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    
                    setTimeout(() => {
                        entry.target.classList.add('fade-in-up');
                    }, index * 100);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all service elements
    const serviceElements = document.querySelectorAll('.service-card, .section-header, .additional-services, .services-cta');
    serviceElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup Service Interactions
function setupServiceInteractions() {
    // Additional service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('.service-name')?.textContent || 'Service';
            handleServiceClick(serviceName);
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.toLowerCase();
            
            if (action.includes('call')) {
                makeCall();
            } else if (action.includes('whatsapp')) {
                sendWhatsApp();
            }
        });
    });
}

// Animate Services on Load
function animateServices() {
    const servicesSection = document.querySelector('.services-section');
    if (!servicesSection) return;
    
    // Initial animation
    servicesSection.style.opacity = '0';
    servicesSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        servicesSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        servicesSection.style.opacity = '1';
        servicesSection.style.transform = 'translateY(0)';
    }, 200);
    
    // Animate section header
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        setTimeout(() => {
            sectionHeader.classList.add('fade-in-up');
        }, 400);
    }
    
    // Animate service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, 600 + (index * 150));
    });
}

// Add CSS animations
function addServiceAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .service-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card.fade-in-up {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-item {
            transition: all 0.3s ease;
        }
        
        .section-header {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .section-header.fade-in-up {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations
addServiceAnimations();

// Make Call Function
function makeCall() {
    window.location.href = 'tel:+919876543210';
    console.log('Phone call initiated from services');
}

// Send WhatsApp Function
function sendWhatsApp() {
    const message = `Hi! I'm interested in your healthcare services.

Please provide more information about:
- Lab Tests
- Health Checkups  
- X-rays & Scans
- Home Collection

Thank you!`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    console.log('WhatsApp message sent from services');
}

// Get Service Info
function getServiceInfo(serviceName) {
    const serviceInfo = {
        'Lab Tests': {
            description: 'Comprehensive laboratory testing including blood tests, urine tests, and specialized diagnostics',
            features: ['Quick Results', 'Home Collection', 'Digital Reports', 'Expert Analysis'],
            price: 'Starting from ₹99'
        },
        'Health Checkups': {
            description: 'Complete body checkups and preventive health screenings for early detection',
            features: ['Full Body Checkup', 'Cancer Screening', 'Heart Health', 'Diabetes Check'],
            price: 'Starting from ₹199'
        },
        'X-rays & Scans': {
            description: 'Advanced imaging services including digital X-rays, CT scans, and MRI',
            features: ['Digital X-rays', 'CT Scans', 'MRI Available', 'Same Day Results'],
            price: 'Starting from ₹299'
        }
    };
    
    return serviceInfo[serviceName] || {
        description: 'Professional healthcare service',
        features: ['Quality Service', 'Expert Care', 'Reliable Results'],
        price: 'Contact for pricing'
    };
}

// Update Service Display
function updateServiceDisplay(serviceName) {
    const info = getServiceInfo(serviceName);
    console.log('Service Info:', info);
    
    // You can use this to update UI elements
    return info;
}

// Track Service Interactions
function trackServiceInteraction(serviceName, action) {
    console.log(`Service Interaction: ${serviceName} - ${action}`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'service_interaction', {
            'service_name': serviceName,
            'action': action
        });
    }
}

// Export functions for global use
window.handleServiceClick = handleServiceClick;
window.getServiceInfo = getServiceInfo;
window.updateServiceDisplay = updateServiceDisplay;
window.trackServiceInteraction = trackServiceInteraction;
