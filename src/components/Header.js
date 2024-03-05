import React from "react";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-20 bg-white ">
      <div className="w-full  flex justify-evenly items-center p-4 flex-wrap">
        <a href="#" className="flex justify-center items-center">
          <img src={logo} alt="Header Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-semibold">GeeksFoods</h1>
        </a>
        <div className=" hidden md:flex gap-6 font-medium">
          <ul className="flex gap-6">
            <li>
              <a href="#" className=" hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-400"
                style={{ color: "rgb(59, 130, 246)" }}
              >
                Quote
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">
                Resturants
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">
                Foods
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-blue-700 text-white font-medium cursor-pointer text-sm py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
            Get Started
          </button>
          <i className="bx bx-menu text-4xl md:hidden">
            <GiHamburgerMenu />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
