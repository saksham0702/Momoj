'use client'
import { vegItems, nonvegItems } from '@/app/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { useParams } from 'next/navigation'
import { FaIndianRupeeSign } from "react-icons/fa6";


const Page = () => {
  const params = useParams();
  const Items = params.Category==="non-veg"? nonvegItems : vegItems;
  return (
    <div className='pt-16 flex flex-wrap text-white bg-slate-950 font-mono'>
      {Items.map(
        (item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className='w-full h-[60vh] border-2 border-white sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-slate-900'
        >
          <div className='relative h-[80%] '>
            {item.img && (
              <Image
                src={item.img}
                alt= {item.title}
                fill
                className='object-contain'
              />
            )}
            <div className={`text-md font-extrabold text-center w-12  p-1 ${item.desc === "veg" ? "bg-green-700 font-mono" : "bg-red-700 w-20 font-mono font-extrabold"}`}>
              {item.desc}
            </div>
          </div>
          <div className='flex justify-between p-2 items-center '>
            <h1 className='text-xl'>
              {item.title}
            </h1>
            <div className=' font-extrabold flex items-center'>
             <FaIndianRupeeSign />
             <p>
             {item.price}
             </p>
          
            </div>
            <div className="hidden group-hover:block transition-transform">
              <Button title="order" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
  
}

export default Page
