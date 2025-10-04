// Service Cards JavaScript - Clean & Separate

document.addEventListener('DOMContentLoaded', function() {
    console.log('Service Cards loaded! 🏥');

    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const arrowButtons = document.querySelectorAll('.card-arrow-btn');

    // Service card data
    const serviceData = {
        'lab-tests': {
            name: 'Lab Tests',
            description: 'Book comprehensive lab tests with home sample pickup',
            price: '₹199',
            tests: ['Blood Test', 'Urine Test', 'Sugar Test', 'Cholesterol Test']
        },
        'health-checks': {
            name: 'Health Checks',
            description: 'Popular health checkup packages for complete wellness',
            price: '₹299',
            tests: ['Full Body Checkup', 'Heart Health', 'Liver Function', 'Kidney Function']
        },
        'xrays-mri': {
            name: 'X-rays & MRI',
            description: 'Advanced imaging services for accurate diagnosis',
            price: '₹399',
            tests: ['X-Ray', 'MRI Scan', 'CT Scan', 'Ultrasound']
        }
    };

    // Add click handlers to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if arrow button was clicked
            if (e.target.closest('.card-arrow-btn')) {
                return;
            }

            const serviceType = this.getAttribute('data-service');
            const service = serviceData[serviceType];
            
            if (service) {
                showServiceDetails(service);
            }
        });

        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            // You can add sound effect here if needed
            console.log(`Hovering over: ${this.getAttribute('data-service')}`);
        });
    });

    // Add click handlers to arrow buttons
    arrowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            
            const card = this.closest('.service-card');
            const serviceType = card.getAttribute('data-service');
            const service = serviceData[serviceType];
            
            if (service) {
                openBookingModal(service);
            }
        });
    });

    // Show service details function
    function showServiceDetails(service) {
        const modal = createServiceModal(service);
        document.body.appendChild(modal);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Open booking modal function
    function openBookingModal(service) {
        const bookingModal = createBookingModal(service);
        document.body.appendChild(bookingModal);
        
        // Show modal with animation
        setTimeout(() => {
            bookingModal.classList.add('show');
        }, 10);
    }

    // Create service details modal
    function createServiceModal(service) {
        const modal = document.createElement('div');
        modal.className = 'service-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${service.name}</h2>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>${service.description}</p>
                        <div class="service-price">Starting from ${service.price}</div>
                        <div class="service-tests">
                            <h4>Includes:</h4>
                            <ul>
                                ${service.tests.map(test => `<li>${test}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-secondary modal-close-btn">Close</button>
                        <button class="btn-primary book-now-btn">Book Now</button>
                    </div>
                </div>
            </div>
        `;

        // Add modal styles
        addModalStyles();

        // Add close handlers
        const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => closeModal(modal));
        });

        // Close on overlay click
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closeModal(modal);
            }
        });

        // Book now handler
        modal.querySelector('.book-now-btn').addEventListener('click', () => {
            closeModal(modal);
            openBookingModal(service);
        });

        return modal;
    }

    // Create booking modal
    function createBookingModal(service) {
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Book ${service.name}</h2>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="booking-form">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="date">Preferred Date</label>
                                <input type="date" id="date" name="date" required>
                            </div>
                            <div class="form-group">
                                <label for="time">Preferred Time</label>
                                <select id="time" name="time" required>
                                    <option value="">Select Time</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                    <option value="16:00">04:00 PM</option>
                                </select>
                            </div>
                            <div class="service-summary">
                                <h4>Service: ${service.name}</h4>
                                <p>Price: ${service.price}</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-secondary modal-close-btn">Cancel</button>
                        <button class="btn-primary submit-booking-btn">Confirm Booking</button>
                    </div>
                </div>
            </div>
        `;

        // Add close handlers
        const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => closeModal(modal));
        });

        // Submit booking handler
        modal.querySelector('.submit-booking-btn').addEventListener('click', () => {
            const form = modal.querySelector('.booking-form');
            if (form.checkValidity()) {
                submitBooking(form, service);
                closeModal(modal);
            } else {
                form.reportValidity();
            }
        });

        return modal;
    }

    // Close modal function
    function closeModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }

    // Submit booking function
    function submitBooking(form, service) {
        const formData = new FormData(form);
        const bookingData = {
            service: service.name,
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            date: formData.get('date'),
            time: formData.get('time'),
            price: service.price
        };

        console.log('Booking submitted:', bookingData);
        
        // Show success message
        alert(`Booking confirmed for ${service.name}!\nWe'll contact you soon at ${bookingData.phone}`);
        
        // Here you would typically send data to your backend
        // fetch('/api/bookings', { method: 'POST', body: JSON.stringify(bookingData) })
    }

    // Add modal styles dynamically
    function addModalStyles() {
        if (document.getElementById('modal-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .service-modal, .booking-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .service-modal.show, .booking-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                border-radius: 15px;
                max-width: 500px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                transform: translateY(30px);
                transition: transform 0.3s ease;
            }
            
            .service-modal.show .modal-content,
            .booking-modal.show .modal-content {
                transform: translateY(0);
            }
            
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-footer {
                padding: 20px;
                border-top: 1px solid #eee;
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }
            
            .btn-primary, .btn-secondary {
                padding: 10px 20px;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s;
            }
            
            .btn-primary {
                background: #007bff;
                color: white;
            }
            
            .btn-secondary {
                background: #6c757d;
                color: white;
            }
            
            .form-group {
                margin-bottom: 15px;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
            }
            
            .form-group input,
            .form-group select {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
            }
            
            .service-summary {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                margin-top: 15px;
            }
        `;
        
        document.head.appendChild(styles);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.service-modal, .booking-modal');
            modals.forEach(modal => {
                if (modal.classList.contains('show')) {
                    closeModal(modal);
                }
            });
        }
    });

    console.log('Service Cards JavaScript initialized! 🚀');
});
