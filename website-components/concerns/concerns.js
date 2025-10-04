// Concerns JavaScript - Access PathLab

// Global Variables
let selectedConcern = '';

// Initialize Concerns
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Concerns loaded successfully!');
    initializeConcerns();
});

// Initialize Concerns Functions
function initializeConcerns() {
    setupConcernCards();
    setupConcernAnimations();
    setupInfoButtons();
    animateConcerns();
}

// Setup Concern Cards
function setupConcernCards() {
    const concernCards = document.querySelectorAll('.concern-card');
    
    concernCards.forEach((card, index) => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click handlers
        card.addEventListener('click', function() {
            const concernName = this.querySelector('.concern-title')?.textContent || 'Health Concern';
            handleConcernClick(concernName);
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
    
    console.log(`${concernCards.length} concern cards initialized`);
}

// Handle Concern Click
function handleConcernClick(concernName) {
    selectedConcern = concernName;
    
    // Add click animation
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        clickedCard.style.transform = 'translateY(-12px) scale(1.02)';
        
        // Open booking modal
        if (typeof openBookingModal === 'function') {
            openBookingModal(concernName + ' Tests');
        } else {
            console.log('Booking modal function not available');
            showConcernInfo(concernName);
        }
    }, 150);
    
    // Track concern selection
    trackConcernSelection(concernName);
    
    console.log('Concern clicked:', concernName);
}

// Show Concern Info (fallback)
function showConcernInfo(concernName) {
    const concernInfo = getConcernDetails(concernName);
    
    alert(`${concernName} Tests\n\nRecommended Tests:\n${concernInfo.tests.join('\n')}\n\nCall +91 98765 43210 to book these tests.`);
}

// Setup Concern Animations
function setupConcernAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for concern cards
                if (entry.target.classList.contains('concern-card')) {
                    const cards = document.querySelectorAll('.concern-card');
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
    
    // Observe all concern elements
    const concernElements = document.querySelectorAll('.concern-card, .section-header, .concerns-info');
    concernElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup Info Buttons
function setupInfoButtons() {
    const infoButtons = document.querySelectorAll('.info-btn');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.toLowerCase();
            
            if (action.includes('consult')) {
                handleExpertConsultation();
            } else if (action.includes('call')) {
                makeCall();
            }
        });
    });
}

// Handle Expert Consultation
function handleExpertConsultation() {
    if (typeof openBookingModal === 'function') {
        openBookingModal('Expert Consultation');
    } else {
        alert('Expert Consultation\n\nOur healthcare experts will help you choose the right tests.\n\nCall +91 98765 43210 to schedule a consultation.');
    }
}

// Make Call Function
function makeCall() {
    window.location.href = 'tel:+919876543210';
    console.log('Phone call initiated from concerns');
}

// Animate Concerns on Load
function animateConcerns() {
    const concernsSection = document.querySelector('.concerns-section');
    if (!concernsSection) return;
    
    // Initial animation
    concernsSection.style.opacity = '0';
    concernsSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        concernsSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        concernsSection.style.opacity = '1';
        concernsSection.style.transform = 'translateY(0)';
    }, 200);
    
    // Animate section header
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        setTimeout(() => {
            sectionHeader.classList.add('fade-in-up');
        }, 400);
    }
    
    // Animate concern cards with stagger
    const concernCards = document.querySelectorAll('.concern-card');
    concernCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, 600 + (index * 100));
    });
}

// Get Concern Details
function getConcernDetails(concernName) {
    const concerns = {
        'Heart Health': {
            tests: ['ECG', 'Lipid Profile', 'Cardiac Enzymes', 'Blood Pressure Monitoring', 'Echocardiogram'],
            description: 'Comprehensive cardiac health assessment',
            price: '₹499',
            duration: '2-3 hours'
        },
        'Diabetes': {
            tests: ['HbA1c', 'Fasting Glucose', 'Random Glucose', 'Insulin Levels', 'Glucose Tolerance Test'],
            description: 'Complete diabetes monitoring and management',
            price: '₹299',
            duration: '1-2 hours'
        },
        'Kidney Health': {
            tests: ['Creatinine', 'BUN', 'Urine Analysis', 'Protein Levels', 'Electrolytes'],
            description: 'Kidney function and urinary system assessment',
            price: '₹399',
            duration: '1-2 hours'
        },
        'Liver Health': {
            tests: ['SGPT/ALT', 'SGOT/AST', 'Bilirubin', 'Alkaline Phosphatase', 'Protein Levels'],
            description: 'Liver function and hepatic health evaluation',
            price: '₹349',
            duration: '1-2 hours'
        },
        'Thyroid': {
            tests: ['TSH', 'T3', 'T4', 'Anti-TPO', 'Thyroglobulin'],
            description: 'Thyroid function and hormonal balance',
            price: '₹599',
            duration: '1-2 hours'
        },
        'Women\'s Health': {
            tests: ['Hormonal Profile', 'PCOS Panel', 'Pregnancy Tests', 'Breast Cancer Markers', 'Cervical Screening'],
            description: 'Specialized tests for women\'s health concerns',
            price: '₹799',
            duration: '2-3 hours'
        },
        'Bone Health': {
            tests: ['Vitamin D', 'Calcium', 'Phosphorus', 'Bone Density Scan', 'Parathyroid Hormone'],
            description: 'Bone density and calcium metabolism',
            price: '₹449',
            duration: '1-2 hours'
        },
        'Cancer Screening': {
            tests: ['PSA (Prostate)', 'CA 125 (Ovarian)', 'CEA (Colon)', 'AFP (Liver)', 'CA 19-9 (Pancreatic)'],
            description: 'Early detection and cancer marker tests',
            price: '₹899',
            duration: '2-3 hours'
        }
    };
    
    return concerns[concernName] || {
        tests: ['Comprehensive Tests', 'Expert Analysis', 'Detailed Reports'],
        description: 'Professional health assessment',
        price: 'Contact for pricing',
        duration: '1-3 hours'
    };
}

// Get Concern Recommendations
function getConcernRecommendations(symptoms = []) {
    let recommendations = [];
    
    if (symptoms.includes('chest pain') || symptoms.includes('palpitations')) {
        recommendations.push('Heart Health');
    }
    
    if (symptoms.includes('frequent urination') || symptoms.includes('excessive thirst')) {
        recommendations.push('Diabetes');
    }
    
    if (symptoms.includes('fatigue') || symptoms.includes('weight gain')) {
        recommendations.push('Thyroid');
    }
    
    if (symptoms.includes('joint pain') || symptoms.includes('bone pain')) {
        recommendations.push('Bone Health');
    }
    
    if (symptoms.includes('abdominal pain') || symptoms.includes('nausea')) {
        recommendations.push('Liver Health');
    }
    
    return recommendations;
}

// Track Concern Selection
function trackConcernSelection(concernName) {
    console.log(`Concern Selected: ${concernName}`);
    
    // Here you can integrate with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'concern_selected', {
            'concern_name': concernName,
            'concern_details': getConcernDetails(concernName)
        });
    }
}

// Search Concerns
function searchConcerns(query) {
    const concernCards = document.querySelectorAll('.concern-card');
    const searchTerm = query.toLowerCase();
    
    concernCards.forEach(card => {
        const title = card.querySelector('.concern-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.concern-description')?.textContent.toLowerCase() || '';
        const tests = Array.from(card.querySelectorAll('.concern-tests li')).map(li => li.textContent.toLowerCase()).join(' ');
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || tests.includes(searchTerm)) {
            card.style.display = 'block';
            card.classList.add('search-match');
        } else {
            card.style.display = 'none';
            card.classList.remove('search-match');
        }
    });
    
    console.log(`Search performed: ${query}`);
}

// Filter Concerns by Category
function filterConcerns(category) {
    const concernCards = document.querySelectorAll('.concern-card');
    
    concernCards.forEach(card => {
        const title = card.querySelector('.concern-title')?.textContent || '';
        
        if (category === 'all' || title.toLowerCase().includes(category.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Filter applied: ${category}`);
}

// Add CSS animations
function addConcernAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .search-match {
            border-color: #14b8a6 !important;
            box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.2) !important;
        }
        
        .concern-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .concern-card:focus {
            outline: 2px solid #14b8a6;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations
addConcernAnimations();

// Export functions for global use
window.handleConcernClick = handleConcernClick;
window.getConcernDetails = getConcernDetails;
window.getConcernRecommendations = getConcernRecommendations;
window.searchConcerns = searchConcerns;
window.filterConcerns = filterConcerns;
window.trackConcernSelection = trackConcernSelection;
window.makeCall = makeCall;
