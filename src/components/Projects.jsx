import React from 'react'
import Closet_Organizer from '../assets/portfolio/Closet_Organizer.png'
import Conference from '../assets/portfolio/Conference.png'
import Double_i_auto from '../assets/portfolio/Double_i_auto.png'
import Volundeerly from '../assets/portfolio/Volundeerly.png'


const Projects = () => {
    const projects_list = [
        {
            id:1,
            src: Volundeerly
        },
        {
            id:2,
            src: Double_i_auto
        },
        {
            id:3,
            src: Conference
        },
        {
            id:4,
            src: Closet_Organizer
        },
    ]

  return (
    <div name = 'projects' className='h-fit w-full  text-white bg-gradient-to-b from-black  to-blue-800 py-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-12'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 p-2'> Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>{/*This will be the grid for the cards */}
                {projects_list.map(({id, src}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg ' > {/*each individual card */}
                    <img src= {src}
                         alt=''
                         className='h-52 w-full object-cover object-top rounded-md duration-300 hover:scale-105'
                         />{/*duration is for the hover to make it smoother, rounded-md to make image corners round */}
                    <div className='flex item-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default Projects

//Old code that was inside div with the grid and that was not dynamic:
// <div className='shadow-md shadow-gray-600 rounded-lg ' > {/*each individual card */}
// <img src= {Volundeerly} alt='' className='rounded-md duration-300 hover:scale-105' />{/*duration is for the hover to make it smoother, rounded-md to make image corners round */}
// <div className='flex item-center justfy-cen'>
//     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
//     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
// </div>
// </div>
