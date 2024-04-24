import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="footer-nav ">
            <a href="#home" className="foot-nav-content">Home</a>
            <a href="#aboutMe" className="foot-nav-content">About Me</a>
            <a href="#projects" className="foot-nav-content">Projects</a>
            <a href="#my_certification" className="foot-nav-content">Certifications</a>
            <a href="#coding-profile" className="foot-nav-content">Coding Profiles</a>
            <a href="#contactMe" className="foot-nav-content">Contact Me</a>
          </div>
          <div className="footer-icons">
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-regular fa-envelope" />
          </div>
        </div>
        <div className="unselect-name  design">Sajid Hussain</div>
        <pre className="copyright">{"            "}©2023 Sajid{"\n"}{"            "}ALL RIGHTS RESERVED{"\n"}{"            "}</pre>
      </div>
  )
}

export default Footer