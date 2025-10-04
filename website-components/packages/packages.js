// Packages JavaScript - Access PathLab

// Global Variables
let selectedPackage = '';

// Initialize Packages
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Packages loaded successfully!');
    initializePackages();
});

// Initialize Packages Functions
function initializePackages() {
    setupPackageCards();
    setupSpecialPackages();
    setupPackageAnimations();
    animatePackages();
}

// Setup Package Cards
function setupPackageCards() {
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach((card, index) => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click handlers
        card.addEventListener('click', function() {
            const packageName = this.querySelector('.package-title')?.textContent || 'Health Package';
            handlePackageClick(packageName);
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
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    console.log(`${packageCards.length} package cards initialized`);
}

// Handle Package Click
function handlePackageClick(packageName) {
    selectedPackage = packageName;
    
    // Add click animation
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        clickedCard.style.transform = 'translateY(-15px) scale(1.02)';
        
        // Open booking modal
        if (typeof openBookingModal === 'function') {
            openBookingModal(packageName);
        } else {
            console.log('Booking modal function not available');
            showPackageInfo(packageName);
        }
    }, 150);
    
    // Track package selection
    trackPackageSelection(packageName);
    
    console.log('Package clicked:', packageName);
}

// Show Package Info (fallback)
function showPackageInfo(packageName) {
    const packageInfo = getPackageDetails(packageName);
    
    alert(`${packageName}\n\nPrice: ${packageInfo.price}\nTests: ${packageInfo.tests}\n\nCall +91 98765 43210 to book this package.`);
}

// Setup Special Packages
function setupSpecialPackages() {
    const specialItems = document.querySelectorAll('.special-item');
    
    specialItems.forEach(item => {
        item.addEventListener('click', function() {
            const packageName = this.querySelector('.special-name')?.textContent || 'Special Package';
            handlePackageClick(packageName);
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        // Add keyboard support
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        
        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });
}

// Setup Package Animations
function setupPackageAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for package cards
                if (entry.target.classList.contains('package-card')) {
                    const cards = document.querySelectorAll('.package-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    
                    setTimeout(() => {
                        entry.target.classList.add('fade-in-up');
                    }, index * 150);
                }
                
                // Animate special items
                if (entry.target.classList.contains('special-item')) {
                    const items = document.querySelectorAll('.special-item');
                    const index = Array.from(items).indexOf(entry.target);
                    
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
    
    // Observe all package elements
    const packageElements = document.querySelectorAll('.package-card, .special-item, .section-header, .package-benefits');
    packageElements.forEach(element => {
        observer.observe(element);
    });
}

// Animate Packages on Load
function animatePackages() {
    const packagesSection = document.querySelector('.packages-section');
    if (!packagesSection) return;
    
    // Initial animation
    packagesSection.style.opacity = '0';
    packagesSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        packagesSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        packagesSection.style.opacity = '1';
        packagesSection.style.transform = 'translateY(0)';
    }, 200);
    
    // Animate section header
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        setTimeout(() => {
            sectionHeader.classList.add('fade-in-up');
        }, 400);
    }
    
    // Animate package cards with stagger
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, 600 + (index * 200));
    });
}

// Get Package Details
function getPackageDetails(packageName) {
    const packages = {
        'Basic Health Package': {
            price: '₹199',
            tests: '6 Essential Tests',
            description: 'Complete basic health screening',
            features: ['CBC', 'Blood Sugar', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid Profile']
        },
        'Comprehensive Health Package': {
            price: '₹399',
            tests: '12+ Tests',
            description: 'Comprehensive health assessment',
            features: ['All Basic Tests', 'Vitamin D & B12', 'HbA1c', 'Urine Analysis', 'ECG', 'Chest X-ray', 'Doctor Consultation']
        },
        'Executive Health Package': {
            price: '₹699',
            tests: '20+ Tests',
            description: 'Premium executive health checkup',
            features: ['All Comprehensive Tests', 'Cancer Markers', 'Cardiac Risk', 'Ultrasound', 'Stress Test', 'Specialist Consultation']
        },
        'Women Health Package': {
            price: '₹599',
            tests: '15+ Tests',
            description: 'Specialized women health screening',
            features: ['Gynecological Tests', 'Hormonal Profile', 'Breast Cancer Screening', 'Bone Health']
        },
        'Senior Citizen Package': {
            price: '₹799',
            tests: '18+ Tests',
            description: 'Comprehensive senior care package',
            features: ['Age-specific Tests', 'Cardiac Assessment', 'Bone Density', 'Cognitive Health']
        },
        'Diabetes Package': {
            price: '₹299',
            tests: '8 Tests',
            description: 'Diabetes monitoring and management',
            features: ['HbA1c', 'Fasting Glucose', 'Post-meal Glucose', 'Kidney Function', 'Eye Screening']
        },
        'Heart Health Package': {
            price: '₹499',
            tests: '10 Tests',
            description: 'Comprehensive cardiac health assessment',
            features: ['ECG', 'Echo', 'Lipid Profile', 'Cardiac Enzymes', 'Blood Pressure Monitoring']
        }
    };
    
    return packages[packageName] || {
        price: 'Contact for pricing',
        tests: 'Multiple Tests',
        description: 'Professional health package',
        features: ['Quality Tests', 'Expert Analysis', 'Detailed Reports']
    };
}

// Track Package Selection
function trackPackageSelection(packageName) {
    console.log(`Package Selected: ${packageName}`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'package_selected', {
            'package_name': packageName,
            'package_details': getPackageDetails(packageName)
        });
    }
}

// Compare Packages
function comparePackages(package1, package2) {
    const details1 = getPackageDetails(package1);
    const details2 = getPackageDetails(package2);
    
    console.log('Package Comparison:', {
        package1: { name: package1, ...details1 },
        package2: { name: package2, ...details2 }
    });
    
    return {
        package1: { name: package1, ...details1 },
        package2: { name: package2, ...details2 }
    };
}

// Get Popular Package
function getPopularPackage() {
    return 'Basic Health Package';
}

// Get Package Recommendations
function getPackageRecommendations(age, gender, conditions = []) {
    let recommendations = [];
    
    if (age < 30) {
        recommendations.push('Basic Health Package');
    } else if (age < 50) {
        recommendations.push('Comprehensive Health Package');
    } else {
        recommendations.push('Senior Citizen Package');
    }
    
    if (gender === 'female') {
        recommendations.push('Women Health Package');
    }
    
    if (conditions.includes('diabetes')) {
        recommendations.push('Diabetes Package');
    }
    
    if (conditions.includes('heart')) {
        recommendations.push('Heart Health Package');
    }
    
    return recommendations;
}

// Add CSS animations
function addPackageAnimations() {
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
        
        .package-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .package-card.fade-in-up {
            opacity: 1;
            transform: translateY(0);
        }
        
        .special-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        
        .special-item.fade-in-up {
            opacity: 1;
            transform: translateY(0);
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
addPackageAnimations();

// Export functions for global use
window.handlePackageClick = handlePackageClick;
window.getPackageDetails = getPackageDetails;
window.comparePackages = comparePackages;
window.getPopularPackage = getPopularPackage;
window.getPackageRecommendations = getPackageRecommendations;
window.trackPackageSelection = trackPackageSelection;
