import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // nav items
  const menuItems = (
    <>
      <li>
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <header>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case font-semibold text-gray-700 text-4xl">
            TasteTrove
          </Link>
        </div>

        {/* mobile nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menuItems}</ul>
        </div>

        <div className="navbar-end space-x-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full">
              <img src="http://placehold.it/50x50" />
            </div>
          </label>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <button className="btn btn-primary">LogOut</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
