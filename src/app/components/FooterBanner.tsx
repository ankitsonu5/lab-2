'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

const FooterBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="w-full bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/footerbanner.webp"
            alt="Access PathLab - Your Trusted Healthcare Partner"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <div className="text-center text-white px-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Access PathLab
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Your Trusted Healthcare Partner
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg"
                >
                  Book Test Now
                </button>
                {/* <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 backdrop-blur-sm border border-white/30">
                  Download App
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Lab Test"
      />

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2025 Access PathLab</p>
          <p>Design & Developed by Sarthak Tech</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
