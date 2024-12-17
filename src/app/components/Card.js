import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <div className=' border-2 rounded-3xl px-10 '>
      <div className='  flex item-center justify-center hover:rotate-12 transition-transform h-52 w-52 '>
      <Image className='  object-contain rounded-full  '
      alt='image of momo'
      height={200}
      width={200}
      src= {props.url}
      />
        </div>
      <div className='font-semibold text-white font-mono text-lg capitalize '>
       {props.title}
      </div>
      <div className={`bg-slate-950 text-sm text-center p-2 font-sans rounded-xl  ${props.desc==="veg"? "text-red-700":"text-green-700"}`}>
       "{props.detail}"
       </div>
      <div className={`font-extrabold pb-3 ${props.desc==="veg"? "text-green-700":"text-red-700"}`}>
        {props.desc}
      </div>
    </div>
  )
}

export default Card
