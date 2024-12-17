"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'



const data = [
  {
    id: 1,
    text: "Indulge in our juicy steamed momos, packed with fresh flavors and served piping hot. Perfect for a light yet satisfying meal!",
    img: "/steamed1.webp"
  },
  {
    id: 2,
    text: "Experience the irresistible saucy goodness of our tandoori momos, grilled to perfection straight out of the tandoor. A smoky treat you can’t resist!",
    img: "/tandoori1.webp"
  },
  {
    id: 3,
    text: "Savor the rich, creamy flavors of our Afghani momos. Don’t let them cool down—each bite is a journey into deliciousness!",
    img: "/afgani1.webp"
  }
  
];
const Hero = () => {

  const [currentSlide, setcurrentSlide] = useState(1);


  useEffect(() => {
    const interval = setInterval(()=>{
     setcurrentSlide(prev=>(prev===data.length-1 ? 0 : prev+1))
    },2000)
    return ()=> clearInterval(interval);
  },
  [])
  
  return (
    <div className=' pt-20 mx-3 flex flex-row h-[calc(100vh-3rem)] max-md:flex-col '>
      <div className='w-1/2 text-center flex flex-col gap-10 items-center justify-center max-md:w-full max-md:h-[30dvh]'>
      <h1 className='text-green-700 font-bold md:text-4xl px-5 text-xl md:font-semibold capitalize transition-all'>
     "{data[currentSlide].text}"
      </h1>    
      </div>
      <div className=' relative w-1/2  max-md:w-full max-md:h-[70dvh] '> 
   
    <Image className='object-cover rounded-xl'
      src={data[currentSlide].img}
      fill
    
      alt="Picture of kurkure momos"
    />
   </div>

    </div>
  )
}

export default Hero
