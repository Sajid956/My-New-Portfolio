import React from 'react'
import { NavLink } from 'react-router-dom'

const Certificate = ({id, img_url, heading, link}) => {
  return (
    <NavLink to={link} className='max-w-[400px] flex flex-col flex-wrap justify-center items-center object-cover transition-all duration-300 delay-100 hover:scale-110 drop-shadow-lg gap-8 mb-14 mt-14'>

       <div className='w-[380px]'>
            <img src={img_url} alt="" />
        </div> 

        <h2 className='text-center text-xl font-bold text-[#ca6702]'>{heading}</h2>

    </NavLink>
  )
}

export default Certificate