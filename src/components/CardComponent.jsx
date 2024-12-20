import React from 'react'

const CardComponent = ({foodname,price,source}) => {
  return (
    <div className='m-10 flex justify-center items-center flex-col'>
    <div className='mt-[40px] flex flex-col justify-center'>
      <img src={source} alt="burger-image" className='w-[320px] h-[350px] rounded-lg' />
      <h4 className='font-bold text-2xl mt-4 '>{foodname}</h4>
      <p className='mt-4'>{price}</p> 
    </div>
    </div>
  )
}

export default CardComponent