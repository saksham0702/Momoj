import React from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import { trendingData } from './data'

const page = () => {
  return (
    <main className='  bg-slate-950'>
     
      <Hero  />
      <div className='h-[calc(100vh-12rem)] mt-16  '>
      <h2 className=' uppercase text-green-800 font-bold text-5xl font-mono h-20  ml-5 pt-2 stiky'> trending </h2>

      <hr className="h-1 mx-5 mb-5 bg-gray-200  dark:bg-green-900"></hr>

      <div className=' trending   overflow-x-scroll '>
      
        <div className='flex w-full gap-5'>
        {trendingData.map((item)=>(
             <Card  key ={item.id} title ={item.title} url ={ item.image} desc={item.desc}  detail={item.detail} />
          ))}
        </div>
     
      
     
      </div>
      </div> 
    </main>
  )
}

export default page
