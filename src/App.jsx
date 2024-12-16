import React from 'react'
import { useState } from 'react'

const App = () => {
  const [length, setlength] = useState(8)
  return (
    <>
    <div className=' flex flex-col items-center justify-center w-[600px] h-[100px] bg-gray-500 ml-[400px] mt-[100px] rounded-md'>
      <div className='relative w-[400px] h-[30px] rounded-lg bg-white mt-[10px]'>
        <button className='p-[3px] pl-[10px] pr-[6px] h-[30px] bg-blue-500 text-white absolute right-0'>copy</button>
      </div>
      <div className='ml-[150px]'>
      <span className='mr-4'>
      Length({length})
      </span>
      <input type="checkbox" className='rounded-md' />
      <span className='mr-4 ml-1'>Numbers</span>
      <input type="checkbox" className='rounded-md' />
      <span className='ml-1'>
      Characters
      </span>
      </div>
    </div>
    </>
  )
}

export default App