import React, { useState } from "react";
import { FaBars, FaUserAlt, FaRegLaughSquint } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/jokes",
      name: "Jokes",
      icon: <FaRegLaughSquint />,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div
        className={`bg-white text-gray-800 h-full transition-width duration-300 shadow-md ${
          isOpen ? "w-64" : "w-16"
        }`}>
        <div className="flex items-center p-5 border-b border-gray-200">
          <h1
            className={`text-xl font-semibold ${isOpen ? "block" : "hidden"}`}>
            Logo
          </h1>
          <div
            className={`ml-auto text-2xl cursor-pointer ${
              isOpen ? "ml-12" : "ml-2"
            }`}
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            <FaBars />
          </div>
        </div>
        <nav className="mt-4">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center p-3 transition-colors duration-300 rounded-lg mb-2 ${
                  isActive
                    ? "bg-gray-200 text-gray-800"
                    : "hover:bg-gray-100 hover:text-gray-800"
                }`
              }>
              <div className={`text-2xl ${!isOpen ? "ml-1" : ""}`}>
                {item.icon}
              </div>
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default Sidebar;
