import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='w-full bg-gray-700 text-white text-lg flex justify-center items-center h-[50px] gap-[100px]'>
        <Link
        to='menu'
        smooth={true}
        duration={500}
        className='cursor-pointer hover:bg-gray-300 p-1 rounded-md'
        >
        Menu
        </Link>
        <Link
        to='menu'
        smooth={true}
        duration={600}
        className='cursor-pointer hover:bg-gray-300 p-1 rounded-md'
        >
        Specials
        </Link>
        <Link
        to='about'
        smooth={true}
        duration={800}
        className='cursor-pointer hover:bg-gray-300 p-1 rounded-md'
        >
        About
        </Link>
        <Link
        to='contact'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:bg-gray-300 p-1 rounded-md'
        >
        Contact
        </Link>
        </div>
      </nav>
      </>
  )
}

export default Navbar