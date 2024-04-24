import mypic from '../assets/my_photo.jpg'
import circle from '../assets/circle.png'
import cube from '../assets/cube.png'
import dots from '../assets/dots.png'
import plus from '../assets/plus.png'
import zigzag from '../assets/zigzags.png'
import blob from '../assets/blob.png'
import { ReactTyped } from 'react-typed';
import { NavLink } from 'react-router-dom'

const MainSection = () => {
    const string = [
              "Full Stack Developer",
              "Web Developer",
              "Frontend Developer",
              "Backend Developer",
              "Coder",
            ]
    

    return (
        <div id='home' className="hero">

            <div className="unselect-name">Sajid Hussain</div>

            <div className="des">
                <div className="title">Hi! Sajid Hussain</div>
                <div className="dev">I am a {" "}
                <span className="role" style={{ color: 'rgb(125, 19, 224)', fontWeight: 'bold' }} > 
                    <ReactTyped strings={string} typeSpeed={80} backSpeed={80} backDelay={1000} loop='true' />
                </span>
                </div>
                <div className="text">I'm a software developer and here is my portfolio website. Here you'll learn about my journey as a software developer.</div>
                <NavLink to={'https://drive.google.com/file/d/1He0RQlkpg7gtqku3KVf9udLXqRFIUI2L/view?usp=drive_link'} className="btn" id="btn-top">Download CV</NavLink>
            </div>

            <div className="hero-img">
                <img id="main-img" src={mypic} alt="" />
                <img id="circle" className="deco-img" src={circle} alt="" />
                <img id="cube" className="deco-img" src={cube} alt="" />
                <img id="dots" className="deco-img" src={dots} alt="" />
                <img id="plus" className="deco-img" src={plus} alt="" />
                <img id="zigzag" className="deco-img" src={zigzag} alt="" />
            </div>

            <NavLink to={'https://drive.google.com/file/d/1He0RQlkpg7gtqku3KVf9udLXqRFIUI2L/view?usp=drive_link'} className="btn" id="btn-bottom">Download CV</NavLink>
        </div>
    )
}

export default MainSection