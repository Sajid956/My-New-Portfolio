import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Project from './components/Project'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyCertification from './components/MyCertification'
import CodingProfile from './components/CodingProfile'

function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <MainSection />
      <AboutMe />
      <Project />
      <MyCertification />
      <CodingProfile />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
