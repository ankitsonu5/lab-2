'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestSlide, setCurrentTestSlide] = useState(0);
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);

  // Auto-play for test carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestSlide(prev => (prev === Math.ceil(16 / 3) - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-play for featured tests carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedSlide(prev => (prev + 1) % featuredTests.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      topText: "Prevention is better than cure",
      mainTitle: "Full Body Checkups",
      priceText: "start",
      price: "₹1599",
      badge: "Reports in 6 hours",
      bgColor: "from-gray-100 to-gray-50",
      image: "/banner4.jpg",
    },
    {
      id: 2,
      topText: "Introducing",
      mainTitle: "ULTRA",
      subtitle: "INDIA'S MOST COMPREHENSIVE CHECKUP",
      badge: "120+ Parameters",
      description: "Cardiac Health | Cancer Markers | Zinc, Magnesium & more.",
      bgColor: "from-white to-gray-50",
      image: "/Bannerimg2.jpg",
      ribbonText: "Introducing"
    },
    {
      id: 3,
      topText: "Complete Health Monitoring",
      mainTitle: "Premium Checkup",
      priceText: "starting at",
      price: "₹2499",
      badge: "95+ Tests Included",
      bgColor: "from-blue-50 to-white",
      image: "/Bannerimg3.jpg",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const featuredTests = [
    {
      id: 1,
      title: "Get all your vitals tested",
      description: "Find out your vitamin levels. Monitor your sugar and cholesterol",
      trust: "Trusted by 1M+ customers",
      packageName: "Full Body Checkup - Essential",
      originalPrice: "₹2945",
      price: "₹1599",
      discount: "70% Off",
      parameters: "91 parameters included",
      reportTime: "Reports within 6 hours",
      image: "/test1.jpg",
      badge: "Checkup",
      slideIndicator: "1/4"
    },
    {
      id: 2,
      title: "Monitor your heart health",
      description: "Test silent issues with advanced cardiac test and cut medical bills",
      trust: "Trusted by 1M+ customers",
      packageName: "Full Body Checkup - Comprehensive",
      originalPrice: "₹12505",
      price: "₹3699",
      discount: "70% Off",
      parameters: "105 parameters included",
      reportTime: "Reports within 14 hours",
      image: "/test2.jpg",
      badge: "Checkup",
      slideIndicator: "2/4"
    },
    {
      id: 3,
      title: "Sexual Health monitoring",
      description: "Regular testing is essential for sexually active folks. Test discreetly",
      trust: "Trusted by 1M+ customers",
      packageName: "STD Test Checkup - Advanced",
      originalPrice: "₹9199",
      price: "₹3999",
      discount: "56% Off",
      parameters: "9 parameters included",
      reportTime: "Reports within 14 hours",
      image: "/test3.jpg",
      badge: "Checkup",
      slideIndicator: "4/4"
    },
    {
      id: 4,
      title: "Get your thyroid levels tested",
      description: "Keep your thyroid and overall health in check with regular monitoring",
      trust: "Trusted by 1M+ customers",
      packageName: "Thyroid Function Test (TFT)",
      originalPrice: "₹599",
      price: "₹400",
      discount: "32% Off",
      parameters: "3 tests included",
      reportTime: "Reports within 6 hours",
      image: "/test4.jpg",
      badge: "Test",
      slideIndicator: "3/4"
    }
  ];

  const labTests = [
    {
      name: 'Complete Blood Count (CBC)',
      price: '₹299',
      tests: '25 tests',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <circle cx="50" cy="50" r="40" fill="white" opacity="0.2"/>
      //     <path d="M50 20C33.43 20 20 33.43 20 50s13.43 30 30 30 30-13.43 30-30S66.57 20 50 20zm0 54c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24z" fill="white"/>
      //     <circle cx="35" cy="45" r="4" fill="white"/>
      //     <circle cx="50" cy="50" r="5" fill="white"/>
      //     <circle cx="65" cy="45" r="4" fill="white"/>
      //     <circle cx="42" cy="60" r="3" fill="white"/>
      //     <circle cx="58" cy="60" r="3" fill="white"/>
      //   </svg>
      // ),
      image: '/testimg6.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Thyroid Profile',
      price: '₹399',
      tests: '3 tests',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <path d="M50 25C40 25 35 30 35 35C35 40 40 45 50 55C60 45 65 40 65 35C65 30 60 25 50 25Z" fill="white" opacity="0.9"/>
      //     <ellipse cx="42" cy="60" rx="8" ry="12" fill="white" opacity="0.8"/>
      //     <ellipse cx="58" cy="60" rx="8" ry="12" fill="white" opacity="0.8"/>
      //     <path d="M42 72C42 72 46 78 50 78C54 78 58 72 58 72" stroke="white" strokeWidth="3" fill="none"/>
      //   </svg>
      // ),
      image: '/testimg4.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Lipid Profile',
      price: '₹449',
      tests: '8 tests',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <path d="M50 25C50 25 35 35 35 50C35 65 42.5 75 50 75C57.5 75 65 65 65 50C65 35 50 25 50 25Z" fill="white" opacity="0.9"/>
      //     <circle cx="50" cy="50" r="8" fill="white"/>
      //     <path d="M45 45L55 55M55 45L45 55" stroke="#a382cf" strokeWidth="2"/>
      //   </svg>
      // ),
      image: '/testimg1.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Vitamin D Test',
      price: '₹899',
      tests: '1 test',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <circle cx="50" cy="50" r="20" fill="white" opacity="0.9"/>
      //     <circle cx="50" cy="50" r="12" fill="white"/>
      //     {[...Array(12)].map((_, i) => {
      //       const angle = (i * 30 * Math.PI) / 180;
      //       const x1 = 50 + Math.cos(angle) * 25;
      //       const y1 = 50 + Math.sin(angle) * 25;
      //       const x2 = 50 + Math.cos(angle) * 35;
      //       const y2 = 50 + Math.sin(angle) * 35;
      //       return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3" strokeLinecap="round"/>;
      //     })}
      //   </svg>
      // ),
      image: '/testimg2.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Vitamin B12',
      price: '₹599',
      tests: '1 test',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <rect x="30" y="30" width="40" height="50" rx="8" fill="white" opacity="0.9"/>
      //     <circle cx="50" cy="45" r="8" fill="white"/>
      //     <circle cx="50" cy="65" r="6" fill="white"/>
      //     <text x="50" y="50" fontSize="16" fill="#a382cf" textAnchor="middle" fontWeight="bold">B12</text>
      //   </svg>
      // ),
      image: '/testimg3.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'HbA1c (Diabetes)',
      price: '₹349',
      tests: '1 test',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <path d="M50 30L35 45L50 60L65 45Z" fill="white" opacity="0.9"/>
      //     <circle cx="50" cy="70" r="8" fill="white"/>
      //     <path d="M40 50C40 50 45 55 50 55C55 55 60 50 60 50" stroke="white" strokeWidth="2" fill="none"/>
      //   </svg>
      // ),
      image: '/testimg7.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Liver Function Test',
      price: '₹499',
      tests: '11 tests',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <path d="M35 40C35 40 40 30 50 30C60 30 65 40 65 40L70 60C70 60 65 75 50 75C35 75 30 60 30 60L35 40Z" fill="white" opacity="0.9"/>
      //     <ellipse cx="45" cy="50" rx="5" ry="8" fill="white"/>
      //     <ellipse cx="55" cy="50" rx="5" ry="8" fill="white"/>
      //   </svg>
      // ),
      image: '/testimg5.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Kidney Function Test',
      price: '₹449',
      tests: '9 tests',
      // icon: (
      //   <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
      //     <path d="M40 35C35 35 30 40 30 50C30 60 35 70 40 70C45 70 45 65 45 60C45 55 42 50 45 50C48 50 45 55 45 60C45 65 45 70 50 70C55 70 55 65 55 60C55 55 52 50 55 50C58 50 55 55 55 60C55 65 55 70 60 70C65 70 70 60 70 50C70 40 65 35 60 35C55 35 55 40 55 45C55 50 58 55 55 55C52 55 55 50 55 45C55 40 55 35 50 35C45 35 45 40 45 45C45 50 48 55 45 55C42 55 45 50 45 45C45 40 45 35 40 35Z" fill="white" opacity="0.9"/>
      //   </svg>
      // ),
      image: '/testimg2.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Ultra Full Body Checkup - Male',
      price: '₹1599',
      originalPrice: '₹3574',
      discount: '66% Off',
      tests: '125 parameters',
      image: '/testimg1.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Ultra Full Body Checkup - Female',
      price: '₹1999',
      originalPrice: '₹4398',
      discount: '72% Off',
      tests: '125 parameters',
      image: '/testimg2.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Sexual Health Checkup',
      price: '₹799',
      tests: '15 tests',
      image: '/testimg3.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Fever Panel',
      price: '₹599',
      tests: '8 tests',
      image: '/testimg4.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Allergy Panel',
      price: '₹1299',
      tests: '20 tests',
      image: '/testimg5.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Bone Health Profile',
      price: '₹899',
      tests: '6 tests',
      image: '/testimg6.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
    {
      name: 'Heart Health Package',
      price: '₹1499',
      tests: '18 tests',
      image: '/testimg7.jpg',
      gradient: 'from-[#a382cf] via-[#9370c9] to-[#835ec3]'
    },
    {
      name: 'Women Wellness Package',
      price: '₹1199',
      tests: '22 tests',
      image: '/testimg1.jpg',
      gradient: 'from-[#83c7bc] via-[#73b7ac] to-[#63a79c]'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Marketing Strip */}
      <div className="bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white py-2 px-4 text-center text-sm md:text-base">
        <span className="font-medium">Book </span>
        <span className="font-bold underline">full body checkup</span>
        <span className="font-medium"> with Vit. D & B12 at just </span>
        <span className="font-bold underline">₹1599</span>
        <button className="ml-4 bg-white text-[#a382cf] px-4 py-1 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
          Order Now
        </button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/lab logo.png"
                alt="Access PathLab Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#tests" className="text-gray-700 hover:text-[#a382cf] transition-colors">Lab Tests</a>
              <a href="#checkups" className="text-gray-700 hover:text-[#83c7bc] transition-colors">Health Checkups</a>
              <a href="#about" className="text-gray-700 hover:text-[#a382cf] transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-[#83c7bc] transition-colors">Contact</a>
            </nav>
            <button className="bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Banner Slider */}
      <section className="bg-gradient-to-br from-[#f5f0ff] via-white to-[#e5f9f7] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative h-[400px] md:h-[450px]">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className={`h-full bg-gradient-to-br ${banner.bgColor} relative overflow-hidden`}>
                      {/* Purple/Teal Circle Background on Right - Enhanced */}
                      <div className="absolute top-1/2 right-8 md:right-16 w-[320px] h-[320px] md:w-[380px] md:h-[380px] bg-gradient-to-br from-[#a382cf] via-[#9378c8] to-[#83c7bc] rounded-full -translate-y-1/2 opacity-30 shadow-2xl blur-sm"
                        style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
                      />

                      {/* Decorative Blur Elements */}
                      <div className="absolute top-10 left-10 w-32 h-32 bg-[#a382cf]/20 rounded-full blur-3xl" />
                      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#83c7bc]/15 rounded-full blur-3xl" />

                      {/* Person Image on Right - Circular */}
                      <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 z-10">
                        <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                          {/* Circular Image Container with Border */}
                          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                            <img
                              src={banner.image}
                              alt={banner.mainTitle}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          {/* Decorative Ring with Animation */}
                          <div
                            className="absolute inset-0 rounded-full border-2 border-[#a382cf]/40"
                            style={{
                              transform: 'scale(1.05)',
                              animation: 'ring-pulse 3s ease-in-out infinite'
                            }}
                          />
                          {/* Second Decorative Ring */}
                          <div
                            className="absolute inset-0 rounded-full border-2 border-[#83c7bc]/30"
                            style={{
                              transform: 'scale(1.12)',
                              animation: 'ring-pulse 3s ease-in-out infinite 1.5s'
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-6 md:p-10 flex flex-col justify-center max-w-2xl">
                        {/* Top Text */}
                        <div className="text-base md:text-lg text-gray-700 font-normal mb-3">
                          {banner.topText}
                        </div>

                        {/* Main Title */}
                        <div className="mb-4">
                          {banner.mainTitle === "ULTRA" ? (
                            <>
                              <h1 className="text-5xl md:text-6xl font-black text-[#a382cf] leading-none tracking-tight mb-2">
                                ULTRA
                              </h1>
                              <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
                                {banner.subtitle}
                              </h2>
                            </>
                          ) : (
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                              {banner.mainTitle}
                            </h1>
                          )}

                          {banner.priceText && (
                            <div className="text-2xl md:text-3xl font-bold mt-2">
                              <span className="text-gray-900">{banner.priceText} </span>
                              <span className="text-[#a382cf]">@ {banner.price}</span>
                            </div>
                          )}
                        </div>

                        {/* Badge */}
                        {banner.badge && (
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#83c7bc] to-[#a382cf] text-white px-4 py-2 rounded-lg text-sm font-bold mb-4 shadow-lg w-fit">
                            <span>{banner.badge}</span>
                          </div>
                        )}

                        {/* Description for ULTRA banner */}
                        {banner.description && (
                          <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl px-4 py-2.5 inline-block shadow-sm mb-4">
                            <p className="text-sm md:text-base text-gray-800 font-medium">
                              {banner.description}
                            </p>
                          </div>
                        )}

                        {/* Search Bar with Buttons */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-3 mb-4 border border-white/50">
                          <div className="flex flex-col md:flex-row gap-3">
                            {/* Search Input */}
                            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 border-2 border-gray-200 rounded-xl focus-within:border-[#a382cf] transition-colors bg-white/50">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search for tests or checkups"
                                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent"
                              />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                              <button className="bg-gradient-to-r from-[#a382cf] to-[#9575c4] text-white px-5 py-2.5 rounded-xl hover:shadow-lg transition-all font-semibold text-sm flex items-center gap-2 shadow-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>
                                </svg>
                                Lab Tests
                              </button>
                              <button className="bg-gradient-to-r from-[#83c7bc] to-[#6fb8ad] text-white px-5 py-2.5 rounded-xl hover:shadow-lg transition-all font-semibold text-sm flex items-center gap-2 shadow-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                Checkups
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Offer Text */}
                        <div className="text-xs md:text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-lg py-2 px-3 inline-block border border-white/50">
                          Get <span className="font-bold text-[#a382cf]">15% OFF*</span> on orders above <span className="font-semibold">₹500</span> | Use: <span className="font-bold text-gray-800">PURPLE15</span>
                        </div>
                      </div>

                      {/* Ribbon for "Introducing" banner */}
                      {banner.ribbonText && (
                        <div className="absolute top-0 left-0 z-20 overflow-hidden w-32 h-32">
                          <div className="bg-gradient-to-r from-[#83c7bc] to-[#a382cf] text-white px-10 py-2 font-bold text-xs transform -rotate-45 -translate-x-8 translate-y-6 shadow-lg text-center">
                            {banner.ribbonText}
                          </div>
                        </div>
                      )}

                      {/* Dots Indicator - Inside Banner */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {banners.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`transition-all ${
                              idx === currentSlide
                                ? 'w-8 h-2 bg-gradient-to-r from-[#a382cf] to-[#83c7bc]'
                                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            } rounded-full`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      
      
          {/* Stats Section - Below Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex items-center gap-4 border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#a382cf]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-gray-900">Certified</div>
                <div className="text-sm text-gray-600">Labs</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex items-center gap-4 border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ccf2ed] to-[#b3e5df] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#83c7bc]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-gray-900">60 mins collection</div>
                <div className="text-sm text-gray-600">6 AM - 10 PM</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex items-center gap-4 border border-white/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#a382cf]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold text-gray-900">Reports in</div>
                <div className="text-sm text-gray-600">6 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

                   {/* Popular Tests Section */}
      <section id="tests" className="py-20 bg-gradient-to-br from-[#f5f0ff] via-[#ede5ff] to-[#e5f9f7] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#a382cf]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#83c7bc]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Popular Lab Tests
            </h2>
            <p className="text-lg text-gray-600">Most booked tests by our customers</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestSlide(prev => (prev === 0 ? Math.ceil(labTests.length / 3) - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-[#a382cf] group-hover:text-[#8b6fc4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestSlide(prev => (prev === Math.ceil(labTests.length / 3) - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-[#a382cf] group-hover:text-[#8b6fc4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestSlide * 100}%)` }}
              >
                {/* Slides - 3 cards per slide */}
                {Array.from({ length: Math.ceil(labTests.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                      {labTests.slice(slideIndex * 3, slideIndex * 3 + 3).map((test, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ transform: 'translateZ(10px)' }} />

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{
                       background: 'linear-gradient(45deg, #a382cf, #83c7bc, #a382cf, #83c7bc)',
                       backgroundSize: '300% 300%',
                       animation: 'gradient-shift 3s ease infinite',
                       padding: '2px',
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       maskComposite: 'exclude'
                     }} />

                {/* Image Section with 3D Gradient */}
                <div className="relative h-56 overflow-hidden">
                  {/* Background Gradient - Lighter */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${test.gradient} opacity-30 group-hover:opacity-40 transition-all duration-700`}
                       style={{
                         transform: 'translateZ(20px)',
                         animation: 'gradient-shift 8s ease infinite',
                         backgroundSize: '200% 200%'
                       }} />

                  {/* Floating Image with 3D Effect */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full transform group-hover:scale-110 transition-all duration-700"
                         style={{
                           animation: 'float 4s ease-in-out infinite',
                           animationDelay: `${index * 0.2}s`
                         }}>
                      {/* Circular Image Container */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                        <img
                          src={test.image}
                          alt={test.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Light Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 20}%`,
                          animation: `float 3s ease-in-out infinite`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md rounded-full p-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Wave Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
                    </svg>
                  </div>
                </div>

                {/* Content Section with Glass Effect */}
                <div className="relative p-6 bg-white backdrop-blur-sm">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#a382cf] transition-colors duration-500 leading-tight">
                    {test.name}
                  </h3>

                  {/* Discount Badge */}
                  {test.discount && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {test.discount}
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-1.5 bg-gradient-to-br from-[#a382cf] to-[#83c7bc] rounded-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-600">{test.tests} included</p>
                  </div>

                  {/* Price and Button with Enhanced Animation */}
                  <div className="flex justify-between items-center pt-5 border-t-2 border-gray-100">
                    <div className="flex flex-col">
                      {test.originalPrice && (
                        <span className="text-xs text-gray-400 line-through mb-1">{test.originalPrice}</span>
                      )}
                      <span className="text-xs text-gray-500 mb-1">Starting from</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#a382cf] via-[#8b6fc4] to-[#83c7bc] bg-clip-text text-transparent animate-gradient">
                        {test.price}
                      </span>
                    </div>
                    <button className="relative bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white px-7 py-3 rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-500 font-bold text-sm flex items-center gap-2 group-hover:gap-4 overflow-hidden">
                      <span className="relative z-10">Book</span>
                      <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </button>
                  </div>
                </div>

                {/* Card Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                </div>

                {/* 3D Shadow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#a382cf] to-[#83c7bc] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10" />
              </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: Math.ceil(labTests.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestSlide(index)}
                  className={`transition-all duration-500 rounded-full ${
                    currentTestSlide === index
                      ? 'w-12 h-3 bg-gradient-to-r from-[#a382cf] to-[#83c7bc]'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6">
              <span className="text-sm font-medium text-gray-600">
                {currentTestSlide + 1} / {Math.ceil(labTests.length / 3)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Most Booked Checkups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Most Booked<br />Checkups
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                India's fastest AI powered & temperature controlled supply chain to collect and test your blood in freshest state.
              </p>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-[#a382cf] hover:text-[#a382cf] transition-all font-semibold">
                View All Checkups
              </button>
            </div>

            {/* Right Grid of Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Full Body Checkup - Large Card */}
              <div className="bg-gradient-to-br from-[#a382cf] to-[#8b6fc4] rounded-3xl p-6 text-white flex flex-col justify-between h-64 hover:shadow-2xl transition-all cursor-pointer group hover:scale-105">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Full Body<br />Checkup</h3>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                    <circle cx="35" cy="30" r="12" fill="white" opacity="0.9"/>
                    <circle cx="65" cy="30" r="12" fill="white" opacity="0.9"/>
                    <path d="M35 45C35 45 35 55 35 60C35 65 35 75 35 75M65 45C65 45 65 55 65 60C65 65 65 75 65 75M25 60L45 60M55 60L75 60" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                  </svg>
                </div>
              </div>

              {/* Sexual Health - Top Right */}
              <div className="bg-gradient-to-br from-[#83c7bc] to-[#6fb8ad] rounded-3xl p-6 text-white flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer group hover:scale-105">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">Sexual<br />Health</h3>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Women's Health - Bottom Left */}
              <div className="bg-gradient-to-br from-[#83c7bc] to-[#6fb8ad] rounded-3xl p-6 text-white flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer group hover:scale-105">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">Women's<br />Health</h3>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Allergy Checkup - Bottom Right */}
              <div className="bg-gradient-to-br from-[#a382cf] to-[#8b6fc4] rounded-3xl p-6 text-white flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer group hover:scale-105">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">Allergy<br />Checkup</h3>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="20" fill="white" opacity="0.3"/>
                    <circle cx="50" cy="50" r="12" fill="white" opacity="0.6"/>
                    <circle cx="50" cy="50" r="6" fill="white" opacity="0.9"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tests Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              {featuredTests.map((test, index) => (
                <div
                  key={test.id}
                  className={`transition-all duration-700 ${
                    index === currentFeaturedSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Package Card */}
                    <div className="relative">
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setCurrentFeaturedSlide(prev => (prev - 1 + featuredTests.length) % featuredTests.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-10"
                      >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <div className="bg-white rounded-3xl p-8 shadow-xl">
                        {/* Package Header */}
                        <div className="bg-gradient-to-r from-[#83c7bc] to-[#a382cf] rounded-2xl p-6 mb-6 relative">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-white/80 text-sm mb-1">{test.badge}</div>
                              <h3 className="text-white text-xl font-bold">{test.packageName}</h3>
                            </div>
                            <div className="text-right">
                              <div className="text-white/80 text-sm line-through">{test.originalPrice}</div>
                              <div className="text-white text-2xl font-bold">{test.price}</div>
                              <div className="bg-white text-[#83c7bc] text-xs font-bold px-2 py-1 rounded mt-1">
                                {test.discount}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Package Details */}
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                            </svg>
                            <span className="text-sm">{test.parameters}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm">{test.reportTime}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-[#83c7bc] hover:text-[#83c7bc] transition-all">
                            View Details
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-[#a382cf] to-[#8b6fc4] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setCurrentFeaturedSlide(prev => (prev + 1) % featuredTests.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-10"
                      >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Right - Content */}
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {test.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6">
                        {test.description}
                      </p>
                      <div className="inline-flex items-center gap-3 bg-[#f3e8ff] rounded-lg px-4 py-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#a382cf] to-[#8b6fc4] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{test.trust}</div>
                        </div>
                      </div>

                      {/* Slide Indicator */}
                      <div className="flex gap-2 mt-8">
                        {featuredTests.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentFeaturedSlide(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentFeaturedSlide
                                ? 'w-8 bg-gray-800'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0px);
          }
          50% {
            transform: translateY(-15px) translateZ(10px);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
        }
      `}</style>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-[#f5f0ff] to-[#e5f9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Experience the best in diagnostic services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/testimg3.jpg',
                title: 'Fast & Reliable',
                description: 'Sample collection within 60 minutes and reports in just 6 hours',
                bgColor: 'from-[#fef3c7] to-[#fde68a]'
              },
              {
                image: '/testimg5.jpg',
                title: 'Certified Labs',
                description: 'NABL & CAP certified labs with 100% accurate results',
                bgColor: 'from-[#dbeafe] to-[#bfdbfe]'
              },
              {
                image: '/testimg7.jpg',
                title: 'Expert eMedics',
                description: 'Trained professionals with 100+ hours of training for painless collection',
                bgColor: 'from-[#f3e8ff] to-[#e9d5ff]'
              },
              {
                image: '/testimg2.jpg',
                title: 'Home Collection',
                description: 'Convenient sample collection at your doorstep at your preferred time',
                bgColor: 'from-[#ccf2ed] to-[#b3e5df]'
              },
              {
                image: '/testimg4.jpg',
                title: 'Affordable Pricing',
                description: 'Best prices with regular discounts and offers on all tests',
                bgColor: 'from-[#fce7f3] to-[#fbcfe8]'
              },
              {
                image: '/testimg1.jpg',
                title: 'Digital Reports',
                description: 'Get reports on WhatsApp and email with easy access anytime',
                bgColor: 'from-[#dbeafe] to-[#bfdbfe]'
              },
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay - Light */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-40 group-hover:opacity-30 transition-opacity duration-500`} />
                  {/* Bottom Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a382cf] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Checkups Section */}
      <section id="checkups" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full Body Health Checkups</h2>
            <p className="text-lg text-gray-600">Comprehensive health packages for complete wellness</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Health Checkup',
                tests: '45 tests',
                price: '₹999',
                originalPrice: '₹2499',
                features: ['CBC', 'Lipid Profile', 'Liver Function', 'Kidney Function']
              },
              {
                name: 'Advanced Health Checkup',
                tests: '75 tests',
                price: '₹1599',
                originalPrice: '₹3999',
                features: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D & B12', 'HbA1c'],
                popular: true
              },
              {
                name: 'Premium Health Checkup',
                tests: '95 tests',
                price: '₹2499',
                originalPrice: '₹5999',
                features: ['All Advanced Tests', 'Iron Profile', 'Cardiac Risk', 'Hormone Panel']
              },
            ].map((checkup, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative ${checkup.popular ? 'border-4 border-[#a382cf] scale-105' : 'border-2 border-gray-100'}`}>
                {checkup.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{checkup.name}</h3>
                <p className="text-gray-500 mb-4">{checkup.tests} included</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#a382cf]">{checkup.price}</span>
                  <span className="text-gray-400 line-through ml-2">{checkup.originalPrice}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {checkup.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#83c7bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-colors ${checkup.popular ? 'bg-gradient-to-r from-[#a382cf] to-[#83c7bc] text-white hover:shadow-lg' : 'bg-[#f3e8ff] text-[#a382cf] hover:bg-gradient-to-r hover:from-[#a382cf] hover:to-[#83c7bc] hover:text-white'}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lab logo.png"
                  alt="Access PathLab Logo"
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">Your trusted partner for accurate and fast diagnostic services.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#a382cf] transition-colors">Lab Tests</a></li>
                <li><a href="#" className="hover:text-[#83c7bc] transition-colors">Health Checkups</a></li>
                <li><a href="#" className="hover:text-[#a382cf] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#83c7bc] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Popular Tests</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#a382cf] transition-colors">CBC Test</a></li>
                <li><a href="#" className="hover:text-[#83c7bc] transition-colors">Thyroid Test</a></li>
                <li><a href="#" className="hover:text-[#a382cf] transition-colors">Vitamin D Test</a></li>
                <li><a href="#" className="hover:text-[#83c7bc] transition-colors">Diabetes Test</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1800-123-4567</li>
                <li>📧 info@accesspathlab.com</li>
                <li>📍 Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Access PathLab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: "🏥", title: "Certified Labs", desc: "NABL-grade processes & calibrated analyzers" },
  { icon: "🧪", title: "Home Collection", desc: "Trained phlebotomists at your doorstep" },
  { icon: "⚡", title: "Fast Reports", desc: "Digital reports within 24–48 hours" },
  { icon: "💳", title: "Transparent Pricing", desc: "No hidden charges. Clear bills." },
];

const tests = [
  { name: "Complete Blood Count (CBC)", desc: "General health check", price: 299 },
  { name: "Thyroid Profile (T3, T4, TSH)", desc: "Thyroid screening", price: 499 },
  { name: "Vitamin D (25-OH)", desc: "Bone & immunity", price: 699 },
  { name: "Diabetes Package", desc: "FBS, PPBS, HbA1c", price: 799 },
  { name: "Lipid Profile", desc: "Heart health", price: 599 },
  { name: "Liver Function Test (LFT)", desc: "Liver assessment", price: 749 },
];

const steps = [
  { title: "Choose test or package", desc: "Search and select your required test." },
  { title: "Home sample collection", desc: "Expert visits your address at the chosen time." },
  { title: "Get digital reports", desc: "Access reports online; consult with doctors." },
];

const testimonials = [
  { name: "Aarav", city: "Delhi", quote: "Home collection was on time and very hygienic." },
  { name: "Mira", city: "Bengaluru", quote: "Reports arrived the next day with detailed insights." },
  { name: "Rohit", city: "Mumbai", quote: "Great prices and professional staff." },
];

const faqs = [
  { q: "Do you provide home sample collection?", a: "Yes, trained phlebotomists visit your address at your chosen time." },
  { q: "When will I receive my reports?", a: "Typically within 24–48 hours depending on the test." },
  { q: "Are your labs certified?", a: "Yes, we follow NABL-grade processes and ICMR guidelines." },
  { q: "How can I book a test?", a: "Use the Book a Home Collection form above or call us." },
];

