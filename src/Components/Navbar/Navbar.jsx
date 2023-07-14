import navLogo from "../../assets/Group 5.png";
import { GoGlobe } from "react-icons/go";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="max-w-[1320px] mx-auto navbar bg-base-100 font-montserrat flex py-6">
      <div className="navbar-start w-1/3">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  font-Montserrat ">
            {navItems}
            <div className=" flex flex-col space-y-1">
              <a className="btn">
                <GoGlobe />
                EN
              </a>
              <a className="btn">Login</a>
              <a className="btn">Sing Up</a>
            </div>
          </ul>
        </div>

        <a className="btn bg-transparent border-none">
          <img src={navLogo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex justify-between w-2/3">
        <ul className="menu menu-horizontal text-[18px] font-Montserrat">
          {navItems}
        </ul>
        <ul className="lg:flex justify-between space-x-2">
          <li>
            <a className="btn bg-transparent border-none text-black hover:text-black text-[18px]">
              <GoGlobe className="p-0 m-0  h-[15px]" />
              EN
            </a>
          </li>
          <li>
            <a className="btn bg-transparent border-none text-[18px] font-normal">
              Login
            </a>
          </li>
          <li>
            <a className="btn bg-black text-white hover:text-black text-[18px]font-normal">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
