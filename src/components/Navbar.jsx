import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className={`sticky ${visible ? "h-[300px]" : ""} transition-all`}>
        <header className="flex items-center justify-between py-5 font-medium">
          <NavLink to="printnexus/home">
            <img src={assets.logo} alt="Logo" className="w-40" />
          </NavLink>
          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink
              className="flex flex-col items-center gap-1 hover:text-black"
              to="printnexus/home"
            >
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>
            <NavLink
              className="flex flex-col items-center gap-1 hover:text-black"
              to="printnexus/collection"
            >
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>
            <NavLink
              className="flex flex-col items-center gap-1 hover:text-black"
              to="PrintNexus/about"
            >
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>
            <NavLink
              className="flex flex-col items-center gap-1 hover:text-black"
              to="printnexus/contact"
            >
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[2px] bg-black hidden" />
            </NavLink>
          </ul>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer sm:hidden"
          />
        </header>
        {/* SideBar Menu */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden sidebar-menu bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3 cursor-pointer">
              <img
                onClick={() => setVisible(false)}
                src={assets.dropdown_icon}
                alt="BacK"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="printnexus/home"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="printnexus/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="printnexus/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="printnexus/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
