import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import avatarImg from "../assets/project photo/images/avatar.png"

function Navbar() {
  const currentUser = true;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  
  const navigation=[
    
      {name:"Dashboard",href: "/dashboard"},
      {name:"Orders",href: "/orders"},
      {name:"cart Page",href: "/cart"},
      {name:"Check Out",href: "/checkout"}
    
  ]
  
  return (
    <header className="max-w-5xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="w-6 h-6" />
          </Link>

          {/* Search Input */}
          <div className="relative sm:w-72 w-40">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md pl-10 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className=" relative flex items-center md:space-x-4 space-x-2">
          
          {/* User */}
          {currentUser ? (
            <div className="relative">
              <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="w-7 h-7 rounded-full ring-2 ring-blue-500"
                />
              </button>

              {isDropDownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropDownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="w-6 h-6" />
            </Link>
          )}

          {/* Wishlist */}
          <button className="hidden sm:block">
            <HiOutlineHeart className="w-6 h-6" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="bg-primary text-white p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="w-5 h-5" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
