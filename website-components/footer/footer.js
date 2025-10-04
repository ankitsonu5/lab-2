// Footer JavaScript - Access PathLab

// Initialize Footer
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Footer loaded successfully!');
    initializeFooter();
});

// Initialize Footer Functions
function initializeFooter() {
    setupFooterAnimations();
    setupFooterLinks();
    setupSocialLinks();
    setupEmergencyButtons();
    animateFooter();
}

// Setup Footer Animations
function setupFooterAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for footer columns
                if (entry.target.classList.contains('footer-column')) {
                    const columns = document.querySelectorAll('.footer-column');
                    const index = Array.from(columns).indexOf(entry.target);
                    
                    setTimeout(() => {
                        entry.target.classList.add('fade-in-up');
                    }, index * 150);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all footer elements
    const footerElements = document.querySelectorAll('.footer-column, .footer-bottom, .emergency-contact');
    footerElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup Footer Links
function setupFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Handle internal navigation
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
            
            // Track link clicks
            trackFooterLinkClick(this.textContent, href);
        });
        
        // Add hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Setup Social Links
function setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const platform = this.getAttribute('aria-label');
            
            // Handle WhatsApp link
            if (platform === 'WhatsApp') {
                event.preventDefault();
                sendWhatsApp();
                return;
            }
            
            // Handle other social platforms
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
                handleSocialClick(platform);
            }
            
            // Track social link clicks
            trackSocialLinkClick(platform);
        });
        
        // Add hover animation
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Setup Emergency Buttons
function setupEmergencyButtons() {
    const emergencyButtons = document.querySelectorAll('.emergency-btn');
    
    emergencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.classList.contains('call') ? 'call' : 'whatsapp';
            
            if (action === 'call') {
                makeCall();
            } else {
                sendWhatsApp();
            }
            
            // Track emergency button clicks
            trackEmergencyClick(action);
        });
        
        // Add click animation
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Animate Footer on Load
function animateFooter() {
    const footerSection = document.querySelector('.footer-section');
    if (!footerSection) return;
    
    // Initial animation
    footerSection.style.opacity = '0';
    footerSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        footerSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        footerSection.style.opacity = '1';
        footerSection.style.transform = 'translateY(0)';
    }, 200);
    
    // Animate footer columns with stagger
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns.forEach((column, index) => {
        setTimeout(() => {
            column.classList.add('fade-in-up');
        }, 400 + (index * 150));
    });
    
    // Animate emergency contact
    setTimeout(() => {
        const emergencyContact = document.querySelector('.emergency-contact');
        if (emergencyContact) {
            emergencyContact.classList.add('fade-in-up');
        }
    }, 800);
}

// Scroll to Section
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.log(`Section ${sectionId} not found`);
    }
}

// Handle Social Click
function handleSocialClick(platform) {
    const socialUrls = {
        'Facebook': 'https://facebook.com/accesspathlab',
        'Twitter': 'https://twitter.com/accesspathlab',
        'Instagram': 'https://instagram.com/accesspathlab',
        'LinkedIn': 'https://linkedin.com/company/accesspathlab'
    };
    
    const url = socialUrls[platform];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert(`${platform} page coming soon!`);
    }
}

// Make Call Function
function makeCall() {
    window.location.href = 'tel:+919876543210';
    console.log('Emergency call initiated from footer');
}

// Send WhatsApp Function
function sendWhatsApp() {
    const message = `🚨 EMERGENCY CONTACT - Access PathLab

Hi! I need urgent assistance with:
□ Emergency lab tests
□ Home collection service
□ Medical consultation
□ Test results inquiry

Please contact me immediately.

Thank you!`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    console.log('Emergency WhatsApp message sent from footer');
}

// Track Footer Link Click
function trackFooterLinkClick(linkText, href) {
    console.log(`Footer Link Clicked: ${linkText} (${href})`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'footer_link_click', {
            'link_text': linkText,
            'link_url': href
        });
    }
}

// Track Social Link Click
function trackSocialLinkClick(platform) {
    console.log(`Social Link Clicked: ${platform}`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'social_link_click', {
            'platform': platform
        });
    }
}

// Track Emergency Click
function trackEmergencyClick(action) {
    console.log(`Emergency Action: ${action}`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'emergency_contact', {
            'action': action,
            'source': 'footer'
        });
    }
}

// Update Footer Year
function updateFooterYear() {
    const copyrightElement = document.querySelector('.footer-copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Access PathLab. All rights reserved.`;
    }
}

// Initialize year update
updateFooterYear();

// Newsletter Subscription (if needed)
function subscribeNewsletter(email) {
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    console.log(`Newsletter subscription: ${email}`);
    
    // Here you can integrate with your newsletter service
    alert('Thank you for subscribing to our newsletter!');
    
    // Track newsletter subscription
    if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_subscribe', {
            'email': email
        });
    }
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Get Footer Statistics
function getFooterStatistics() {
    const stats = {
        totalLinks: document.querySelectorAll('.footer-links a').length,
        socialLinks: document.querySelectorAll('.social-link').length,
        contactMethods: document.querySelectorAll('.contact-item').length,
        emergencyButtons: document.querySelectorAll('.emergency-btn').length
    };
    
    console.log('Footer Statistics:', stats);
    return stats;
}

// Add Footer Accessibility
function addFooterAccessibility() {
    // Add skip link for footer
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #14b8a6;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
addFooterAccessibility();

// Export functions for global use
window.makeCall = makeCall;
window.sendWhatsApp = sendWhatsApp;
window.subscribeNewsletter = subscribeNewsletter;
window.getFooterStatistics = getFooterStatistics;
window.trackFooterLinkClick = trackFooterLinkClick;
window.trackSocialLinkClick = trackSocialLinkClick;
window.trackEmergencyClick = trackEmergencyClick;
