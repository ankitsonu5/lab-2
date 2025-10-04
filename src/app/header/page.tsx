'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import BookingModal from '../components/BookingModal'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [query, setQuery] = useState('')

  // Lightweight catalog for search suggestions (top ~12 tests)
  const testsCatalog = [
    'Complete Blood Count (CBC)',
    'Lipid Profile',
    'Liver Function Test (LFT)',
    'Kidney Function Test (KFT)',
    'Thyroid Profile (T3, T4, TSH)',
    'HbA1c (Glycated Hemoglobin)',
    'Fasting Blood Sugar (FBS)',
    'TSH',
    'Vitamin D (25-OH)',
    'Vitamin B12',
    'IgE Total (Allergy)',
    'PSA (Prostate Specific Antigen)',
    'CRP (C-Reactive Protein)',
    'HBsAg (Hepatitis B Surface Antigen)',
    'Urine Routine (R/M)',
    'Cardiac Risk Markers'
  ]

  const filteredTests = query.length > 1
    ? testsCatalog.filter(n => n.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : []

  const openFromSearch = (name: string) => {
    setSelectedService(name)
    setIsBookingModalOpen(true)
    setIsDropdownOpen(false)
  }


  const healthcareServices = [
    { name: "Lab Tests", icon: "fas fa-vial", color: "text-blue-500" },
    { name: "Health Checkups", icon: "fas fa-heart", color: "text-red-500" },
    { name: "X-rays & Scans", icon: "fas fa-x-ray", color: "text-purple-500" },
    { name: "MRI Scans", icon: "fas fa-brain", color: "text-green-500" },
    { name: "Blood Tests", icon: "fas fa-tint", color: "text-red-600" },
    { name: "Urine Tests", icon: "fas fa-flask", color: "text-yellow-500" },
    { name: "ECG", icon: "fas fa-heartbeat", color: "text-pink-500" },
    { name: "Home Collection", icon: "fas fa-home", color: "text-orange-500" }
  ]

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <header className="relative z-50 animated-gradient bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-surface rounded-2xl mt-2 mb-2 px-4 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/access-removebg-preview.png"
                  alt="Access PathLab"
                  width={300}
                  height={200}
                  className="h-20 w-auto sm:h-16 lg:h-20"
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search h-5 w-5 text-gray-400"></i>
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filteredTests[0]) {
                      openFromSearch(filteredTests[0])
                    }
                  }}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  placeholder="Lab Tests, Scans & Health Checkup Packages"
                />

                {filteredTests.length > 0 && (
                  <div className="absolute left-0 right-0 mt-2 glass-surface rounded-xl shadow-lg border border-transparent z-50">
                    <ul className="py-2">
                      {filteredTests.map((name) => (
                        <li key={name}>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center gap-2"
                            onClick={() => openFromSearch(name)}
                          >
                            <i className="fas fa-vial text-blue-500"></i>
                            <span className="text-sm text-gray-700">{name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              {/* Healthcare Services Dropdown */}
              <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-0 active:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Healthcare Services
                  <i className="fas fa-chevron-down ml-1 text-sm"></i>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-surface rounded-xl shadow-lg border border-transparent z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Services</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {healthcareServices.map((service, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedService(service.name)
                              setIsBookingModalOpen(true)
                              setIsDropdownOpen(false)
                            }}
                            className="flex items-center space-x-2 p-2 rounded-lg glass-surface hover:brightness-105 transition-colors text-left"
                          >
                            <i className={`${service.icon} ${service.color} text-lg`}></i>
                            <span className="text-sm text-gray-700">{service.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Offers */}
              <div className="flex items-center">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  🎯 Offers
                </span>
              </div>

              {/* Login */}
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  )
}

export default Header