import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Achievements from '../components/Achievements'
import TelegramContact from '../components/TelegramContact'
import FAQ from '../components/FAQ'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Achievements />
      <Service />
      <FAQ />
      <TelegramContact />
      <Footer />
    </div>
  )
}

export default LandingPage
