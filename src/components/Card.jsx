import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Card = ({id, img, heading, profileLink}) => {

  return (
    <div className='w-[24%] h-[320px] border rounded-md shadow flex flex-col items-center justify-around transition-all duration-600 delay-100 hover:shadow-2xl hover:scale-110'>

        <div className='w-[300px] h-[200px] object-cover'>
            <img src={img} alt=""/>
        </div>

        <h2 className='text-xl font-bold tracking-wide -mt-3 text-[#ec4489]'>{heading}</h2>

        <NavLink className='w-[90%] text-center relative z-1 bg-[#e84949] rounded p-2 mb-2 text-white text-lg font-medium view-btn'
                to={profileLink}
        >View Profile</NavLink>
    </div>
  )
}

export default Card