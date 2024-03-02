import { Link } from "react-router-dom";
import { HEADER_BUTTONS } from "../constants/ButtonData";

import Logo from "../assets/images/logo.jpg";
import { ArrowIcon } from "../assets/icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-20 shadow-lg flex justify-around items-center sticky top-0 z-50 w-full bg-white">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="w-52" />
        </Link>
      </div>
      <div className="w-1/2 justify-around hidden md:flex">
        {HEADER_BUTTONS.map((item, index) => (
          <div key={index} className={`relative group`}>
            <Link
              to={item.path}
              key={index}
              className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-primary flex gap-2 group`}
            >
              {item.name}
              {item.dropdown && <ArrowIcon />}
            </Link>
            {item.dropdown && (
              <div className="absolute items-center w-[160px] invisible gap-2 flex flex-col opacity-0 group-hover:visible shadow-lg translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 bg-white transition-all duration-300">
                <div className="bg-primary w-full h-2" />
                {item.dropdown.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="font-semibold transition-all duration-300 hover:scale-105 hover:text-primary py-4 px-10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex md:hidden">
        <label className="relative z-40 cursor-pointer px-3 py-6">
          <input className="peer hidden" type="checkbox" id="mobile-menu" />
          <div className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
          <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
            &nbsp;
          </div>
          <div className="fixed bg-orange-500 top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
            <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
              <menu>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </menu>
            </div>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
