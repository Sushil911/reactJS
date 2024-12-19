import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='w-full bg-gray-700 text-white text-lg flex justify-center items-center h-[50px] gap-[100px]'>
        <a href="#menu">Menu</a>
        <a href="#menu">Specials</a>
        <a href="#aboutus">About Us</a>
        <a href="#contact">Contact</a>
        </div>
      </nav>
      </>
  )
}

export default Navbar