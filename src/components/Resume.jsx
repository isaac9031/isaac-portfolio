import React from 'react'

const Resume = () => {
  return (
    <div
        name='resume'
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-50'>Resume</p>
            </div>
            <p className='text-xl mt-12 '>
                Some of my skills maybe
            </p>
            <br />
            <p className='text-xl'>
                YASS.
            </p>
        </div>
    </div>
  )
}

export default Resume
