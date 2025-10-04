import React from 'react'

const Partners = () => {
  const partners = [
    {
      name: "GlaxoSmithKline",
      logo: "GSK",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      name: "AstraZeneca",
      logo: "AZ",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Novartis",
      logo: "NV",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "Johnson & Johnson",
      logo: "J&J",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      name: "Merck",
      logo: "MRK",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Pfizer",
      logo: "PFE",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600"
    },
    {
      name: "Sanofi",
      logo: "SNY",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ]

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Partners
            </h2>
            <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
              <span>SEE ALL</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                {/* Partner Logo Circle */}
                <div className={`w-16 h-16 ${partner.bgColor} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className={`${partner.textColor} font-bold text-sm`}>
                    {partner.logo}
                  </span>
                </div>
                
                {/* Partner Name */}
                <p className="text-xs text-gray-600 text-center font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
              <i className="fas fa-certificate text-blue-600"></i>
              <span className="text-blue-800 font-semibold">Trusted by 1000+ Healthcare Partners</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners
