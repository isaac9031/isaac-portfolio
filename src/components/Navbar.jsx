import React, { useCallback, useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const[nav, setNav] = useState(false)

  const links = [
    {
      id:1,
      link:'home',
    },
    {
      id:2,
      link:'about',
    },
    {
      id:3,
      link:'projects',
    },
    {
      id:4,
      link:'experience',
    },
    {
      id:5,
      link:'contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-15 py-4 text-white bg-black fixed px-4'>
          {/* Desktop Logo and Menu */}
      <div>
          <h1 className='text-5xl font-signature ml-2 '>Isaac</h1>
      </div>
      <ul className='hidden md:flex'>  {/* the screen has to be bigger than 768px for menu to show on top in the flex format(each link next to each other)*/}
        {links.map(({id,link}) => (
        <li
          key={id}
          className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          {link}
        </li>
        ))}
      </ul>
      {/* Mobile Menu Toggle (Burger Icon) */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' > {/* Adding mobile version...burger icon. z-10 will be used to maintain the burger on top when mobile version is active*/}
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
          {/* Mobile Menu (Conditional Rendering). {nav && ()} it will render the code inside if this is nav is true*/}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-fit  bg-gradient-to-b from-black to-blue-800 text-gray-500'> {/* Adding mobile version's list*/}
        {links.map(({id,link}) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            {link}
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
