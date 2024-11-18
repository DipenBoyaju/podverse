import { BsFillMicFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavItem from "./shared/NavItem";
import SolidButton from "./shared/SolidButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className="absolute w-full px-5 lg:px-24 py-7 flex flex-row items-center justify-between z-20">
      <div className="flex gap-1 items-center">
        <BsFillMicFill className="text-3xl text-tertiary" />
        <p className="text-white text-3xl font-poppins shadow-sm">Podverse</p>
      </div>
      <div className={`fixed top-0 left-0 h-screen md:h-auto md:relative w-full  md:w-auto flex flex-col font-inter text-white md:flex-row gap-8 backdrop-blur-sm py-3 px-8 md:border border-white/10 md:rounded-full md:bg-white/5 bg-primary ${showMenu ? "translate-x-0" : " -translate-x-full md:translate-x-0"} transition-all duration-300`}>
        <div className="md:hidden flex justify-between items-center pt-5">
          <div className="flex gap-1 items-center">
            <BsFillMicFill className="text-3xl text-tertiary" />
            <p className="text-white text-3xl font-poppins shadow-sm">Podverse</p>
          </div>
          <div className=" cursor-pointer text-4xl" onClick={() => setShowMenu((prev) => !prev)}>
            <RxCross2 />
          </div>
        </div>
        <NavLink to={'/'}>
          <NavItem title="Home" />
        </NavLink>
        <NavLink to={'/episode'}>
          <NavItem title="Episode" />
        </NavLink>
        <NavLink to={'/contactus'}>
          <NavItem title="Contact Us" />
        </NavLink>
      </div>
      <div className="p-3 border md:hidden cursor-pointer border-white/10 rounded-full bg-white/5 text-2xl text-white" onClick={() => setShowMenu((prev) => !prev)}>
        <RxHamburgerMenu />
      </div>
      <div className="hidden md:block">
        <SolidButton title="button" />
      </div>
    </div>
  );
};

export default Navbar;
