// Banner JavaScript - Access PathLab

// Global Variables
let currentSlide = 0;
let totalSlides = 3;
let slideInterval;
let isAutoPlaying = true;

// Initialize Banner
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Banner loaded successfully!');
    initializeBanner();
});

// Initialize Banner Functions
function initializeBanner() {
    // Setup carousel
    setupCarousel();
    
    // Start auto-play
    startAutoPlay();
    
    // Setup touch/swipe support
    setupTouchSupport();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Animate banner on load
    animateBanner();
}

// Setup Carousel
function setupCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    totalSlides = slides.length;
    
    // Initialize first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
        if (indicators.length > 0) {
            indicators[0].classList.add('active');
        }
    }
    
    console.log(`Carousel initialized with ${totalSlides} slides`);
}

// Go to Specific Slide
function goToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= totalSlides) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active', 'prev'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add prev class to current slide for animation
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('prev');
    }
    
    // Update current slide
    currentSlide = slideIndex;
    
    // Add active class to new slide and indicator
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
    
    // Reset auto-play
    resetAutoPlay();
    
    console.log('Moved to slide:', currentSlide);
}

// Next Slide
function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
}

// Previous Slide
function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
}

// Start Auto-Play
function startAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    slideInterval = setInterval(() => {
        if (isAutoPlaying) {
            nextSlide();
        }
    }, 10000); // 5 seconds
    
    console.log('Auto-play started');
}

// Stop Auto-Play
function stopAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
    
    console.log('Auto-play stopped');
}

// Reset Auto-Play
function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Pause Auto-Play
function pauseAutoPlay() {
    isAutoPlaying = false;
}

// Resume Auto-Play
function resumeAutoPlay() {
    isAutoPlaying = true;
}

// Setup Touch Support
function setupTouchSupport() {
    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) return;
    
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;
    
    carousel.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        pauseAutoPlay();
    });
    
    carousel.addEventListener('touchmove', function(event) {
        event.preventDefault(); // Prevent scrolling
    });
    
    carousel.addEventListener('touchend', function(event) {
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Check if horizontal swipe is more significant than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                prevSlide(); // Swipe right
            } else {
                nextSlide(); // Swipe left
            }
        }
        
        resumeAutoPlay();
    });
    
    console.log('Touch support enabled');
}

// Setup Keyboard Navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
            case ' ': // Spacebar
                event.preventDefault();
                if (isAutoPlaying) {
                    pauseAutoPlay();
                } else {
                    resumeAutoPlay();
                }
                break;
        }
    });
    
    console.log('Keyboard navigation enabled');
}

// Animate Banner
function animateBanner() {
    const banner = document.querySelector('.banner-carousel');
    if (!banner) return;
    
    banner.style.opacity = '0';
    banner.style.transform = 'scale(0.95)';
    banner.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        banner.style.opacity = '1';
        banner.style.transform = 'scale(1)';
    }, 200);
    
    // Animate slide content
    setTimeout(() => {
        animateSlideContent();
    }, 500);
}

// Animate Slide Content
function animateSlideContent() {
    const activeSlide = document.querySelector('.carousel-slide.active');
    if (!activeSlide) return;
    
    const slideText = activeSlide.querySelector('.slide-text');
    const slideImage = activeSlide.querySelector('.slide-image');
    
    if (slideText) {
        slideText.style.opacity = '0';
        slideText.style.transform = 'translateX(-50px)';
        slideText.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            slideText.style.opacity = '1';
            slideText.style.transform = 'translateX(0)';
        }, 100);
    }
    
    if (slideImage) {
        slideImage.style.opacity = '0';
        slideImage.style.transform = 'translateX(50px)';
        slideImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            slideImage.style.opacity = '1';
            slideImage.style.transform = 'translateX(0)';
        }, 300);
    }
}

// Setup Hover Pause
function setupHoverPause() {
    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) return;
    
    carousel.addEventListener('mouseenter', pauseAutoPlay);
    carousel.addEventListener('mouseleave', resumeAutoPlay);
    
    console.log('Hover pause enabled');
}

// Setup Intersection Observer for Performance
function setupIntersectionObserver() {
    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resumeAutoPlay();
            } else {
                pauseAutoPlay();
            }
        });
    }, {
        threshold: 0.5
    });
    
    observer.observe(carousel);
    
    console.log('Intersection observer enabled');
}

// Get Current Slide Info
function getCurrentSlideInfo() {
    return {
        current: currentSlide,
        total: totalSlides,
        isAutoPlaying: isAutoPlaying
    };
}

// Update Slide Content Dynamically
function updateSlideContent(slideIndex, content) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slideIndex < 0 || slideIndex >= slides.length) return;
    
    const slide = slides[slideIndex];
    const title = slide.querySelector('.slide-title');
    const features = slide.querySelectorAll('.feature-text');
    
    if (title && content.title) {
        title.innerHTML = content.title;
    }
    
    if (features && content.features) {
        features.forEach((feature, index) => {
            if (content.features[index]) {
                feature.textContent = content.features[index];
            }
        });
    }
    
    console.log('Slide content updated for slide:', slideIndex);
}

// Add Slide Transition Effects
function addTransitionEffects() {
    const style = document.createElement('style');
    style.textContent = `
        .carousel-slide {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .carousel-slide.fade-in {
            animation: fadeIn 0.8s ease;
        }
        
        .carousel-slide.slide-in-right {
            animation: slideInRight 0.8s ease;
        }
        
        .carousel-slide.slide-in-left {
            animation: slideInLeft 0.8s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize additional features
setTimeout(() => {
    setupHoverPause();
    setupIntersectionObserver();
    addTransitionEffects();
}, 1000);

// Export functions for global use
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.getCurrentSlideInfo = getCurrentSlideInfo;
window.pauseAutoPlay = pauseAutoPlay;
window.resumeAutoPlay = resumeAutoPlay;
