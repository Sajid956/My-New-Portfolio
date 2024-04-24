import React from 'react'
import mypic from '../assets/mypic.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {

    var settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplayspeed: 2000,
    };

    return (
        <div className='min-h-fit mb-14 bg-[#d3d3d385] h-full' id='aboutMe'>
            <h2 className='about-heading'>About me</h2>

            <div className='w-[100%] flex justify-center items-center '>
                <img src={mypic} alt="" className='w-[200px] h-[200px] rounded-[50%] object-cover' loading='lazy' />
            </div>

            <Slider {...settings} className=' mt-10'>
                <div className='text-center space-y-4 '>

                    <h2 className='font-bold text-4xl'>Hey! I'm <span className='text-[#ec4489] font-bold'>Sajid Hussain</span> and I'm a Software Engineer.</h2>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-start max-w-[850px] space-y-4 text-xl text-gray-600'>

                            <p >I am pursuing my Bachelor in Technology from Darbhanga College Of Engineering, Darbhanga and my specialization is in Computer Science Engineering.</p>

                            <p>

                                I have a deep interest in Web Development and especially in frontend development and I have made some frontend projects using React.js & Redux. And to use my web development skills I have participated in many hackathons and I and my team has also been participated in Smart India Hackathon 2023. My strengths are my self-confidence and my willingness to improve myself.

                            </p>

                            <p>
                                Currently I am looking to join a tech company where I can learn from others as well as apply the knowledge which I have learned in my college life.
                            </p>
                        </div>
                    </div>



                </div>

                <div className='text-center'>
                    <div className="flex flex-col justify-center items-center" style={{ opacity: 1, transform: 'none' }}>
                        <h2 className="text-[2rem] font-bold text-center uppercase">I Know that <span className='text-[#7d13e0]'>Good Design</span> <br />means  <span className='text-[#7d13e0]'>Good Opporunities</span></h2>

                        <div className="flex flex-wrap justify-center items-start mt-[2rem] ">

                            <div className="w-[190px] flex justify-start flex-col m-[2rem] transition-all duration-75 hover:cursor-pointer " data-projection-id={33} style={{ opacity: 1, transform: 'none' }}>

                                <div>
                                    <img src="https://cdn.sanity.io/images/uoqg8kde/production/56a75599af3f694c20c414a2c89c71c4016065e2-225x225.jpg" alt="Tech Enthusiast"
                                        className='h-[170px] rounded-md object-cover w-full' />

                                </div>

                                <h2 className="font-bold text-left text-[1rem]" style={{ marginTop: '20px' }}>Tech Enthusiast</h2>

                                <p className="text-gray-600 text-[0.8rem] text-left leading-5" style={{ marginTop: '10px' }}>Love to learn new technologies and like to explore the field of Machine Learning, AI and Web3.</p>

                            </div>

                            <div className="w-[190px] flex justify-start flex-col m-[2rem] hover:cursor-pointer" data-projection-id={34} style={{ opacity: 1, transform: 'none' }}>
                                <img src="https://cdn.sanity.io/images/uoqg8kde/production/97cad006c5fd9ea1b70fe7a078aa4b0736d68518-2560x1453.jpg" alt="Full Stack Developer"
                                    className='h-[170px] rounded-md object-cover w-full' />

                                <h2 className="font-bold text-left text-[1rem]" style={{ marginTop: '20px' }}>Full Stack Developer</h2>

                                <p className="text-gray-600 text-[0.8rem] text-left leading-5" style={{ marginTop: '10px' }}>FullStack Developer, well versed with React JS, Redux-toolkit, SQL, MongoDB, RESTful APIs, etc..</p>
                            </div>

                            <div className="w-[190px] flex justify-start flex-col m-[2rem] hover:cursor-pointer" data-projection-id={35} style={{ opacity: 1, transform: 'none' }}>
                                <img src="https://cdn.sanity.io/images/uoqg8kde/production/6843d222a473762679e25b16c10ccf992bb3d32b-237x212.jpg" alt="Problem Solver"
                                    className='h-[170px] rounded-md object-cover w-full' />

                                <h2 className="font-bold text-left text-[1rem]" style={{ marginTop: '20px' }}>Problem Solver</h2>

                                <p className="text-gray-600 text-[0.8rem] text-left leading-5" style={{ marginTop: '10px' }}>I have solved over 1200+ DSA/Problem Solving problems and got a global ranking of 10,149 on Leetcode.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    )
}

export default AboutMe