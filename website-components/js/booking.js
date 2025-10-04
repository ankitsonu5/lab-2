// Booking JavaScript - Access PathLab

// Global Variables
let selectedService = '';
let formData = {};

// Contact Information
const CONTACT_INFO = {
    phone: '+919876543210',
    whatsapp: '919876543210',
    email: 'info@accesspathlab.com',
    address: 'Access PathLab, Medical Center, City'
};

// Initialize Booking
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Booking loaded successfully!');
    initializeBooking();
});

// Initialize Booking Functions
function initializeBooking() {
    setupFormValidation();
    setupFormSubmission();
    setupModalAnimations();
    setupFormAutoSave();
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
        
        // Show modal with animation
        modal.classList.add('show');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input[name="name"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
        
        // Track modal opening
        trackEvent('modal_opened', { service: selectedService });
        
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
        
        // Clear form if needed
        // clearForm();
        
        console.log('Booking modal closed');
    }
}

// Get Form Data
function getFormData() {
    const form = document.getElementById('bookingForm');
    if (!form) return null;
    
    const formData = new FormData(form);
    
    return {
        name: formData.get('name')?.trim() || '',
        phone: formData.get('phone')?.trim() || '',
        email: formData.get('email')?.trim() || '',
        service: formData.get('service') || selectedService,
        message: formData.get('message')?.trim() || ''
    };
}

// Validate Form
function validateForm() {
    const data = getFormData();
    
    if (!data) {
        showNotification('Form not found', 'error');
        return false;
    }
    
    // Clear previous errors
    clearFormErrors();
    
    let isValid = true;
    
    // Validate name
    if (!data.name) {
        showFieldError('name', 'Name is required');
        isValid = false;
    } else if (data.name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate phone
    if (!data.phone) {
        showFieldError('phone', 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(data.phone)) {
        showFieldError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate email (optional but if provided, must be valid)
    if (data.email && !isValidEmail(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate service
    if (!data.service) {
        showFieldError('service', 'Please select a service');
        isValid = false;
    }
    
    return isValid;
}

// Validate Phone Number
function isValidPhone(phone) {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if it's a valid Indian mobile number
    return cleaned.length >= 10 && cleaned.length <= 13;
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Field Error
function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Remove existing error
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error styling
    field.style.borderColor = '#ef4444';
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear Form Errors
function clearFormErrors() {
    const errors = document.querySelectorAll('.field-error');
    errors.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('#bookingForm input, #bookingForm select, #bookingForm textarea');
    fields.forEach(field => {
        field.style.borderColor = '#e5e7eb';
    });
}

// Format Phone Number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
        return '+91 ' + cleaned.replace(/(\d{5})(\d{5})/, '$1 $2');
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
        return '+' + cleaned.replace(/(\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
    }
    
    return phone;
}

// Send WhatsApp Message
function sendWhatsApp() {
    if (!validateForm()) {
        return;
    }
    
    const data = getFormData();
    
    const message = `🏥 *Access PathLab - Service Booking*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email || 'Not provided'}
🔬 *Service:* ${data.service}
💬 *Message:* ${data.message || 'No additional message'}

Please contact me to schedule the appointment. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Track event
    trackEvent('whatsapp_sent', { service: data.service });
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('WhatsApp message prepared! Please send it.', 'success');
    
    // Close modal after delay
    setTimeout(() => {
        closeBookingModal();
    }, 2000);
    
    console.log('WhatsApp message sent for:', data.service);
}

// Make Phone Call
function makeCall() {
    // Track event
    trackEvent('call_initiated', { service: selectedService });
    
    // Make call
    window.location.href = `tel:${CONTACT_INFO.phone}`;
    
    // Show notification
    showNotification('Calling Access PathLab...', 'info');
    
    console.log('Phone call initiated');
}

// Setup Form Validation
function setupFormValidation() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    // Real-time validation
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            // Clear error on input
            const error = this.parentNode.querySelector('.field-error');
            if (error) {
                error.remove();
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
    
    // Phone number formatting
    const phoneField = form.querySelector('[name="phone"]');
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            this.value = formatPhoneNumber(this.value);
        });
    }
}

// Validate Individual Field
function validateField(field) {
    const value = field.value.trim();
    const name = field.name;
    
    switch(name) {
        case 'name':
            if (!value) {
                showFieldError(name, 'Name is required');
            } else if (value.length < 2) {
                showFieldError(name, 'Name must be at least 2 characters');
            }
            break;
            
        case 'phone':
            if (!value) {
                showFieldError(name, 'Phone number is required');
            } else if (!isValidPhone(value)) {
                showFieldError(name, 'Please enter a valid phone number');
            }
            break;
            
        case 'email':
            if (value && !isValidEmail(value)) {
                showFieldError(name, 'Please enter a valid email address');
            }
            break;
            
        case 'service':
            if (!value) {
                showFieldError(name, 'Please select a service');
            }
            break;
    }
}

// Setup Form Submission
function setupFormSubmission() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // Default to WhatsApp
            sendWhatsApp();
        }
    });
}

// Setup Modal Animations
function setupModalAnimations() {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    
    // Close on overlay click
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeBookingModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeBookingModal();
        }
    });
}

// Setup Form Auto-Save
function setupFormAutoSave() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    const fields = form.querySelectorAll('input, select, textarea');
    
    fields.forEach(field => {
        field.addEventListener('input', function() {
            saveFormData();
        });
    });
    
    // Load saved data
    loadFormData();
}

// Save Form Data to Local Storage
function saveFormData() {
    const data = getFormData();
    if (data) {
        localStorage.setItem('pathlab_booking_form', JSON.stringify(data));
    }
}

// Load Form Data from Local Storage
function loadFormData() {
    const savedData = localStorage.getItem('pathlab_booking_form');
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        const form = document.getElementById('bookingForm');
        if (!form) return;
        
        // Fill form fields
        Object.keys(data).forEach(key => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field && data[key]) {
                field.value = data[key];
            }
        });
        
    } catch (error) {
        console.error('Error loading saved form data:', error);
    }
}

// Clear Form
function clearForm() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
        clearFormErrors();
        localStorage.removeItem('pathlab_booking_form');
    }
}

// Track Events (Analytics)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    
    // Here you can integrate with analytics services like Google Analytics
    // gtag('event', eventName, properties);
}

// Show Notification
function showNotification(message, type = 'info') {
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
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
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
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.sendWhatsApp = sendWhatsApp;
window.makeCall = makeCall;
window.getFormData = getFormData;
window.validateForm = validateForm;
