import React, { useState, useRef, useEffect, useContext } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { Collapse } from "./Menu";

import { AuthContext } from "./AuthContext";

function Sidebar({ pathname, showNav, updateNav }) {
  const { nav_bar_items } = useContext(AuthContext);
  const menus = nav_bar_items;

  const sideRef = useRef();

  useEffect(() => {
    if (showNav) {
      sideRef.current.classList.add("zoom_w");
    }
  }, []);

  return (
    <div className="flex font-bold relative">
      {showNav && (
        <div
          ref={sideRef}
          className="-md:absolute top-0 bottom-0 z-50 bg-gray-200 flex flex-col flex-grow overflow-y-scroll scroll_y min-w-[300px]"
        >
          <div className="flex sticky top-0 justify-end">
            <div
              onClick={() => updateNav(false)}
              className="hover:bg-white text-blue-800 hover:text-blue-800 rounded-full hover:bg-white p-2 cursor-pointer m-2"
            >
              <FaWindowClose />
            </div>
          </div>
          <div className="flex-grow mx-4">
            {menus.map((menu, index) => {
              return (
                <Collapse
                  key={index}
                  menu={menu}
                  active={pathname.startsWith("/" + menu.path)}
                  hideNavbar={updateNav}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { Sidebar };
