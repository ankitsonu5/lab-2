'use client'

import React, { useState } from 'react'
import BookingModal from './BookingModal'

const HealthTestOptions = () => {
  const [open, setOpen] = useState(false)
  const [service, setService] = useState('')

  const book = (name: string) => { setService(name); setOpen(true) }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Health Test at Home Card */}
            <div className="gradient-card-green animated-gradient rounded-3xl p-[2px] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="glass-surface rounded-3xl p-8 relative">
                {/* Badge */}
                <div className="inline-flex items-center bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <i className="fas fa-home mr-2"></i>
                  Sample Collection
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Health Test at<br />
                    your home
                  </h3>

                  <button onClick={() => book('Health Test at Home')} className="inline-flex items-center btn-glass px-6 py-3 rounded-full font-semibold group">
                    <span>Book Appointment</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>

                {/* Medical Illustration */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-vial text-6xl text-teal-600/60"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Lab Card */}
            <div className="gradient-card-yellow animated-gradient rounded-3xl p-[2px] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="glass-surface rounded-3xl p-8 relative">
                {/* Badge */}
                <div className="inline-flex items-center bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <i className="fas fa-hospital mr-2"></i>
                  Lab Test
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Visit a lab<br />
                    near you
                  </h3>

                  <button onClick={() => book('Visit Lab')} className="inline-flex items-center btn-glass px-6 py-3 rounded-full font-semibold group">
                    <span>Book Appointment</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>

                {/* Medical Illustration */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-md text-6xl text-yellow-600/60"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingModal isOpen={open} onClose={() => setOpen(false)} serviceName={service} />
    </>
  )
}

export default HealthTestOptions
