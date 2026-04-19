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
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Process />
        <Testimonials />
        <CaseStudies />
        <Services />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
