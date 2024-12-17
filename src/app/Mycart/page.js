"use client";
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { remove } from "@/lib/features/cart/cartSlice";

const CartPage = () => {
  const productItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  // Local state to manage quantity
  const [quantities, setQuantities] = useState(productItems.map((item) => item.quantity));

  // Handler to update quantity
  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  return (
    <div className=" scroll min-h-[calc(100vh-5rem)] bg-slate-950 p-4  text-white ">
      <h1 className="text-2xl font-semibold mb-4  ">Your Cart</h1>
      <div className="space-y-4  ">
        {productItems.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-around  md:mx-32 p-4 border border-gray-700 rounded-md"
          >
            {/* Image and Title */}
            <div className="flex items-center space-x-4">
              <Image
                src={item.img} // Make sure your cart items have imageUrl
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className=" md:text-lg  text:md md:font-bold  font-semibold text-wrap md:text-nowrap w-20 leading-4  uppercase">{item.title}</h2>
                <p className={` md:text-sm text-xs font-bold ${item.desc == "veg" ? "text-green-600" : "text-red-600"}`}>
                  {item.desc} {/* Veg or Non-Veg */}
                </p>
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="flex flex-col  items-center text-sm">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleQuantityChange(index, Math.max(1, quantities[index] - 1))
                  }
                  className="px-2 py-1 bg-gray-700 rounded"
                >
                  -
                </button>
                <span className="md:text-lg font-medium">{quantities[index]}</span>
                <button
                  onClick={() => handleQuantityChange(index, quantities[index] + 1)}
                  className="px-2 py-1 bg-gray-700 rounded"
                >
                  +
                </button>
              </div>
              <p className="text-sm mt-2 flex items-center">
                <FaIndianRupeeSign /> {item.price * quantities[index]} {/* Total Price */}
              </p>
            </div>

            {/* Delete Button */}
            <div>
              <button
                onClick={() => dispatch(remove(item.id))}
                className="text-red-500 hover:text-red-700 hover:scale-125 transition-transform"
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div className="mt-6 p-4  border-t border-slate-700 flex gap-5 relative md:mx-32 ">
      <div className="flex gap-5 items-center ">
      <h3 className="text-xl font-semibold">Total Price :</h3>
          <p className="text-lg flex items-center">
            <FaIndianRupeeSign />
            {productItems.reduce(
              (total, item, index) => total + item.price * quantities[index],
              0
            )}
          </p>
      </div>
          <div className="flex gap-5 items-center">
          <h3 className="text-xl font-semibold">Total Items :</h3>
          <p className="text-lg relative top-0.5">{productItems.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

