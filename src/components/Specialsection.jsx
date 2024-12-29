import React from 'react'

const Specialsection = () => {
return ( <>
  <p className='ml-[700px]'>
  Chef's Special
  </p>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-[40px]'>
      <div className='shadow-lg w-[400px] h-[150px] rounded-xl'>
        <h1 className='text-lg font-extralight'>
        Truffle Burger
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus numquam, officiis eaque expedita quidem ipsa.
        </p>
      </div>
      <div className='shadow-lg w-[400px] h-[150px] rounded-xl'>
        <h1 className='text-lg font-extralight'>
          Lobster Bisque
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde debitis recusandae veniam molestias ex.
        </p>
      </div>
      <div className='shadow-lg w-[400px] h-[150px] flex justify-center items-center flex-col rounded-xl'>
        <h1 className='text-lg font-extralight '>momo</h1>
        <p className='mx-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, earum numquam culpa quae ad illo.
        </p>
      </div>
    </div>
  </>
  )
}

export default Specialsection