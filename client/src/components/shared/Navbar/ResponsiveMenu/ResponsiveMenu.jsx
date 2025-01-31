import { links } from "../Navbar";
import { NavLink } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
const ResponsiveMenu = ({ setIsToggle }) => {
  return (
    <nav
      onClick={() => setIsToggle(false)}
      className={`font-poppins fixed w-full top-18 z-50 h-full bg-black bg-opacity-50 transition-transform md:hidden flex`}
    >
      <div className="container mx-auto px-4 relative">
        <ul
          onClick={(e) => e.stopPropagation()}
          className="nav_menu bg-white max-w-max absolute left-2 top-5 py-5"
        >
          <div className="absolute -top-5  left-2">
            <BiSolidDownArrow className="text-3xl text-white rotate-180" />
          </div>
          {links?.map((link) => (
            <li onClick={() => setIsToggle(false)} key={link.id}>
              <NavLink
                className="inline-block px-10 w-full  py-1.5 hover:bg-gray-200  transition duration-300"
                to={link.link}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveMenu;
