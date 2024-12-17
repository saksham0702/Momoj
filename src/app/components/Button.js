import React from 'react'


const Button = (props) => {

  return (
    <button className='bg-green-600 rounded-full py-2 px-3  text-white '>
      {props.title}
    </button>
  )
}

export default Button
