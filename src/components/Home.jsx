import React from 'react'
import SelfImage from '../assets/self_image.JPG' // SelfImage is must a name that I made up
import {BsArrowRightSquareFill} from 'react-icons/bs' //the first two letters of the icon are bs; comes from https://react-icons.github.io/react-icons/search/#q=arrow
const Home = () => {  //Home will be behind the NavBar, so you need to comment it out in App.js to see the first changes on the website for home, uncomment Navbar on App.js after you see the change you were expection
  return (
    <div name="home" className='h-fit w-ful bg-gradient-to-b from-black via-black to-blue-800 pt-20'>{/*home will be used for smooth scroll  */} {/*added pt-20 was added to have some sapace from the top where the navbar will be at. Also added h-fit for h-screen in all components, except navbar*/}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>{/*flex-col and justify-center: on smaller screens, the children will be aligned vertically (stacked on top of each other). When the screen size reaches the medium breakpoint (md:flex-row), the layout will switch to a row direction, and the children will be aligned horizontally.  */}
            <div className='flex flex-col pt-8 justify-center h-full'> {/*flex flex-column means that the children of this div will always be vertically stacked since we don't have md:flex-row class; cross axis was changed 90 degrees by the parent div from row direction ↕ to column dirction ↔, therefore justify and item center has also rotated 90 degrees */}
                <h2 className="text-4xl sm:text-7xl font-bold text-purple-500">
                   I'm Isaac
                </h2>
                <p className='text-white pt-4 px-2 max-w-none'> {/*might need to modify max-w-none */}
                I am a Full Stack Software Engineer and a former educator who found a new passion during the pandemic where I witnessed the profound impact of technology in education.
                My love for building and designing new applications can be seen in my recent projects. I am always looking to learn new skills, to collaborate, and to connect. Please don't hesitate to contact me!
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-black cursor-pointer'> {/*flex item-center allow projects and span to align horizontally,next to each other*/}
                        Projects
                        <span className='group-hover:rotate-90 duration-500'> {/*use group on the sibling and group-hover.. in the arrow*/}
                            <BsArrowRightSquareFill size={20} className='ml-2'/>
                        </span>
                    </button>
                </div>
            </div>{/* */}
            <div className='py-4'  >{/*className='overflow-hidden' */}
                <img
                src={SelfImage}
                alt='profile'
                className='rounded-2xl object-scale-down  mx-auto w-2/3  md:w-full' //screen will be full once it reaches 768px, if mobile then it will be smaller
                />
            </div>
        </div>
    </div>
  )
}

export default Home;
