'use client'

import React, { useState, useRef } from 'react'


const LabTestsBooking = () => {
  const tests = [
    { id: 'cbc', name: 'Complete Blood Count (CBC)', description: 'Comprehensive blood analysis', price: '₹299', originalPrice: '₹399', reportTime: 'Same Day', categories: ['All Tests', 'Popular', 'Immunity'] },
    { id: 'lipid', name: 'Lipid Profile', description: 'Cholesterol and triglycerides check', price: '₹399', originalPrice: '₹499', reportTime: 'Same Day', categories: ['All Tests', 'Heart', 'Popular'] },
    { id: 'lft', name: 'Liver Function Test (LFT)', description: 'Complete liver health assessment', price: '₹499', originalPrice: '₹599', reportTime: 'Same Day', categories: ['All Tests', 'Liver'] },
    { id: 'kft', name: 'Kidney Function Test (KFT)', description: 'Comprehensive kidney health check', price: '₹399', originalPrice: '₹499', reportTime: 'Same Day', categories: ['All Tests', 'Kidney'] },
    { id: 'thyroid', name: 'Thyroid Profile (T3, T4, TSH)', description: 'Complete thyroid function assessment', price: '₹599', originalPrice: '₹799', reportTime: 'Same Day', categories: ['All Tests', 'Thyroid'] },
    { id: 'hba1c', name: 'HbA1c (Glycated Hemoglobin)', description: '3-month average blood sugar', price: '₹349', originalPrice: '₹449', reportTime: 'Same Day', categories: ['All Tests', 'Diabetes', 'Popular'] },
    { id: 'fbs', name: 'Fasting Blood Sugar (FBS)', description: 'Blood glucose level after fasting', price: '₹149', originalPrice: '₹199', reportTime: 'Same Day', categories: ['All Tests', 'Diabetes'] },
    { id: 'tsh', name: 'TSH', description: 'Thyroid stimulating hormone', price: '₹199', originalPrice: '₹249', reportTime: 'Same Day', categories: ['All Tests', 'Thyroid'] },
    { id: 'vitd', name: 'Vitamin D (25-OH)', description: 'Vitamin D sufficiency status', price: '₹699', originalPrice: '₹899', reportTime: 'Next Day', categories: ['All Tests', 'Vitamins'] },
    { id: 'b12', name: 'Vitamin B12', description: 'Detect B12 deficiency', price: '₹499', originalPrice: '₹699', reportTime: 'Next Day', categories: ['All Tests', 'Vitamins'] },
    { id: 'ige', name: 'IgE Total (Allergy)', description: 'Overall allergic sensitization', price: '₹599', originalPrice: '₹799', reportTime: 'Next Day', categories: ['All Tests', 'Allergy'] },
    { id: 'psa', name: 'PSA (Prostate Specific Antigen)', description: 'Prostate cancer screening aid', price: '₹799', originalPrice: '₹999', reportTime: 'Next Day', categories: ['All Tests', 'Cancer'] },
    { id: 'crp', name: 'CRP (C-Reactive Protein)', description: 'Inflammation marker', price: '₹299', originalPrice: '₹399', reportTime: 'Same Day', categories: ['All Tests', 'Immunity'] },
    { id: 'hbsag', name: 'HBsAg (Hepatitis B Surface Antigen)', description: 'Hepatitis B infection screening', price: '₹349', originalPrice: '₹449', reportTime: 'Same Day', categories: ['All Tests', 'Liver'] },
    { id: 'urine', name: 'Urine Routine (R/M)', description: 'Basic urine health check', price: '₹149', originalPrice: '₹199', reportTime: 'Same Day', categories: ['All Tests', 'Kidney'] },
    { id: 'cardiac', name: 'Cardiac Risk Markers', description: 'LDL/HDL, ApoB/ApoA1, hs-CRP', price: '₹1099', originalPrice: '₹1299', reportTime: 'Next Day', categories: ['All Tests', 'Heart'] },
  ]

  const categories = [
    'All Tests',
    'Popular',
    'Heart',
    'Liver',
    'Kidney',
    'Diabetes',
    'Thyroid',
    'Vitamins',
    'Allergy',
    'Cancer',
    'Immunity',
  ]

  const gradients = [
    'gradient-card-blue',
    'gradient-card-yellow',
    'gradient-card-green',
    'gradient-card-orange',
    'gradient-card-purple',
  ]

  const [added, setAdded] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState('All Tests')
  const [toast, setToast] = useState<string>('')
  const addedCount = added.size

  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollByAmount = (dir: 'left' | 'right') => {
    const node = scrollerRef.current
    if (!node) return
    const amt = Math.min(900, node.clientWidth) * (dir === 'left' ? -1 : 1)
    node.scrollBy({ left: amt, behavior: 'smooth' })
  }

  const CategoryIcon = ({ name, active }: { name: string, active: boolean }) => {
    const cls = `w-4 h-4 ${active ? 'text-white' : 'text-gray-700'}`
    switch (name) {
      case 'All Tests':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="6"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        )
      case 'Popular':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        )
      case 'Heart':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.1 21.35l-1.1-1.01C5.14 15.28 2 12.36 2 8.99 2 6.42 4.42 4.5 7.1 4.5c1.54 0 3.04.74 3.99 1.9.95-1.16 2.45-1.9 3.99-1.9 2.68 0 5.01 1.92 5.01 4.49 0 3.37-3.14 6.29-8.9 11.35z"/>
          </svg>
        )
      case 'Liver':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 8c-3 0-5-3-9-3S4 8 4 12s2 7 5 7c2.5 0 3-2 5-2s3 2 5 2c2 0 3-2 3-5s-1-6-2-6z"/>
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
      case 'Vitamins':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7a5 5 0 017 7L10 18a5 5 0 01-7-7l4-4zM10 10l4 4"/>
          </svg>
        )
      case 'Allergy':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 5L20 9l-5 2.5L12 17l-3-5.5L4 9l5.5-2z"/>
          </svg>
        )
      case 'Cancer':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3c4 0 7 3 7 7 0 3-2 5-4 7l-3 4-3-4c-2-2-4-4-4-7 0-4 3-7 7-7z"/>
          </svg>
        )
      case 'Immunity':
        return (
          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        )
      default:
        return null
    }
  }



  const filtered = selectedCategory === 'All Tests'
    ? tests
    : tests.filter(t => t.categories?.includes(selectedCategory))

  const toggleAdd = (id: string, name: string) => {
    setAdded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    setToast(() => (added.has(id) ? '' : `${name} added`))
    if (!added.has(id)) setTimeout(() => setToast(''), 1400)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Book Lab Tests</h2>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm text-gray-600">{addedCount} tests added</span>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">See All →</button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-pill px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${selectedCategory === category ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <CategoryIcon name={category} active={selectedCategory === category} />
              {category}
            </button>
          ))}
        </div>

        {/* Tests Carousel */}
        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount('left')}
            className="hidden sm:flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow ring-1 ring-black/5 hover:bg-white"
          >
            ‹
          </button>

          <div ref={scrollerRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-1 scrollbar-thin">
            {filtered.map((test, index) => {
              const grad = gradients[index % gradients.length]
              const isAdded = added.has(test.id)
              return (
                <div key={test.id} className={`${grad} rounded-2xl p-[2px] snap-start min-w-[280px] sm:min-w-[320px]`}>
                  <div className="rounded-2xl p-4 bg-white/70 backdrop-blur-sm hover:shadow-lg transition">
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{test.name}</h3>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">{test.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-bold text-gray-900">{test.price}</span>
                        <span className="text-xs text-gray-500 line-through">{test.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => toggleAdd(test.id, test.name)}
                        className={`${isAdded ? 'bg-emerald-600 text-white' : 'btn-glass'} px-4 py-1.5 rounded-full text-sm font-semibold`}
                      >
                        {isAdded ? 'Added' : 'Add'}
                      </button>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-[11px] text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {test.reportTime}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        Free pickup
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount('right')}
            className="hidden sm:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow ring-1 ring-black/5 hover:bg-white"
          >
            ›
          </button>
        </div>


        {/* Toast */}
        {toast && (
          <div className="fixed top-20 right-6 z-50">
            <div className="glass-surface rounded-full px-4 py-2 shadow-md text-sm text-gray-800">
              ✅ {toast}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl overflow-hidden">
          <div className="relative p-8 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600"></div>
            <div className="relative text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Need help with booking your test?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">Our healthcare experts are available 24/7 to help you choose the right tests and packages for your health needs.</p>
              <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">📞 Call Expert</button>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default LabTestsBooking
