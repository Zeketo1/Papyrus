import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const activeOptions = [
    { text: "Home", route: "/" },
    { text: "Gallery", route: "/gallery" },
    { text: "About", route: "/about" },
    { text: "Contact Us", route: "/contact" },
  ];

  const [activeOption, setActiveOption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const removeMenu = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        className={`font-poppins z-[100] flex justify-between items-center px-3
         glass py-1 sticky top-0 right-0`}
      >
        <Link to="/" className="text-[30px] font-serif text-black">
          Papyrus
        </Link>

        <div className="flex min-[360px]:hidden sm:flex sm:gap-4 md:gap-8 ">
          {activeOptions.map(({ text, route }, i) => (
            <Link
              to={route}
              key={i}
              onClick={() => setActiveOption(i)}
              className={`cursor-pointer sm:text-[14px] md:text-[16px] ${
                i === activeOption ? "underline" : ""
              }`}
            >
              {text}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <Link to="/cart">
            <HiOutlineShoppingCart className="text-[20px]" />
          </Link>
          <div className="relative block sm:hidden">
            {/* Burger Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 text-black rounded focus:outline-none`}
            >
              {/* Burger Icon */}
              <CiMenuFries />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute translate-y-1 -right-2 mt-2 w-40 bg-white text-gray-800 rounded-b-md shadow-lg overflow-hidden z-20 ${
                isOpen ? "" : "hidden"
              }`}
            >
              {activeOptions.map(({ text, route }, i) => (
                <div
                  key={i}
                  onClick={i === 4 ? removeMenu : toggleMenu}
                  className={`transition duration-500 flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200`}
                >
                  <Link className="w-full z-10" to={`${route}`}>
                    {text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
