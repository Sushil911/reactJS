import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='flex bg-gray-800 w-full h-[80px]'>
          <img src="React.jpg" className=' pt-[15px] w-[80px] h-[70px] rounded-full ' alt="React-Logo" />
          <span className=' font-bold text-[30px] text-white pt-4'>ReactFacts</span>
        </nav>
      </header>
    </>
  )
}

export default Navbar