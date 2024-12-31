

"use client"
import Link from 'next/link';
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const carties = useAppSelector((state) => state.cart.cartItems.length);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const navItems = ['Home', 'Menu'];
  const routes = ['/', '/Menu'];

  return (
    <nav className="z-[9999] bg-slate-900 pt-2 h-14 fixed w-full shadow-md">
      <div className="flex items-center justify-between px-4 md:px-20 capitalize p-1">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-center gap-8 md:gap-16 text-zinc-100 font-semibold max-md:hidden">
          {navItems.map((item, index) => (
            <Link
              className="hover:bg-green-600 hover:text-zinc-100 px-3 rounded-full hover:scale-[1.1] transition-transform"
              key={index}
              href={routes[index]}
              onClick={toggleNavbar}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <h1 className="font-semibold text-xl md:text-2xl text-slate-950 bg-zinc-50 rounded-full px-3 mt-1 text-center font-mono uppercase md:static md:mx-auto md:translate-x-0 max-md:left-1/2 max-md:-translate-x-1/2 absolute top-2">
          momoj
        </h1>

        {/* Cart */}
        <div className="flex items-center cursor-pointer text-slate-50 hover:scale-[1.1] transition-transform">
          <Link className="text-2xl" href="/Mycart">
            <CiShoppingCart />
          </Link>
          <h4 className="text-xl">({carties})</h4>
        </div>

        {/* Hamburger Menu */}
        <div
          className="flex items-center text-2xl text-white md:hidden hover:scale-[1.1] transition-transform z-50"
          onClick={toggleNavbar}
        >
          {isClick ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className="z-30 pt-5 pb-6 bg-slate-900 flex flex-col items-center justify-center gap-8 text-zinc-100 font-semibold w-full md:hidden transition-all duration-300">
          {navItems.map((item, index) => (
            <Link
              className="hover:text-white hover:scale-[1.1] transition-transform"
              key={index}
              href={routes[index]}
              onClick={toggleNavbar}
            >
              {item}
            </Link>
          ))}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;

