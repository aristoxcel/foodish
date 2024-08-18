import { useContext, useEffect, useState } from "react";
import { PiCirclesThreeBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className={`navbar bg-base-100 relative sticky top-0 z-[999]  ${scrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" title="Menu" className="btn bg-teal-700 border-none hover:transition-transform  hover:text-teal-500 lg:hidden m-2 p-2">
          <PiCirclesThreeBold className="text-2xl"/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-teal-600 rounded-box w-52 "
          >
        
          </ul>
        </div>
        <div className="flex items-center">
          <img src={"lg.png"} alt="" className="h-20" />
          <h1 className=" text-2xl lg:text-3xl font-semibold text-teal-700 lg:font-extrabold">
            Foodish
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-teal-600  font-poet"></ul>
      </div>


      <div className="navbar-end text-teal-600  font-poet">
        {!user && <NavLink to={"/login"} className="hover:animate-bounce lg:px-7 px-3 border-2 rounded-xl lg:mr-4 mr-2  border-teal-600">Login</NavLink>}
       {
        user && (
            <> <div className="dropdown dropdown-end z-50 text-right">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div className="flex ">
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-xl w-52 hover:animate-wave-glow bg-gray-900"
              >
                
              </ul>
            </div>
          </div>
          <button
            onClick={logOut}
            className="bg-transparent mx-5 block text-center lg:pr-5 pr-3"
          >
            Logout
          </button></>
        )
       }
      </div>


    </div>
  );
}

export default Navbar;
