'use client'

import React, { useState } from 'react'
import BookingModal from './BookingModal'

const HealthConcerns = () => {
  const concerns = [
    { name: 'Heart', icon: 'fas fa-heart' },
    { name: 'Kidney', icon: 'fas fa-kidneys' },
    { name: 'Diabetes', icon: 'fas fa-tint' },
    { name: 'Thyroid', icon: 'fas fa-user-md' },
    { name: 'Liver', icon: 'fas fa-lungs' },
    { name: 'Bone Health', icon: 'fas fa-bone' },
  ]

  const gradients = [
    'gradient-card-red',
    'gradient-card-blue',
    'gradient-card-green',
    'gradient-card-purple',
    'gradient-card-orange',
    'gradient-card-yellow',
  ]


  const ConcernIcon = ({ name }: { name: string }) => {
    const cls = "w-8 h-8 mx-auto text-gray-800"
    switch (name) {
      case 'Heart':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.1 21.35l-1.1-1.01C5.14 15.28 2 12.36 2 8.99 2 6.42 4.42 4.5 7.1 4.5c1.54 0 3.04.74 3.99 1.9.95-1.16 2.45-1.9 3.99-1.9 2.68 0 5.01 1.92 5.01 4.49 0 3.37-3.14 6.29-8.9 11.35z"/>
          </svg>
        )
      case 'Kidney':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3C5 3 3 5 3 7.5 3 10 5 12 7.5 12c.6 0 1.1-.1 1.6-.3-.7 1.3-1.1 2.7-1.1 4.2 0 3 1.9 5.1 4 5.1.7 0 1.3-.6 1.3-1.3V5.2C13.3 3.9 12.4 3 11.2 3H7.5zM16.5 3c2.5 0 4.5 2 4.5 4.5S19 12 16.5 12c-.6 0-1.1-.1-1.6-.3.7 1.3 1.1 2.7 1.1 4.2 0 3-1.9 5.1-4 5.1-.7 0-1.3-.6-1.3-1.3V5.2C10.7 3.9 11.6 3 12.8 3h3.7z"/>
          </svg>
        )
      case 'Diabetes':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C9 7 6 9.5 6 13a6 6 0 0012 0c0-3.5-3-6-6-10z"/>
          </svg>
        )
      case 'Thyroid':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="7" r="3"/>
            <path d="M5 21a7 7 0 0114 0"/>
          </svg>
        )
      case 'Liver':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 8c-3 0-5-3-9-3S4 8 4 12s2 7 5 7c2.5 0 3-2 5-2s3 2 5 2c2 0 3-2 3-5s-1-6-2-6z"/>
          </svg>
        )
      case 'Bone Health':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 7c1-1 3-1 4 0s1 3 0 4l-5 5c-1 1-3 1-4 0s-1-3 0-4l5-5zM17 7c1-1 3-1 4 0s1 3 0 4l-5 5c-1 1-3 1-4 0s-1-3 0-4l5-5z"/>
          </svg>
        )
      default:
        return null
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const open = (name: string) => { setSelectedService(name); setIsModalOpen(true) }

  return (
    <>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Find Tests by Health Concern</h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">See All →</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {concerns.map((c, i) => {
              const grad = gradients[i % gradients.length]
              return (
                <div key={i} onClick={() => open(c.name)} className={`${grad} animated-gradient rounded-2xl p-[2px] cursor-pointer min-h-[120px]`}>
                  <div className="glass-surface rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300 group h-full flex flex-col items-center justify-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      <ConcernIcon name={c.name} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{c.name}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName={selectedService} />
    </>
  )
}

export default HealthConcerns
