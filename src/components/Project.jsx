import React from 'react'
import { NavLink } from 'react-router-dom'
import html from '../techStack/HTML.png'
import css from '../techStack/CSS.png'
import js from '../techStack/Javascript.svg'
import express from '../techStack/Express.png'
import nextjs from '../techStack/NextJsCircle.png'
import tailwind from '../techStack/Tailwind.png'
import nodejs from '../techStack/NodeJs.svg'
import mongodb from '../techStack/MongoDB.svg'
import redux from '../techStack/Redux.svg'
import vercel from '../techStack/Vercel.svg'
import react from '../techStack/React.png'

const Project = () => {
  return (
    <div id="projects">
        <h2 className="project-heading">Projects</h2>
        <div className="card-container">
          <div className="card1 bg1 card-container-left" id="project1">
            <div className="project-card project-card-right">01</div>
            <div className="project-content project-content-left">
              <div className="project-skills-icon flex gap-5">
                <img src={html} className="project-icon" />
                <img src={css} className="project-icon" />
                <img src={js} className="project-icon" />
                <img src={react} className="project-icon" />                      
                <img src={tailwind} className="project-icon" />                      
                <img src={redux} className="project-icon" />                        
                <img src={vercel} className="project-icon" />                        
              </div>
              <div className="project-card-subheading w-max">Github Dev Detective</div>
              <div className="project-card-des">The Profile Detail Fetching application allows users to search for any GitHub username and retrieve a wealth of information about that user's profile.</div>
              <div className="project-btn-section">
                <NavLink className="project-btn" to={'https://sajid-github-devdetective.netlify.app/'}>Show Live</NavLink>
                <a href>
                  <i title="GitHubLink" className="fa-brands fa-github project-btn-icon" />
                </a>
                <a href>
                  <i title="Live Link" className="fa-solid fa-link project-btn-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card1 bg2 card-container-right" id="project2">
            <div className="project-card project-card-left">02</div>
            <div className="project-content project-content-right">
              <div className="project-skills-icon flex gap-5">
                <img src={html} className="project-icon" />
                <img src={js} className="project-icon" />
                <img src={css} className="project-icon" />
                <img src={react} className="project-icon" />
                <img src={tailwind} className="project-icon" />
                <img src={redux} className="project-icon" />  
                <br />                      
                <img src={vercel} className="project-icon" />                        
              </div>
              <div className="project-card-subheading">Password Generator</div>
              <div className="project-card-des">The Password Generator app provides a simple and intuitive interface that allows users to generate random passwords with just a few clicks.</div>
              <div className="project-btn-section">
                <NavLink className="project-btn" to={'https://password-generator-by-sajid.netlify.app/'}>Show Live</NavLink>
                <a href>
                  <i title="GitHubLink" className="fa-brands fa-github project-btn-icon" />
                </a>
                <a href>
                  <i title="Live Link" className="fa-solid fa-link project-btn-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card1 bg3 card-container-left" id="project3">
            <div className="project-card project-card-right">03</div>
            <div className="project-content project-content-left">
              <div className="project-skills-icon flex gap-5">
                <img src={html} className="project-icon" />
                <img src={css} className="project-icon" />
                <img src={js} className="project-icon" />
                <img src={react} className="project-icon" />
                <img src={tailwind} className="project-icon" />
              </div>
              <div className="project-card-subheading">Weather App</div>
              <div className="project-card-des">The Weather app is a mobile and web-based platform designed to provide accurate, real-time weather information to users worldwide.</div>
              <div className="project-btn-section">
                <NavLink className="project-btn " to={'https://sajid-weather-app.netlify.app/'}>Show Live</NavLink>
                <a href>
                  <i title="GitHubLink" className="fa-brands fa-github project-btn-icon" />
                </a>
                <a href>
                  <i title="Live Link" className="fa-solid fa-link project-btn-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card1 bg4 card-container-right" id="project4">
            <div className="project-card project-card-left">04</div>
            <div className="project-content project-content-right">
              <div className="project-skills-icon flex gap-5">
                <img src={html} className="project-icon" />
                <img src={css} className="project-icon" />
                <img src={js} className="project-icon" />
                <img src={react} className="project-icon" />
                <img src={tailwind} className="project-icon" />                       
              </div>
              <div className="project-card-subheading">Tic-Tac-Toe</div>
              <div className="project-card-des">The Tic-Tac-Toe game is a classic board game designed for two players, typically represented by the letters X and O.</div>
              <div className="project-btn-section">
                <NavLink className="project-btn" to={'https://sajid-weather-app.netlify.app/'}>Show Live</NavLink>
                <a href>
                  <i title="GitHubLink" className="fa-brands fa-github project-btn-icon" />
                </a>
                <a href>
                  <i title="Live Link" className="fa-solid fa-link project-btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project