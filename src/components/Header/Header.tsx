import { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";
import { navs } from "./navs";
import LogoImage from "../LogoImage/LogoImage";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center">
        <LogoImage />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        {navs.map((currentNav) => (
          <NavLink
            key={currentNav.id}
            to={currentNav.path}
            className={({ isActive }) =>
              `text-gray-600 hover:text-gray-900 ${
                isActive ? "font-bold text-orange-500" : ""
              }`
            }
          >
            {currentNav.name}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navs.map((currentNav) => (
              <NavLink
                key={currentNav.id}
                to={currentNav.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-gray-900 ${
                    isActive ? "font-bold text-orange-500" : ""
                  }`
                }
              >
                {currentNav.name}
              </NavLink>
            ))}
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 w-full"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
