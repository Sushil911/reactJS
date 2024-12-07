import React from 'react'

const DynamicContent = ({name,age,location}) => {
  return (
    <>
      <span>Hi my name is {name} and I am {age} years old. I live in {location}</span>
    </>
  )
}

export default DynamicContent