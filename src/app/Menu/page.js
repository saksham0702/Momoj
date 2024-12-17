import React from 'react'

import { menuItem } from '../data'
import Link from 'next/link'

const page = () => {
  return (
    <div className='  text-white h-[calc(100vh-7rem)] 
      bg-slate-950 flex items-center justify-center  pt-3 pb-16'>

      <div className='flex flex-col md:flex-row h-[75dvh] w-full mt-20 md:mx-10 md:h-full md:gap-5 pt-5 '>
         {
          menuItem.map((Category)=>(
            <Link 
            href={`/Menu/${Category.slug}`}
            key={Category.id}
            className='h-full w-full bg-cover   '
            style={{backgroundImage : `url(${Category.img})`}} >
              <div className='bg-black/80 flex flex-col md:gap-10 h-full hover:bg-black/60 transition-transform  '> 
                <h1 className={`text-xl md:text-3xl font-bold underline font-mono px-10 pt-2 capitalize
                   ${Category.title == "veg momo" ? "text-green-600" : "text-red-600"}`}>
                  {Category.title}
                </h1>
                 <p className=' text-sm font-semibold pt-5 pb-2 px-5 text-slate-300 md:text-xl'>
                 "{Category.desc}"
                 </p>
                 <button className='  rounded-full  bg-green-700 font-semibold mx-5 px-3 w-20 '>explore</button>


              </div>
              
            </Link>
          ))
         }
      </div>
    
    </div>
  )
}

export default page

