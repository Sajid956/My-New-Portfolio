import React from 'react'
import { codingprofiles } from '../data'
import Card from './Card'

const CodingProfile = () => {
  return (
    <div id='coding-profile' className='mt-10 mb-24'>

        <h2 className='project-heading'>Coding Profiles</h2>

        <div className='flex flex-wrap justify-center items-center gap-8'>

            {
                codingprofiles.map((profile) => {
                    return <Card key={profile.id} {...profile} />
                })
            }
        </div>
    </div>
  )
}

export default CodingProfile