'use client'
import React, { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceName = "Lab Test" }) => {
  const [bookingFor, setBookingFor] = useState<'self' | 'other'>('self')
  const [formData, setFormData] = useState({
    // Booker (your) details
    name: '',
    phone: '',
    email: '',

    // If booking for self
    age: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',

    // If booking for someone else
    relation: '',
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientAddress: '',
    patientCity: '',
    patientPincode: '',

    // Common
    service: serviceName,
    appointmentDate: '',
    appointmentTime: '',
    homeCollection: false,
    message: ''
  })


  // Consistent glassy input styles
  const inputClass = "w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-transparent shadow-sm transition-colors";
  const selectClass = "w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-transparent shadow-sm transition-colors";
  const textareaClass = "w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/70 focus:border-transparent shadow-sm transition-colors resize-none";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  const handleWhatsAppClick = () => {
    const bookingHeader = bookingFor === 'self' ? 'Myself' : 'Someone else'

    const detailsBlock = bookingFor === 'self'
      ? `👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🎂 *Age:* ${formData.age}
⚧ *Gender:* ${formData.gender}
🏠 *Address:* ${formData.address}, ${formData.city} - ${formData.pincode}`
      : `👤 *Booker:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
👥 *Relation:* ${formData.relation}
🧑‍⚕️ *Patient:* ${formData.patientName}
🎂 *Patient Age:* ${formData.patientAge}
⚧ *Patient Gender:* ${formData.patientGender}
🏠 *Patient Address:* ${formData.patientAddress}, ${formData.patientCity} - ${formData.patientPincode}`

    const message = `🏥 *Access PathLab - Appointment Booking*

👥 *Booking For:* ${bookingHeader}
📋 *Service:* ${formData.service}
${detailsBlock}
📅 *Appointment Date:* ${formData.appointmentDate}
⏰ *Appointment Time:* ${formData.appointmentTime}
🏠 *Home Collection:* ${formData.homeCollection ? 'Yes' : 'No'}
💬 *Message:* ${formData.message}

Please confirm my appointment. Thank you!`

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.location.href = 'tel:+919876543210'
  }

  if (!isOpen) return null

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Background Blur Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative rounded-2xl max-w-lg w-full max-h-[95vh] overflow-y-auto transform transition-all duration-300 scale-100 p-[2px] bg-gradient-to-br from-teal-200/60 via-sky-200/50 to-indigo-300/60 shadow-2xl">
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Header */}
        <div className="text-center p-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Appointment</h2>
          <p className="text-gray-600">Fill in your details for lab test booking</p>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          <form className="space-y-4">
            {/* Who is this for? */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-lg overflow-hidden border border-gray-200">
                <button
                  type="button"
                  onClick={() => setBookingFor('self')}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${bookingFor === 'self' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  Myself
                </button>
                <button
                  type="button"
                  onClick={() => setBookingFor('other')}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${bookingFor === 'other' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  Someone else
                </button>
              </div>
            </div>

            {/* Your contact details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Conditional sections */}
            {bookingFor === 'self' ? (
              <>
                {/* Age & Gender Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="25"
                      min="1"
                      max="120"
                      required={bookingFor === 'self'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={selectClass}
                      required={bookingFor === 'self'}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Enter your complete address"
                    required={bookingFor === 'self'}
                  />
                </div>

                {/* City & Pincode Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="City"
                      required={bookingFor === 'self'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="110001"
                      pattern="[0-9]{6}"
                      required={bookingFor === 'self'}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Relation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relation with patient <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="relation"
                    value={formData.relation}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="e.g., Father, Mother, Spouse, Son"
                    required={bookingFor === 'other'}
                  />
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Enter patient full name"
                    required={bookingFor === 'other'}
                  />
                </div>

                {/* Patient Age & Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="60"
                      min="1"
                      max="120"
                      required={bookingFor === 'other'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleInputChange}
                      className={selectClass}
                      required={bookingFor === 'other'}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Patient Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="patientAddress"
                    value={formData.patientAddress}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Enter patient address (pickup location)"
                    required={bookingFor === 'other'}
                  />
                </div>

                {/* Patient City & Pincode */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="patientCity"
                      value={formData.patientCity}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="City"
                      required={bookingFor === 'other'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="patientPincode"
                      value={formData.patientPincode}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="560001"
                      pattern="[0-9]{6}"
                      required={bookingFor === 'other'}
                    />
                  </div>
                </div>
              </>
            )}


            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={selectClass}
                required
              >
                <option value="Lab Tests">Lab Tests</option>
                <option value="Health Checkups">Health Checkups</option>
                <option value="Pregnancy Tests & Care">Pregnancy Tests & Care</option>
                <option value="MRI Scans">MRI Scans</option>
                <option value="Blood Tests">Blood Tests</option>
                <option value="Urine Tests">Urine Tests</option>
                <option value="ECG">ECG</option>
                <option value="Home Collection">Home Collection</option>
                <option value="Online Consultation">Online Consultation</option>
                <option value="Reports Online">Reports Online</option>
              </select>
            </div>

            {/* Appointment Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className={inputClass}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <select
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  className={selectClass}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>
            </div>

            {/* Home Collection Checkbox */}
            <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <input
                type="checkbox"
                name="homeCollection"
                checked={formData.homeCollection}
                onChange={handleInputChange}
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <label className="text-sm font-medium text-gray-700">
                <span className="text-teal-600">🏠 Home Collection</span> - Free service (We&apos;ll collect samples from {bookingFor === 'self' ? 'your home' : 'the patient\'s address'})
              </label>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={textareaClass}
                placeholder="Any specific requirements or questions..."
              />
            </div>
          </form>

          {/* Contact Options */}
          <div className="mt-6">
            <p className="text-center text-gray-700 font-medium mb-4">Choose how to contact us:</p>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-300 mb-3 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 backdrop-blur-sm"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Send via WhatsApp</span>
            </button>

            {/* Call Button */}
            <button
              onClick={handleCallClick}
              className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-300 mb-4 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30 backdrop-blur-sm"
            >
              <i className="fas fa-phone text-lg"></i>
              <span>Call Now</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Close
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-center space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-phone text-green-500"></i>
                <span><strong>Call:</strong> +91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-clock text-blue-500"></i>
                <span><strong>Timing:</strong> 24/7 Available</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-home text-orange-500"></i>
                <span><strong>Home Collection:</strong> Free</span>
              </div>
            </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default BookingModal
