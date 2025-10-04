import React from 'react'

const AppDownload = () => {
  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Download App Card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              
              {/* App Icons Illustration */}
              <div className="flex items-center justify-center mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {/* App Icon 1 */}
                  <div className="w-16 h-16 bg-pink-200 rounded-xl flex items-center justify-center">
                    <i className="fas fa-heartbeat text-2xl text-pink-600"></i>
                  </div>
                  {/* App Icon 2 */}
                  <div className="w-16 h-16 bg-blue-200 rounded-xl flex items-center justify-center">
                    <i className="fas fa-user-md text-2xl text-blue-600"></i>
                  </div>
                  {/* App Icon 3 */}
                  <div className="w-16 h-16 bg-green-200 rounded-xl flex items-center justify-center">
                    <i className="fas fa-pills text-2xl text-green-600"></i>
                  </div>
                  {/* App Icon 4 - Featured */}
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center relative">
                    <i className="fas fa-mobile-alt text-2xl text-white"></i>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Download Our<br />
                  <span className="text-blue-600">Healthcare App</span> for<br />
                  Easy Access
                </h3>
                
                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors group">
                    <i className="fab fa-apple text-xl mr-3"></i>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </button>
                  
                  <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors group">
                    <i className="fab fa-google-play text-xl mr-3"></i>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile App Interface Card */}
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              
              {/* Phone Mockup */}
              <div className="flex justify-center items-center h-full">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                      
                      {/* Status Bar */}
                      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-1">
                          <i className="fas fa-signal text-gray-600"></i>
                          <span className="text-gray-600">California, USA</span>
                          <i className="fas fa-chevron-down text-gray-400 text-xs"></i>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">9:41</span>
                          <i className="fas fa-battery-three-quarters text-gray-600"></i>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        {/* Doctor Profile Card */}
                        <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                            <i className="fas fa-user-md text-blue-600"></i>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">Dr. Wesley Chen</h4>
                            <p className="text-xs text-gray-600">Surgeon, Skin</p>
                            <div className="flex items-center mt-1">
                              <div className="flex text-yellow-400 text-xs">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="text-xs text-gray-500 ml-1">4.9</span>
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                            Book Consult
                          </button>
                        </div>
                        
                        {/* Service Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-100 rounded-xl p-3 text-center">
                            <i className="fas fa-tooth text-green-600 text-lg mb-2"></i>
                            <div className="text-xs font-semibold text-gray-900">Dental</div>
                            <div className="text-xs text-gray-600">Treatments</div>
                          </div>
                          <div className="bg-purple-100 rounded-xl p-3 text-center">
                            <i className="fas fa-eye text-purple-600 text-lg mb-2"></i>
                            <div className="text-xs font-semibold text-gray-900">Eye</div>
                            <div className="text-xs text-gray-600">Specialist</div>
                          </div>
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="flex justify-around items-center pt-4 border-t border-gray-200">
                          <div className="text-center">
                            <i className="fas fa-home text-blue-600 text-lg"></i>
                            <div className="text-xs text-blue-600 mt-1">Home</div>
                          </div>
                          <div className="text-center">
                            <i className="fas fa-calendar text-gray-400 text-lg"></i>
                            <div className="text-xs text-gray-400 mt-1">Booking</div>
                          </div>
                          <div className="text-center">
                            <i className="fas fa-user text-gray-400 text-lg"></i>
                            <div className="text-xs text-gray-400 mt-1">Profile</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/40 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AppDownload
