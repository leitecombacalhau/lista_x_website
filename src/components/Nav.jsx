import headerLogo from "../assets/images/headerlogo.svg";
import hamburger_black from "../assets/icons/hamburger_black.svg";
import hamburger_white from "../assets/icons/hamburger_white.svg";
import dropdownArrow_black from "../assets/icons/dropdown_arrow_black.svg";
import dropdownArrow_white from "../assets/icons/dropdown_arrow_white.svg";
import { navLinks } from "../constants/index";

import "./Rotationanim.css";

import { useState } from "react";

const Nav = () => {
  const [rotation, setRotation] = useState(0);
  const [menu, setMenu] = useState([false, false, false]);

  const rotateImage = () =>
    setRotation((prevRotation) => (prevRotation + 90) % 180);

  const toggleMenu = (index) =>
    setMenu((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

  return (
    <div>
      <div className="w-full border-2 gradient-border fixed z-20 top-0" />
      <header className="absolute z-10 w-full">
        {/* DESKTOP MENU */}
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center max-container bg-background pt-4 select-none">
          <a href="/" className="pl-16 max-sm:pl-2 2xl:pl-0 2xl:pr-48 pb-2">
            <img src={headerLogo} alt="Logo" width={180} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-32 2xl:gap-56 max-lg:hidden">
            {navLinks.map((item) => (
              <div key={item.label} className="flex items-center">
                <li>
                  <span
                    onClick={() => toggleMenu(item.index)}
                    className="cursor-pointer mr-2 font-montserrat leading-normal text-xl font-bold text-text underline underline-offset-4 decoration-accent decoration-[4px]"
                  >
                    {item.label}
                  </span>
                  {item.submenu && (
                    <div
                      className={`absolute menu ${
                        menu[item.index] ? "fade-in" : "fade-out"
                      }`}
                    >
                      <div className="py-3">
                        <div className="w-4 h-4 left-4 absolute mt-1 bg-accent rotate-45"></div>
                      </div>
                      <div className="bg-accent p-2 rounded">
                        {item.sublinks.map((subitem) => (
                          <li key={subitem.label}>
                            <a
                              href={subitem.href}
                              className="font-montserrat leading-[30px] text-background text-lg font-medium"
                            >
                              {`• ${subitem.label}`}
                            </a>
                          </li>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <img
                    src={dropdownArrow_black}
                    alt="Dropdown Arrow"
                    key={item.index}
                    width={20}
                    height={20}
                    className={`dropdown-arrow cursor-pointer ${
                      menu[item.index] ? "flipped" : ""
                    }`}
                    onClick={() => toggleMenu(item.index)}
                  />
                </li>
              </div>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU */}
        <div
          className="hidden max-lg:block menu-container fixed top-0 right-0 h-full w-5/12 bg-accent p-4"
          style={{
            transform: rotation !== 0 ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <nav className="hidden max-lg:block flex-col py-12 select-none">
            <ul className="flex-col flex gap-4">
              {navLinks.map((item) => (
                <div key={item.label} className="group">
                  <li>
                    <span
                      onClick={() => toggleMenu(item.index)}
                      className="cursor-pointer font-montserrat leading-normal text-xl font-bold text-background underline underline-offset-4 decoration-background decoration-[4px]"
                    >
                      {item.label}
                    </span>

                    <img
                      src={dropdownArrow_white}
                      alt="Dropdown Arrow"
                      key={item.index}
                      width={25}
                      height={25}
                      className={`dropdown-arrow cursor-pointer absolute right-4 inline ${
                        menu[item.index] ? "flipped" : ""
                      }`}
                      onClick={() => toggleMenu(item.index)}
                    />

                    {item.submenu && (
                      <div
                        className={`${
                          menu[item.index] ? "block" : "hidden"
                        } pt-2`}
                      >
                        {item.sublinks.map((subitem) => (
                          <li key={subitem.label}>
                            <a
                              href={subitem.href}
                              className="font-montserrat leading-[30px] text-background text-lg font-medium"
                            >
                              {`• ${subitem.label}`}
                            </a>
                          </li>
                        ))}
                      </div>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </nav>
        </div>

        {/* HAMBURGER ICON */}
        <div className="hidden max-lg:block image-rotator-container fixed top-0 right-0 p-4">
          <img
            src={rotation !== 0 ? hamburger_white : hamburger_black}
            alt="Hamburger"
            width={25}
            height={25}
            className="rotatable-image cursor-pointer select-none"
            style={{ transform: `rotate(${rotation}deg)` }}
            onClick={rotateImage}
          />
        </div>
      </header>
    </div>
  );
};

export default Nav;
