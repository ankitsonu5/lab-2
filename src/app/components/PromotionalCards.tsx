'use client'

import React, { useState } from 'react'
import BookingModal from './BookingModal'

const PromotionalCards = () => {
  const promoCards = [
    {
      title: 'Senior citizen health checkup',
      subtitle: 'Comprehensive care for seniors',
      price: '₹299',
      originalPrice: '₹599',
      icon: 'fas fa-user-md',
      tint: 'gradient-card-yellow',
    },
    {
      title: 'Diabetes Screening Package',
      subtitle: 'Early detection & monitoring',
      price: '₹99',
      originalPrice: '₹199',
      icon: 'fas fa-stethoscope',
      tint: 'gradient-card-green',
    },
    {
      title: "Women's Special Health Checkup",
      subtitle: "Designed for women's health",
      discount: '10% OFF',
      icon: 'fas fa-female',
      tint: 'gradient-card-pink',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState('')

  const book = (title: string) => { setService(title); setIsOpen(true) }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoCards.map((card, index) => (
            <div key={index} className={`${card.tint} animated-gradient rounded-2xl p-[2px] min-h-[220px] relative overflow-hidden`}>
              <div className="glass-surface rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 flex items-center justify-center">
                  <i className={`${card.icon} text-8xl text-gray-700`}></i>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 leading-tight`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm text-gray-700 opacity-80`}>
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="mb-6">
                    {card.price ? (
                      <div className="flex items-baseline space-x-2">
                        <span className={`text-2xl font-bold text-gray-900`}>
                          {card.price}
                        </span>
                        {card.originalPrice && (
                          <span className={`text-sm text-gray-600 line-through`}>
                            {card.originalPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className={`text-lg font-bold text-gray-900`}>
                          {card.discount}
                        </span>
                      </div>
                    )}
                  </div>

                  <button onClick={() => book(card.title)} className="btn-glass px-6 py-3 rounded-full font-semibold group-hover:scale-105 transform duration-200">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} serviceName={service} />
    </>
  )
}

export default PromotionalCards
