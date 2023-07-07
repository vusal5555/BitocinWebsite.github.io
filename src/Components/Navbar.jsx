import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="sticky top-0 left-0 shadow-lg bg-gray-100 z-50">
      <div className="max-w-[1140px] m-auto flex items-center justify-between py-5 px-4 lg:px-0">
        <a href="#hero">
          <h1 className="text-3xl lg:text-5xl font-bold">
            De<span className="text-green-700">Fi</span>
          </h1>
        </a>

        <ul className="hidden lg:flex items-center gap-5 text-md font-semibold">
          <li>
            <a href="#hero">Home</a>
          </li>

          <li>
            <a href="#coin">Featured</a>
          </li>
          <li>
            <a href="#earn">Earn</a>
          </li>
          <li>
            <a href="#footer">Contact</a>{" "}
          </li>
        </ul>

        <div>
          <button className="lg:block py-2 px-5 bg-green-600 rounded-md text-white">
            Connect Wallet
          </button>
        </div>

        <GiHamburgerMenu
          size={25}
          onClick={() => setNav(!nav)}
          className="block lg:hidden"
        ></GiHamburgerMenu>

        {nav ? (
          <ul className="fixed top-0 right-0 w-[200px] h-screen bg-white border border-b-5 border-black-500 flex flex-col items-center pt-[5rem] gap-5 text-md font-semibold duration-200 lg:hidden ">
            <AiOutlineClose
              className="absolute top-3 right-3"
              size={25}
              onClick={() => setNav(false)}
            ></AiOutlineClose>
            <li>Home</li>
            <li>Featured</li>
            <li>Earn</li>
            <li>Contact</li>
          </ul>
        ) : (
          <ul className="fixed top-0 right-[-100%] w-[200px] h-screen bg-white  border border-b-5 border-black-500 flex flex-col items-center pt-[5rem] gap-5 text-md font-semibold duration-200 lg:hidden">
            <AiOutlineClose
              className="absolute top-3 right-3"
              size={25}
              onClick={() => setNav(false)}
            ></AiOutlineClose>
            <li>Home</li>
            <li>Featured</li>
            <li>Earn</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
