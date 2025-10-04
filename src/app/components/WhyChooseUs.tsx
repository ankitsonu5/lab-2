import React from 'react'

const WhyChooseUs = () => {
  const features = [
    { title: '100% Safe & Hygienic', description: 'Experience hassle-free healthcare with online doctor consultations', icon: 'fas fa-shield-alt', tint: 'gradient-card-green' },
    { title: 'Home Sample Pick up', description: 'Experience hassle-free healthcare with online doctor consultations', icon: 'fas fa-home', tint: 'gradient-card-pink' },
    { title: 'View Reports Online', description: 'Experience hassle-free healthcare with online doctor consultations', icon: 'fas fa-file-medical-alt', tint: 'gradient-card-yellow' },
  ]

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose us</h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.tint} animated-gradient rounded-2xl p-[2px] text-center hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                <div className="glass-surface rounded-2xl p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className={`${feature.icon} text-3xl text-gray-800`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
