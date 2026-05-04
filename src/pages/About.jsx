import React from 'react'
import Navbar from '../components/Navbar'
import About_first from '../components/About_first'
import About_sec from '../components/About_sec'
import Footer from '../components/Footer'
import Tech_Orbit from '../components/Tech_Orbit'

const About = () => {
    return (
        <div>
            <Navbar />
            <About_first />
            <About_sec />
            <Tech_Orbit/>
            <Footer/>
        </div>
    )
}

export default About
