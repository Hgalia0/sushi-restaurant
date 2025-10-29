import React, { useMemo, useState } from "react";
import Cart from "./Cart"; // make sure the file name/path is correct
import { Menu, X } from "lucide-react"; 

export default function NavBar({ cartCount, cartItems, setCartItems }) {
  const [open, setOpen] = useState(false);
    const [opened, setOpened] = useState(false);

  const displayedItems = useMemo(() => {
    if (!Array.isArray(cartItems)) return [];
    return cartItems;
  }, [cartItems]);

  return (
    <div className="flex items-center relative ">
    
      <div className="flex items-center gap-90 ml-30 mt-[-40px]  ">



        <div className="flex items-center gap-1 sm:ml-10 max-sm:ml-[-120px] relative">
          <img src="./logonav.jpg" alt="" className="w-18 max-sm:w-14" />
          <div className="text-[18px] max-sm:text-[14px] font-bold italic font-serif flex flex-col gap-0 max-sm:text-l">
            <p>Suchi</p>
            <p className="text-[#FEAA36]">
              Garden<span className="text-black">dz</span>
            </p>
          </div>
        </div>

        <div className="max-sm:hidden flex items-center gap-4 font-semibold text-[16px] text-gray-600">
          <a
            href="#home"
            className="h-20 flex items-center justify-center px-4 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="h-20 flex items-center justify-center px-4 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
          >
            Menu
          </a>
          <a
            href="#contact"
            className="h-20 flex items-center justify-center px-4 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* 🌙 Right section - Lamp + Cart + Socials */}
      <div className="flex items-center max-sm:ml-40">
        <img src="./lamp.png" alt="" className="w-20 sm:ml-100 max-sm:w-0" />

        {/* 🛒 Cart Icon */}
        <div className="relative cursor-pointer " onClick={() => setOpen(!open)}>
          <img src="./card.png" alt="cart" className="w-8 mt-[-40px]" />
          {cartCount > 0 && (
            <span className="absolute top-[-35px] right-0 bg-red-500 w-3 h-3 rounded-full"></span>
          )}
        </div>








        {/* Cart dropdown */}
        {open && (
          <div className="absolute right-0 top-10 bg-white shadow-lg rounded-xl w-80 p-4 z-50">
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
          </div>
        )}

         {/* Mobile Menu Button */}
      <button
        className="sm:hidden max-sm:mt-[-45px] text-[#4b2e05]"
        onClick={() => setOpened(!opened)}
      >
        {opened ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {opened && (
        <div className="absolute border border-amber-800  top-full left-0 w-100 bg-white shadow-lg flex p-10 flex-col items-center  py-4 gap-2 text-gray-700 font-semibold sm:hidden animate-fadeIn">
          <a
            href="#home"
            className="w-full text-right py-2 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
    <div className='border border-t-[#efa236] w-90'></div>
          <a
            href="#menu"
            className="w-full text-right py-2 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Menu
          </a>
          <div className='border border-t-[#efa236] w-90'></div>
          <a
            href="#contact"
            className="w-full text-right py-2 hover:bg-[#FEAA36] hover:text-white transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
      </div>









      
    </div>
  );
}
