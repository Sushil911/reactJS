import React from 'react'
import CardComponent from './CardComponent'
import foodItems from '../constants/fooditem'
const Menusection = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-[80px] mb-0'>
    <h1 className='text-3xl font-bold'>
    Our Menu
    </h1>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 m-7 ml-[130px]'>
    {foodItems.map((item)=>(
      <CardComponent
      id={item.id}
      foodname={item.foodname}
      price={item.price}
      source={item.source}
      />
    ))}
    </div>
    </>
  )
}

export default Menusection