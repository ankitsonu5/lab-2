import React from 'react'

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review: "I had a great experience at this healthcare clinic. I was very satisfied with the doctor and staff, and the doctor was able to diagnose and treat my condition effectively.",
      avatar: "PS",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "Excellent service and very professional staff. The home collection service was prompt and the reports were delivered on time. Highly recommended!",
      avatar: "RK",
      date: "1 month ago"
    },
    {
      name: "Anita Patel",
      rating: 5,
      review: "Very convenient online booking system. The lab technician was professional and the entire process was smooth. Great value for money.",
      avatar: "AP",
      date: "3 weeks ago"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ))
  }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our doctors and clinics have earned
            <br />
            over 5,000+ reviews on Google!
          </h2>
          
          {/* Google Rating */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.8</span>
            <span className="text-gray-600">Average Google Rating (5,247 reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Logo and CTA */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <i className="fab fa-google text-2xl text-blue-500"></i>
            <span className="text-lg font-semibold text-gray-900">Google Reviews</span>
          </div>
          
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Read All Reviews on Google →
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default ReviewsSection
