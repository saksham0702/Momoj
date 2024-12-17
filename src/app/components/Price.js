"use client"
import { useAppDispatch } from "@/lib/hooks";
import React from "react";
import { useState,useEffect } from "react";
import { add } from "@/lib/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Price = (props) => {
  const dispatch = useAppDispatch();
 const [id, setid] = useState(props.id)

  const cartItemPro = useSelector( (state) =>(state.cart.allProducts[id]
  ));
 const addTOCart = (cartItemPro) =>{
        dispatch(add(cartItemPro))
        alert("added to cart")    
 }
   return (
    <div className="text-slate-50 font-mono flex flex-col items-center md:pt-5">
       <div className="font-extrabold pt-2 flex gap-10">
      </div>
      <div className="flex  items-center gap-3 border-2 pl-2">
      <p className="flex items-center">
      <FaIndianRupeeSign />
        {props.price}
      </p>
      <button onClick={() => addTOCart(cartItemPro)}
         className="uppercase p-2 bg-slate-50 text-slate-950 text-sm font-extrabold ">
          add to cart
        </button>
      </div>
     
      </div>
  );
};

export default Price;
