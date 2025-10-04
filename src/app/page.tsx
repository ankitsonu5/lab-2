import Header from './header/page'
import Hero from './hero/page'
import ServiceCards from './components/ServiceCards'
import FeaturedPackages from './components/FeaturedPackages'
import HealthConcerns from './components/HealthConcerns'
import PromotionalCards from './components/PromotionalCards'
import LabTestsBooking from './components/LabTestsBooking'
import ReviewsSection from './components/ReviewsSection'
import WhyChooseUs from './components/WhyChooseUs'
import Partners from './components/Partners'
import HealthTestOptions from './components/HealthTestOptions'
import FAQ from './components/FAQ'
import AppDownload from './components/AppDownload'
import FooterBanner from './components/FooterBanner'
import Footer from './footer/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceCards />
      <FeaturedPackages />
      <HealthConcerns />
      <PromotionalCards />
      <LabTestsBooking />
      <ReviewsSection />
      <WhyChooseUs />
      <Partners />
      <HealthTestOptions />
      <FAQ />
      <AppDownload />
      <Footer />
      <FooterBanner />
    </div>
  );
}
