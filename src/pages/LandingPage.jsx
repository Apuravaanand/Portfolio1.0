import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import ProjectCards from '../components/ProjectsCard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Achievements from '../components/Achievements'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Achievements/>
      <Service />
      <ProjectCards />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
