import React, { useState } from 'react'

const Button = ({title}) => {
    const [count, setcount] = useState(0)
  return (
    <>
      <button onClick={()=>{setcount((count)=> count+1)}} className='rounded-md bg-purple-500 text-slate-200 p-2 m-7 hover:bg-purple-700 '>{title} :{count}</button>
    </>
  )
}

export default Button