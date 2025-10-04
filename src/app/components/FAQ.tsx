"use client"
import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I start online consultation with doctors on Access PathLab?",
      answer: "You can start online consultation by booking an appointment through our website or mobile app. Select your preferred doctor, choose a time slot, and connect via video call for professional medical advice.",
      isHighlighted: true
    },
    {
      question: "Are your online doctors qualified?",
      answer: "Yes, all our doctors are highly qualified medical professionals with valid licenses and certifications. They have extensive experience in their respective specializations and undergo regular training updates.",
      isHighlighted: true
    },
    {
      question: "Is online doctor consultation safe and secured on Access PathLab?",
      answer: "Absolutely! We use end-to-end encryption for all consultations and follow strict HIPAA compliance guidelines. Your medical data is completely secure and confidential with us.",
      isHighlighted: true
    },
    {
      question: "What happens if I don't get a response from a doctor?",
      answer: "If you don't receive a response within the expected timeframe, our customer support team will immediately assist you. We guarantee doctor response within 15 minutes during business hours.",
      isHighlighted: true
    },
    {
      question: "What is the online doctor consultations?",
      answer: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.",
      isHighlighted: true
    },
    {
      question: "Can I do a free online doctor consultation on Access PathLab?",
      answer: "Yes, we offer free initial consultations for new patients. You can book a free 10-minute consultation with our qualified doctors to discuss your health concerns and get basic medical advice.",
      isHighlighted: true
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Got questions?
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to commonly asked questions about our services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-200 shadow-lg transform scale-[1.02]'
                    : faq.isHighlighted
                      ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 hover:from-teal-100 hover:to-cyan-100 hover:border-teal-200 hover:shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 text-left flex items-center justify-between transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-teal-100 to-cyan-100'
                      : faq.isHighlighted
                        ? 'hover:from-teal-100 hover:to-cyan-100'
                        : 'hover:bg-gray-100'
                  }`}
                >
                  <span className={`text-lg font-semibold pr-4 transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-teal-900'
                      : faq.isHighlighted
                        ? 'text-gray-900 group-hover:text-teal-800'
                        : 'text-gray-900 group-hover:text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <i
                      className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} transition-all duration-300 ${
                        openIndex === index
                          ? 'text-teal-700 transform rotate-180'
                          : faq.isHighlighted
                            ? 'text-teal-600 group-hover:text-teal-700'
                            : 'text-gray-500 group-hover:text-gray-600'
                      }`}
                    ></i>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-6 pb-5 transition-all duration-300 ${
                    openIndex === index ? 'bg-gradient-to-r from-teal-50 to-cyan-50' : ''
                  }`}>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      openIndex === index
                        ? 'text-teal-900'
                        : faq.isHighlighted
                          ? 'text-gray-800'
                          : 'text-gray-700'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="mb-4">
                <i className="fas fa-headset text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you 24/7
              </p>
              <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors group">
                <i className="fas fa-phone mr-2"></i>
                <span>Contact Support</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
