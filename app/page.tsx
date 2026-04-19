import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CaseStudies from '@/components/CaseStudies'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import ROICalculator from '@/components/ROICalculator'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import PageLoader from '@/components/PageLoader'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <PageLoader />
      <Cursor />
      <Navbar />
      <FloatingCTA />
      <WhatsAppButton />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Process />
        <Testimonials />
        <CaseStudies />
        <Services />
        <Pricing />
        <ROICalculator />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
