// Header JavaScript Functions

// Global variables
// let selectedService = ''; // Unused variable

// Toggle dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Open booking modal
function openBookingModal(serviceName) {
    selectedService = serviceName;
    const modal = document.getElementById('bookingModal');
    const serviceSelect = document.getElementById('serviceSelect');
    
    // Set the selected service in the form
    serviceSelect.value = serviceName;
    
    // Show modal
    modal.classList.add('show');
    
    // Close dropdown
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.remove('show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Get form data
function getFormData() {
    const form = document.querySelector('.booking-form');
    // const formData = new FormData(form); // Unused variable
    
    return {
        name: form.querySelector('input[type="text"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        email: form.querySelector('input[type="email"]').value,
        service: form.querySelector('select').value,
        message: form.querySelector('textarea').value
    };
}

// Send WhatsApp message (first version - will be overridden by enhanced version below)
function sendWhatsAppBasic() {
    const data = getFormData();

    const message = `Hi! I want to book ${data.service}.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Message: ${data.message}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Make phone call
function makeCall() {
    window.location.href = 'tel:+919876543210';
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('bookingModal');
    const modalContent = document.querySelector('.modal-content');
    
    if (modal.classList.contains('show') && !modalContent.contains(event.target)) {
        closeBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookingModal();
        
        // Also close dropdown
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.classList.remove('show');
    }
});

// Form validation
function validateForm() {
    const data = getFormData();
    
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
    
    return true;
}

// Enhanced WhatsApp function with validation
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
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Access PathLab Header loaded successfully!');
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation
    const header = document.querySelector('.header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});

// Search functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        // You can implement search logic here
        console.log('Searching for:', searchTerm);
        
        // For now, just open booking modal with "Lab Tests"
        openBookingModal('Lab Tests');
    }
}

// Add search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});

// Mobile menu toggle (for future mobile optimization)
function toggleMobileMenu() {
    const navSection = document.querySelector('.nav-section');
    navSection.classList.toggle('mobile-open');
}

// Utility function to format phone number
function formatPhoneNumber(phone) {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Add +91 if not present
    if (cleaned.length === 10) {
        return '+91' + cleaned;
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
        return '+' + cleaned;
    }
    
    return phone;
}

// Auto-format phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('input[type="tel"]');
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            this.value = formatPhoneNumber(this.value);
        });
    }
});
