import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold"><Link href="/">Vandelay Industries</Link></h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">
            <Link href="/">Home</Link>
          </li>
          <li className="navbarLi">
            <Link href="/about">about</Link>
          </li>
          <li className="navbarLi">
            <Link href="/services">Services</Link>
            </li>
          <li className="navbarLi">
          <Link href="/projects">Projects</Link>
          </li>
          <li className="navbarLi">
          <Link href="/blog">Blog</Link>
          </li>
          <li className="navbarLi">
          <Link href="/shop">Shop</Link>
          </li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-hoverColor" />
          <div className="relative">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
          <Link href="/contact">Get in Touch</Link>
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;