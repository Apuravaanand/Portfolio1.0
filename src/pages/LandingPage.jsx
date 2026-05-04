import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Contact from '../components/SocialMedia'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Achievements from '../components/Achievements'
import TelegramContact from '../components/TelegramContact'
import DevStickers from '../components/DevStickers'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Achievements />
      <Service />
      <TelegramContact />
      <Footer />
      {/* <DevStickers/> */}
    </div>
  )
}

export default LandingPage
