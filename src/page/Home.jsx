import React from 'react'
import CallToActionCard from '../components/CallToActionCard'
import Features from '../components/Features'
import HeroSection from '../components/heroSection'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import WhoItsFor from '../components/WhoItsFor'
import WhyChooseWedia from '../components/WhyChooseWedia'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyChooseWedia />
      <WhoItsFor />
      <Testimonials />
      <CallToActionCard />
    </div>
  )
}

export default Home