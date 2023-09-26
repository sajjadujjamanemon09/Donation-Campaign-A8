import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="md:flex justify-between items-center pt-7 px-5">
        <Logo></Logo>
        <div className="pt-10 md:pt-0">
          <ul className="md:flex gap-12 text-2xl">

           <div className="flex justify-center items-center pb-2">
           <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
           </div>

           <div className="flex justify-center pb-2">
           <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 font-bold underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
           </div>

        <div className="flex justify-center">
        <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 font-bold underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
        </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
