import React from 'react'
import CardComponent from './CardComponent'

const Menusection = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-[80px] mb-0'>
    <h1 className='text-3xl font-bold'>
    Our Menu
    </h1>
    </div>
    <div className='flex justify-center items-center'>
    <CardComponent foodname="Burger" price="$15" />
    <CardComponent foodname="Pizza" price="$10" />
    <CardComponent foodname="Cold Coffee" price="$30" />
    </div>
    </>
  )
}

export default Menusection