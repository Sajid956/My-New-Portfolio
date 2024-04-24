import React from 'react'
import data from '../data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Certificate from './Certificate';

const MyCertification = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 800,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplayspeed: 2000,
    };
    

  return (
    <div id='my_certification' className='min-h-fit bg-[#d3d3d385] h-full'>
        <h2 className='certify-heading'>My Certifications</h2>

        <Slider {...settings}>

            {
                data.map((certificate) => {
                    return <Certificate key={certificate.id} {...certificate} />
                })
            }

        </Slider>

        <div></div>
    </div>
  )
}

export default MyCertification