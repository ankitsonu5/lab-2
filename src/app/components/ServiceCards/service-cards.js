// Service Cards JavaScript - Separate from TSX

document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Cards JavaScript loaded! 🏥');

    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');

    // Service data
    const serviceData = {
        'lab-tests': {
            title: 'Book Lab Tests',
            description: 'Comprehensive lab tests with home sample pickup',
            price: '₹199',
            features: ['Blood Test', 'Urine Test', 'Sugar Test', 'Cholesterol Test']
        },
        'health-checks': {
            title: 'Popular Health Checks',
            description: 'Complete health checkup packages for wellness',
            price: '₹299',
            features: ['Full Body Checkup', 'Heart Health', 'Liver Function', 'Kidney Function']
        },
        'xrays-mri': {
            title: 'X-rays & MRI Scans',
            description: 'Advanced imaging services for accurate diagnosis',
            price: '₹399',
            features: ['X-Ray', 'MRI Scan', 'CT Scan', 'Ultrasound']
        }
    };

    // Add click handlers to service cards
    serviceCards.forEach((card, index) => {
        // Add data attribute for identification
        const serviceTypes = ['lab-tests', 'health-checks', 'xrays-mri'];
        card.setAttribute('data-service', serviceTypes[index]);

        card.addEventListener('click', function(e) {
            const serviceType = this.getAttribute('data-service');
            const service = serviceData[serviceType];

            if (service) {
                openBookingForm(service);
            }
        });

        // Add hover effects
        card.addEventListener('mouseenter', function() {
            console.log(`Hovering over: ${this.getAttribute('data-service')}`);
        });
    });



    // Show service information
    function showServiceInfo(service) {
        alert(`${service.title}\n\n${service.description}\n\nStarting from: ${service.price}\n\nIncludes:\n• ${service.features.join('\n• ')}`);
    }

    // Open booking form
    function openBookingForm(service) {
        const userConfirm = confirm(`Book ${service.title}?\n\nPrice: ${service.price}\n\nClick OK to proceed with booking.`);
        
        if (userConfirm) {
            // Here you would typically open a booking modal or redirect
            alert(`Booking initiated for ${service.title}!\n\nYou will be redirected to the booking form.`);
            console.log('Booking data:', service);
            
            // Example: Redirect to booking page
            // window.location.href = `/booking?service=${service.title}&price=${service.price}`;
        }
    }

    // Add keyboard navigation
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });



    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all service cards
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Add touch support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    serviceCards.forEach(card => {
        card.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        });

        card.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            
            // If it's a tap (not a scroll), trigger click
            if (Math.abs(touchEndY - touchStartY) < 10) {
                this.click();
            }
        });
    });

    // Performance optimization: Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            console.log('Window resized - Service cards adjusted');
        }, 250);
    });

    console.log('Service Cards initialized successfully! 🚀');
    console.log('Available services:', Object.keys(serviceData));
});
