"use client";
import React from "react";
import { nonvegItems, singleItem, vegItems } from "@/app/data";
import Image from "next/image";
import Price from "@/app/components/Price";
import { useParams } from "next/navigation";

const page = () => {
  const url = useParams();
  const singleProduct = url.id < 6 ? vegItems : nonvegItems;

  return (
    <div className="bg-slate-950 h-[calc(100vh-7rem)] text-white">
      {singleProduct.map(
        (item , index)  =>
          
          url.id == item.id && (
           <div key={index} className=" flex md:flex-row flex-col h-full w-full pt-12 md:pt-24">
            <div className=" w-full md:w-1/2 h-72 md:h-full relative  "> 
                <Image src={item.img}
                alt="Momo Image"
                fill
                className=" object-contain absolute ">

                </Image>
              </div>


          <div className="flex flex-col items-center justify-center  md:w-1/2 md:pr-24 md:h-full  ">
          <p className="text-lg uppercase font-semibold md:text-3xl text-slate-200">
              {item.title}
            </p>

            <p className={`font-bold text-sm md:text-xl 
              ${item.desc == "non-veg" ? " text-red-500" : "text-green-500"}`}>
              {item.desc}</p>

            <p className=" px-5 text-sm md:text-xl  font-semibold text-slate-500">
              "{item.detail}"
            </p>

            <div>
            
            <Price price={item.price} options={item.options} id ={item.id} />
            </div>
          </div>
           </div>
          )
      )}
    </div>
  );
};

export default page;
