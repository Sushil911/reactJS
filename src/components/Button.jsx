import React from 'react'

const Button = ({title,className,onPress}) => {
  return (
    <>
    <button className={className} onClick={onPress}>{title}</button>
    </>
  )
}

export default Button