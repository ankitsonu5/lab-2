'use client'
import React, { useState } from 'react'
import BookingModal from './BookingModal'

const ServiceCards = () => {
  const services = [
    { title: 'Book', subtitle: 'Lab Tests', icon: 'fas fa-vial' },
    { title: 'Popular', subtitle: 'Health Checks', icon: 'fas fa-stethoscope' },
    { title: 'Pregnancy', subtitle: 'Tests & Care', icon: 'fas fa-baby' },
  ]

  const gradients = ['gradient-card-yellow', 'gradient-card-orange', 'gradient-card-pink']

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('Lab Tests')

  const openModal = (name: string) => {
    setSelectedService(name)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="py-12 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const gradient = gradients[index % gradients.length]
              const label = `${service.title} ${service.subtitle}`
              return (
                <div
                  key={index}
                  onClick={() => openModal(label)}
                  className={`${gradient} animated-gradient rounded-3xl p-[2px] h-36 md:h-44 lg:h-48 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                >
                  <div className="glass-surface rounded-3xl h-full w-full p-6">
                    <div className="relative z-10 flex justify-between items-center h-full">
                      {/* Text Section */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-1">
                          {service.title}
                        </h3>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                          {service.subtitle}
                        </h4>
                      </div>

                      {/* Icon Section */}
                      <div className="flex items-center justify-center">
                        <i className={`${service.icon} text-5xl text-gray-800 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  )
}

export default ServiceCards
