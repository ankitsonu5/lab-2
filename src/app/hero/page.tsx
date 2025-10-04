'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BookingModal from '../components/BookingModal'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const slides = [
    {
      title: "Family body checkup package",
      subtitle: "Now at ₹199",
      features: ["Full body checkup with cancer", "Free home sample pickup"],
      bgGradient: "bg-gradient-to-br from-teal-50 via-cyan-100 to-sky-200",
      familyImage: "/familyhealth-removebg-preview.png"
    },
    {
      title: "Complete Health Screening",
      subtitle: "Starting from ₹299",
      features: ["50+ Essential Tests", "Same day reports"],
      bgGradient: "bg-gradient-to-br from-fuchsia-50 via-purple-100 to-indigo-200",
      familyImage: "/newbnner2.png"
    },
    {
      title: "Senior Citizen Package",
      subtitle: "Special price ₹399",
      features: ["Comprehensive senior care", "Home visit available"],
      bgGradient: "bg-gradient-to-br from-amber-50 via-orange-100 to-rose-200",
      familyImage: "/newbnner3.png"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className={`relative ${slides[currentSlide].bgGradient} animated-gradient overflow-hidden transition-all duration-1000`}>
      {/* glossy shine overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[radial-gradient(700px_320px_at_0%_-10%,rgba(255,255,255,0.7),transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title}
                <br />
                <span className="text-gray-800">{slides[currentSlide].subtitle}</span>
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Book now
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress indicator */}
            <div className="flex space-x-2 pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-8 h-1 rounded transition-colors ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Family Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Family image */}
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-glass glass-pulse">
                <Image
                  src={slides[currentSlide].familyImage}
                  alt="Happy Family"
                  width={600}
                  height={500}
                  quality={100}
                  className="w-full h-full object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={slides[currentSlide].title}
      />
    </section>
  )
}

export default Hero