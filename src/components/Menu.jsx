import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MdOutlineArrowDropDown,
  MdOutlineDoubleArrow,
  MdArrowRight
} from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Collapse({ menu, active, hideNavbar }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      onMouseLeave={() => setCollapse(false)}
      className={`${active && "ring-1 ring-blue-800"} cursor-pointer group`}
    >
      <div
        onMouseEnter={() => setCollapse(true)}
        className={`flex items-center text-blue-800 py-2 hover: px-2`}
      >
        <div>{menu.name}</div>
        { collapse ? <MdArrowRight /> : <MdOutlineArrowDropDown /> }
      </div>
      {collapse && (
        <div className="text-gray-800">
          <div className="">
            {menu.items.map((item, index) => {
              return <CollapseItem key={index} item={item} parent_path={menu.path} hideNavbar={hideNavbar} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Menu({ menu, active, center, idx }) {

  const navigate = useNavigate()

  return (
    <div className="group">
      <div onClick={() => navigate(menu.pathname)}
        className={`${
          active && "ring-1 ring-blue-800"
        } flex items-center text-gray-900 hover:text-blue-500 py-2 hover:bg-white/50 px-2 pb-4`}
      >
        <NavLink to={menu.pathname}>{menu.name}</NavLink>
      </div>
      <div className="relative">
        <div className={`absolute hidden ${idx > center ? "right-0" : "left-0"} w-max bg-slate-900 shadow-lg shadow-amber-600/50 text-white group-hover:flex flex-col`}>
          {menu.items.map((item, index) => {
            return <MenuItem key={index} parent_path={menu.path} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ item, parent_path }) {
  const { path, name } = item;

  const [hov, setHov] = useState(false);

  return (
    <div onMouseLeave={() => setHov(false)} onMouseEnter={() => setHov(true)} className="flex items-center trans hover:bg-blue-800 relative">
      <div className="flex h-8 w-8 justify-center">
        <button className={`${hov && "absolute right-2 slide_p top-2 bottom-2"} `}>
          <MdOutlineDoubleArrow />
        </button>
      </div>
      <div className="w-full">
        <NavLink className="pr-12 pl-4 block py-4" to={`/${parent_path}/${path}`}>
          {name}
        </NavLink>
      </div>
    </div>
  );
}

function CollapseItem({ item, hideNavbar, parent_path }) {
  const { path, name } = item;

  return (
    <div onClick={() => hideNavbar(false)} className="hover:text-white hover:bg-blue-800">
      <div className="flex items-center px-4">
        <BsArrowRightShort />
        <NavLink className="block py-2" to={`/${parent_path}/${path}`}>
          {name}
        </NavLink>
      </div>
    </div>
  );
}

export { Menu, MenuItem, Collapse, CollapseItem };