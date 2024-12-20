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
    <CardComponent foodname="Burger" price="$15" source="https://shorturl.at/H78nN" />
    <CardComponent foodname="Pizza" price="$10" source="https://shorturl.at/pmsjL" />
    <CardComponent foodname="Cold Coffee" price="$30" source="https://shorturl.at/aJyhm   " />
    </div>
    </>
  )
}

export default Menusection