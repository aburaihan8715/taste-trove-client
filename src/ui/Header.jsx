import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  // nav items
  const menuItems = (
    <>
      <li>
        <NavLink className="uppercase text-sm font-semibold text-gray-600" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="uppercase text-sm font-semibold text-gray-600" to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-secondary h-20 flex items-center fixed top-0 left-0 right-0 z-20">
      <div className="navbar flex px-2 sm:px-4">
        <div className="w-full navbar-start">
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
          <Link to="/" className="hidden sm:block tracking-tighter font-semibold text-gray-600 text-4xl ml-2 uppercase">
            <span>Taste</span>
            <span className="text-orange-700">Trove</span>
            <span></span>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menuItems}</ul>
        </div>

        <div className="w-full sm:mt-0 navbar-end space-x-2">
          {user?.uid && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img loading="lazy" src="http://placehold.it/50x50" />
              </div>
            </label>
          )}

          {!user?.uid && (
            <Link to="/login" className="btn btn-primary w-full sm:w-auto text-gray-600">
              Login
            </Link>
          )}

          {user?.uid && (
            <button onClick={logOutHandler} className="btn btn-md btn-primary rounded text-gray-600">
              LogOut
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
