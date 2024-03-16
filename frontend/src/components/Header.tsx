import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HEADER_BUTTONS,
  RESPONSIVE_HEADER_BUTTONS,
} from "../constants/ButtonData";

import Logo from "../assets/images/logo.jpg";
import { ArrowIcon } from "../assets/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = window.location.pathname;

  return (
    <header className="h-20 shadow-lg flex justify-around items-center sticky top-0 z-50 w-full bg-white">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="w-52" />
        </Link>
      </div>
      <div className="w-1/3 justify-around hidden md:flex gap-4">
        {HEADER_BUTTONS.map((item: any, index: number) => (
          <div key={index} className={`relative group`}>
            <Link
              to={item.path}
              key={index}
              className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-primary flex gap-2 group text-xs lg:text-sm xl:text-base`}
            >
              {item.name}
              {item.dropdown && <ArrowIcon />}
            </Link>
            {item.dropdown && (
              <div className="absolute items-center w-[160px] invisible gap-2 flex flex-col opacity-0 group-hover:visible shadow-lg translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 bg-white transition-all duration-300">
                <div className="bg-primary w-full h-2" />
                {item.dropdown.map((item: any, index: number) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="font-semibold transition-all duration-300 hover:scale-105 hover:text-primary py-4 px-10 text-xs lg:text-sm xl:text-base"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="absolute w-full top-10 flex flex-wrap items-center justify-between mx-auto pt-4 md:hidden">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full transition-all duration-300`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-6 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse">
            {RESPONSIVE_HEADER_BUTTONS.map((button: any, index: number) => (
              <li key={index}>
                <Link
                  to={button.path}
                  className={`
                  py-2 px-3 bg-primary rounded flex items-center ${
                    path === button.path
                      ? "bg-primary font-bold text-white"
                      : "bg-transparent text-black"
                  }
                  `}
                  aria-current="page"
                >
                  {button.path === path && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width={30}
                      className="transition-all -translate-x-2 group-hover:translate-x-0 fill-current text-white group-hover:text-primary hover:scale-105"
                      height={30}
                      id="dot"
                    >
                      <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
                    </svg>
                  )}
                  {button.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
