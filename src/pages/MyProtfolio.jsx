import React from 'react'
import HeroSection from './HeroSection '
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import AcademicProject from './AcademicProject'
import Skils from './Skils'

const MyProtfolio = () => {
  return (
    <div className="svg">
       <Navbar/>
      <HeroSection  className="border-0 pt-2"/>
      <AboutMe  className="border-0 pt-2"/>
      <Skils  className="border-0 pt-2"/>
      <AcademicProject className="border-0 pt-2"/>
        
    </div>
  )
}

export default MyProtfolio