import React from 'react'
import CallToActionCard from '../components/CallToActionCard'
import Features from '../components/Features'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import WhoItsFor from '../components/WhoItsFor'
import WhyChooseWedia from '../components/WhyChooseWedia'
import WorkSupport from '../components/WorkSupport'

const Home = () => {
  return (
    <div>
      <div id="home"><HeroSection /></div>
      <div id="features"><Features /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="why-wedia"><WhyChooseWedia /></div>
      <div id="who-its-for"><WhoItsFor /></div>
      <WorkSupport />
      <div id="testimonials"><Testimonials /></div>
      <CallToActionCard />
    </div>
  )
}

export default Home