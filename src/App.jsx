import React, { useState } from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import DynamicContent from './components/DynamicContent'
import Body from './components/body'


const App = () => {
  return (
    <div className='flex justify-center items-center mt-8'>
    <div className=' border-2 border-solid w-[600px] h-[600px]'>
    <Navbar />
    <Body />
    </div>
    </div>
  )
}

export default App