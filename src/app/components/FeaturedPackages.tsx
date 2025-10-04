'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import BookingModal from './BookingModal'

type PackageCard = {
  id: string
  name: string
  category: string
  includes: string
  price: number
  mrp: number
  icon?: string
}

const CATEGORIES = [
  'All tests',
  'Full body Check up',
  'Diabetes',
  'Heart',
  'Cancer',
  'Vitamin',
  'Women Health',
  'Skin care',
  'Liver',
  'Kidney',
  'Stress',
] as const

const PACKAGES: PackageCard[] = [
  {
    id: 'full-1',
    name: 'Medicare Full body Health Checkup',
    category: 'Full body Check up',
    includes: 'Includes 12 Tests',
    price: 430,
    mrp: 800,
    icon: '🧪',
  },
  {
    id: 'full-2',
    name: 'Comprehensive full body checkup with Vitamin D & B12',
    category: 'Full body Check up',
    includes: 'Includes 11 Tests',
    price: 240,
    mrp: 380,
    icon: '🩺',
  },
  {
    id: 'women-1',
    name: "Women's Staying Strong Health Checkup",
    category: 'Women Health',
    includes: 'Includes 32 Tests',
    price: 300,
    mrp: 420,
    icon: '👩',
  },
  {
    id: 'diabetes-1',
    name: 'Medi care Diabetes Screening',
    category: 'Diabetes',
    includes: 'Includes 07 Tests',
    price: 364,
    mrp: 800,
    icon: '🩸',
  },
  {
    id: 'heart-1',
    name: 'Cardio Care Basic Panel',
    category: 'Heart',
    includes: 'Includes 15 Tests',
    price: 520,
    mrp: 760,
    icon: '❤️',
  },
  {
    id: 'cancer-1',
    name: 'Cancer Risk Screening (Markers)',
    category: 'Cancer',
    includes: 'Includes 08 Tests',
    price: 950,
    mrp: 1200,
    icon: '🎗️',
  },
]

const GRADIENTS = [
  'gradient-card-yellow',
  'gradient-card-orange',
  'gradient-card-pink',
  'gradient-card-purple',
  'gradient-card-blue',
  'gradient-card-green',
]

const FeaturedPackages = () => {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All tests')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const items = useMemo(
    () => (active === 'All tests' ? PACKAGES : PACKAGES.filter(p => p.category === active)),
    [active]
  )

  const scrollRef = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState({ width: 0, left: 0 })

  const updateThumb = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    if (scrollWidth === 0) return
    const visibleRatio = Math.min(1, clientWidth / scrollWidth)
    const width = visibleRatio * 100
    const left =
      scrollWidth <= clientWidth
        ? 0
        : (scrollLeft / (scrollWidth - clientWidth)) * (100 - width)
    setThumb({ width, left })
  }

  useEffect(() => {
    updateThumb()
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => updateThumb()
    el.addEventListener('scroll', onScroll)
    const onResize = () => updateThumb()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Featured Health
            <br className="hidden sm:block" />
            Check-up Packages
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto overflow-y-visible pb-2 -mx-1 pr-1">
          {CATEGORIES.map(cat => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`category-pill whitespace-nowrap rounded-full border px-4 py-2 text-sm shadow-sm transition-colors hover:border-gray-300 focus:outline-none focus:ring-0 ${
                  isActive
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div ref={scrollRef} className="mt-6 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {items.map((pkg, index) => {
            const discount = Math.max(0, Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100))
            const grad = GRADIENTS[index % GRADIENTS.length]
            return (
              <div key={pkg.id} className={`relative min-w-[280px] sm:min-w-[300px] lg:min-w-[340px] snap-start ${grad} animated-gradient rounded-2xl p-[2px]`}>
                <div className="flex h-full flex-col justify-between rounded-2xl card-glass p-6 shadow-sm transition hover:shadow-md hover:translate-y-[1px] glass-pulse">
                  {discount > 0 && (
                    <span className="absolute right-3 top-3 rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                      {discount}% Off
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl shadow-inner">
                      {pkg.icon || '🧪'}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-gray-900">{pkg.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{pkg.includes}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-semibold text-gray-900">₹{pkg.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-400 line-through">₹{pkg.mrp.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => { setSelectedService(pkg.name); setIsBookingOpen(true) }}
                      className="btn-glass px-5 py-2 text-sm font-semibold"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Scroll progress indicator */}
        <div className="relative mt-4 h-[2px] w-full rounded-full bg-gray-200">
          <div
            className="absolute top-0 h-full rounded-full bg-gray-900 transition-[left,width]"
            style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
          />
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} serviceName={selectedService} />
    </section>
  )
}

export default FeaturedPackages
