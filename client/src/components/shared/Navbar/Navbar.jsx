import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import useAuth from "./../../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { div } from "framer-motion/client";

export const links = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Single", link: "/single" },
  { id: 3, label: "Group", link: "/group" },
  { id: 4, label: "Tutorials", link: "/tutorials" },
];

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useAuth();

  const HandleLogOutUser = async () => {
    try {
      await logOutUser();
      toast.success("Logout success!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <nav className="bg-white py-3 sticky top-0 z-50 shadow-sm font-poppins">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <button
              className={`text-xl md:hidden flex p-1.5 rounded-full 
              ${
                isToggle
                  ? "bg-gradient-to-r from-pink-400  to-indigo-400 text-white"
                  : "bg-gradient-to-r from-indigo-400  to-pink-400 text-white"
              }`}
              onClick={() => setIsToggle(!isToggle)}
            >
              {isToggle ? <RxCross2 /> : <IoMdMenu />}
            </button>
            <div className="">
              <Link
                to="/"
                className="font-titillium md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                CPG
              </Link>
            </div>
          </div>
          <ul className="nav_menu items-center gap-7 hidden md:flex">
            {links?.map((link) => (
              <li key={link.id}>
                <NavLink
                  className="text-gray-600 hover:text-purple-500 duration-300 transition"
                  to={link.link}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {user ? (
            <div>
              <button onClick={() => setIsOpen(true)}>
                <img
                  src={user?.photoURL}
                  className="w-10 object-cover h-10 rounded-full border-2 hover:border-blue-200 transition duration-300"
                  alt=""
                />
              </button>
              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed right-4 top-16 w-full min-h-screen"
                >
                  <div className="container mx-auto px-4 relative">
                    <ul
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white shadow-md px-8 py-4 space-y-3 text-lg absolute right-0"
                    >
                      <li>Hi, {user?.displayName}</li>
                      <li>
                        <button
                          onClick={HandleLogOutUser}
                          className="w-full text-left text-red-400 hover:text-red-600 transition duration-300"
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      {isToggle && <ResponsiveMenu setIsToggle={setIsToggle} />}
    </>
  );
};

export default Navbar;
