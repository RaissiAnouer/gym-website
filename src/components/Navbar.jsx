import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between  py-8 ">
      <ul>
        <NavLink to="/">
          <p className="text-[#8FFF00] font-semibold ">HEAVY</p>
        </NavLink>
      </ul>

      <ul className="hidden sm:flex text-white  gap-8  text-xs items-center">
        <NavLink to="/">
          <p className="font-thin">HOME</p>
        </NavLink>

        <NavLink to="/contact">
          <p className="font-thin">CONTACT</p>
        </NavLink>
        <button className="bg-[#17181F] rounded-md px-4 py-2 text-white cursor-pointer border border-[#8FFF00]  font-thin hover:bg-[#8FFF00] hover:text-black hover:font-light transition duration-300 ease-in-out">
          JOIN NOW
        </button>
      </ul>

      <img
        onClick={() => setVisible(true)}
        src={assets.menu}
        className="w-5 cursor-pointer sm:hidden"
        alt=""
      />

      {/*--------------------Side bar--------------------*/}
      <div
        className={`absolute top-0 buttom-0 right-0 overflow-hidden bg-gray-200 transition-all  ${
          visible ? "w-full h-full" : "w-0 h-0"
        }`}
      >
        {/*---------------------close the side bar ---------------------*/}
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Close</p>
          </div>

          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 hover:bg-gray-200 rounded mx-3 px-2 mt-3 text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/guides"
            onClick={() => setVisible(false)}
            className="py-2 hover:bg-gray-200 rounded mx-3 px-2 text-center"
          >
            Guides
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 hover:bg-gray-200 rounded mx-3 px-2 text-center "
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
