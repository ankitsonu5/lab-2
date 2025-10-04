// Header JavaScript - Access PathLab

// Global Variables
let selectedService = '';

// Initialize Header
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Header loaded successfully!');
    initializeHeader();
});

// Initialize Header Functions
function initializeHeader() {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add header animation
    animateHeader();
    
    // Setup search functionality
    setupSearch();
    
    // Setup phone number formatting
    setupPhoneFormatting();
    
    // Close dropdowns when clicking outside
    setupOutsideClickHandlers();
}

// Header Animation
function animateHeader() {
    const header = document.querySelector('.pathlab-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Toggle Services Dropdown
function toggleServicesDropdown() {
    const dropdown = document.getElementById('servicesDropdown');
    const trigger = document.querySelector('.dropdown-trigger');
    
    if (dropdown && trigger) {
        const isOpen = dropdown.classList.contains('show');
        
        if (isOpen) {
            dropdown.classList.remove('show');
            trigger.classList.remove('active');
        } else {
            dropdown.classList.add('show');
            trigger.classList.add('active');
        }
    }
}

// Close Services Dropdown
function closeServicesDropdown() {
    const dropdown = document.getElementById('servicesDropdown');
    const trigger = document.querySelector('.dropdown-trigger');
    
    if (dropdown && trigger) {
        dropdown.classList.remove('show');
        trigger.classList.remove('active');
    }
}

// Open Booking Modal
function openBookingModal(serviceName) {
    selectedService = serviceName || 'General Service';
    const modal = document.getElementById('bookingModal');
    const serviceSelect = document.getElementById('serviceSelect');
    
    if (modal) {
        // Set selected service in form
        if (serviceSelect) {
            serviceSelect.value = selectedService;
        }
        
        // Show modal
        modal.classList.add('show');
        
        // Close dropdown
        closeServicesDropdown();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        console.log('Booking modal opened for:', selectedService);
    }
}

// Close Booking Modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    
    if (modal) {
        modal.classList.remove('show');
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
        
        console.log('Booking modal closed');
    }
}

// Get Form Data
function getFormData() {
    const form = document.getElementById('bookingForm');
    if (!form) return null;
    
    const formData = new FormData(form);
    
    return {
        name: formData.get('name') || '',
        phone: formData.get('phone') || '',
        email: formData.get('email') || '',
        service: formData.get('service') || selectedService,
        message: formData.get('message') || ''
    };
}

// Validate Form
function validateForm() {
    const data = getFormData();
    
    if (!data) {
        alert('Form not found');
        return false;
    }
    
    if (!data.name.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!data.phone.trim()) {
        alert('Please enter your phone number');
        return false;
    }
    
    if (!data.service) {
        alert('Please select a service');
        return false;
    }
    
    // Validate phone number format
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    return true;
}

// Send WhatsApp Message
function sendWhatsApp() {
    if (!validateForm()) {
        return;
    }
    
    const data = getFormData();
    
    const message = `Hi! I want to book ${data.service}.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Message: ${data.message || 'No additional message'}

Please contact me to schedule the appointment.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    console.log('WhatsApp message sent for:', data.service);
}

// Make Phone Call
function makeCall() {
    window.location.href = 'tel:+919876543210';
    console.log('Phone call initiated');
}

// Handle Search
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        console.log('Searching for:', searchTerm);
        
        // For now, open booking modal with Lab Tests
        openBookingModal('Lab Tests');
        
        // Clear search input
        searchInput.value = '';
    } else {
        alert('Please enter a search term');
    }
}

// Setup Search Functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
}

// Format Phone Number
function formatPhoneNumber(phone) {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Add +91 if not present
    if (cleaned.length === 10) {
        return '+91 ' + cleaned;
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
        return '+' + cleaned.substring(0, 2) + ' ' + cleaned.substring(2);
    }
    
    return phone;
}

// Setup Phone Number Formatting
function setupPhoneFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            this.value = formatPhoneNumber(this.value);
        });
    });
}

// Setup Outside Click Handlers
function setupOutsideClickHandlers() {
    document.addEventListener('click', function(event) {
        // Close dropdown when clicking outside
        const dropdown = document.querySelector('.services-dropdown');
        const dropdownMenu = document.getElementById('servicesDropdown');
        
        if (dropdown && dropdownMenu && !dropdown.contains(event.target)) {
            closeServicesDropdown();
        }
        
        // Close modal when clicking outside
        const modal = document.getElementById('bookingModal');
        const modalContent = document.querySelector('.booking-modal');
        
        if (modal && modalContent && modal.classList.contains('show') && !modalContent.contains(event.target)) {
            closeBookingModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeBookingModal();
            closeServicesDropdown();
        }
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Simple notification system
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.toggleServicesDropdown = toggleServicesDropdown;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.sendWhatsApp = sendWhatsApp;
window.makeCall = makeCall;
window.handleSearch = handleSearch;
