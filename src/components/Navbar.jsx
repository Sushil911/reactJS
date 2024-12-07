import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='flex bg-gray-800 w-full h-[80px]'>
          <img src="React.jpg" className='w-[80px] h-[50px] rounded-full ' alt="React-Logo" />
          <span className='pl-5 text-white'>ReactFacts</span>
        </nav>
      </header>
    </>
  )
}

export default Navbar