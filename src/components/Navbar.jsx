import React, { useCallback, useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaGitlab} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {

  const[nav, setNav] = useState(false)

  const links = [
    {
      id:1,
      link:'home',
    },
    {
      id:2,
      link:'projects',
    },
    {
      id:3,
      link:'experience',
    },
    {
      id:4,
      link:'contact',
    },
    {
      id:5,
      link:'socials',
    },
  ];

  return (
    <div className='flex  justify-between items-center fixed w-full h-20 text-white bg-black px-4  '> {/*changed to h-20 instead of h-15**/}
          {/* Desktop Logo and Menu */}
      <div>
          <h1 className='text-4xl font-signature ml-2 '>Isaac</h1>
      </div>
      <ul className='hidden md:flex'>{/* the screen has to be bigger than 768px for menu to show on top in the flex format(each link next to each other)*/}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium'>
            {id === 5 ? (
              // Special case for "socials" link in desktop view
              <ul className="flex justify-between items-center icons">
                <li className='flex justify-between items-center px-2  text-white hover:scale-105 duration-300 hover:text-blue-500'>
                  <a href="https://www.linkedin.com/in/olivares-isaac/"
                    className='flex justify-between items-center px-2'
                  >
                    <>
                    <FaLinkedin size={30}/>
                    </>
                  </a>
                </li>
                <li className='flex justify-between items-center px-2  text-white hover:scale-105 duration-300 hover:text-blue-500'>
                  <a href="https://github.com/isaac9031"
                    className='flex justify-between items-center w-full'
                  >
                    <>
                    <FaGithub size={30}/>
                    </>
                  </a>
                </li>
                <li className='flex justify-between items-center px-2  text-white hover:scale-105 duration-300 hover:text-blue-500'>
                  <a href="https://gitlab.com/olivareshernandezisaac"

                    className='flex justify-between items-center w-full'
                  >
                    <>
                    <FaGitlab size={30}/>
                    </>
                  </a>
                </li>
              </ul>
            ) : (
              // Normal link rendering for other links
              <a
                className='hover:text-white  text-gray-500 '>
                {link}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle (Burger Icon) */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' > {/* Adding mobile version...burger icon. z-10 will be used to maintain the burger on top when mobile version is active, the x doesn't appear if z-10 is deleted*/}
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
          {/* Mobile Menu (Conditional Rendering). {nav && ()} it will render the code inside if this is nav is true*/}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black to-blue-800 text-gray-500 '> {/* Adding mobile version's list*/}
        {links.map(({id,link}) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            {id === 5 ? (
              // Special case for "about" link in desktop view
              <ul className="flex justify-between items-center icons">
                <li className='flex justify-between items-center px-2 hover:scale-107 duration-200'>
                  <a href="https://www.linkedin.com/in/olivares-isaac/"
                    className='flex justify-between items-center px-2 text-white'
                  >
                    <>
                    <FaLinkedin size={30}/>
                    </>
                  </a>
                </li>
                <li className='flex justify-between items-center px-2 hover:scale-105 duration-200'>
                  <a href="https://github.com/isaac9031"
                    className='flex justify-between items-center w-full text-white'
                  >
                    <>
                    <FaGithub size={30}/>
                    </>
                  </a>
                </li>
                <li className='flex justify-between items-center px-2 hover:scale-105 duration-200'>
                  <a href="https://gitlab.com/olivareshernandezisaac"

                    className='flex justify-between items-center w-full text-white'
                  >
                    <>
                    <FaGitlab size={30}/>
                    </>
                  </a>
                </li>
              </ul>
            ) : (
              // Normal link rendering for other links
              <a
                className='hover:text-gray-300'>
                {link}
              </a>
            )}
          </li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar



{/* <li className='px-4 cursor-pointer capitalize py-6 text-gray-500 hover:scale-110 duration-200'> {/* Adding mobile version's list*/}
// home
// </li> */}
// {links.map(({id,link}) => (
//   <li
//     key={id}
//     className='px-4 cursor-pointer capitalize py-6 text-4xl'>{/* Adding mobile version's list*/}
//     {link}
//   </li>
//   ))}
