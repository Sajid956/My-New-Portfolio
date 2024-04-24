import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="nav-container">
        <div className="navbar">

          <div className="logo-container">
            <img src="https://previews.123rf.com/images/arbuzu/arbuzu1411/arbuzu141100038/33317177-letter-s-logo-icon-design-template-elements.jpg" alt="" />
            <div className="logo-item">ajid Hussain</div>
          </div>

          <div className="nav-items">
            <div className="nav-elements"><a href="#home">Home</a></div>
            <div className="nav-elements"><a href="#aboutMe">About Me</a></div>
            <div className="nav-elements"><a href="#projects">Projects</a></div>
            <div className="nav-elements"><a href="#my_certification">Certifications</a></div>
            <div className="nav-elements"><a href="#coding-profile">Coding Profiles</a></div>
            <div className="nav-elements"><a href="#contactMe">Contact Me</a></div>
          </div>

            <div className='flex items-center gap-3'>


                <div className={`container ${isVisible ? 'change' : ''}`} onClick={() => setIsVisible((prev) => !prev)}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                </div>

                <div id="Menu" className={`${isVisible ? 'flex' : 'hidden'} rounded p-4`} style={{width: '150px', backgroundColor: '#EFE8E6'}}>
                    <NavLink className="border-b-[1px] border-black mb-1" style={{textDecoration: 'none', color: 'black'}} href="#projects">Projects</NavLink>
                    <NavLink className="border-b-[1px] border-black mb-1" style={{textDecoration: 'none', color: 'black'}} href="#skills">Skills</NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} href="#contactMe">Contact Me</NavLink>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar