import { NavLink, useNavigate } from "react-router";
import { navItem } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 1.5, ease: "easeOut" },
  };
  const navigate = useNavigate();
  return (
    <header className="w-th bg-black/10 max-lg:fixed -top-0 z-[5678987654]">
      <nav className="lg:w-4/6 w-full items-center justify-between lg:mx-auto  max-lg:px-2  flex">
        <div
          className="text-white font-bold cursor-pointer h-full"
          onClick={() => navigate("/")}
        >
          <h1 className="capitalize font-extrabold text-3xl "> oakberry</h1>
          <p className="uppercase text-sm"> real esate agency</p>
        </div>
        <ul className="flex items-center py-5 uppercase text-white gap-5 max-lg:hidden w-4/6">
          {navItem.map((nav, i) => (
            <NavLink
              className={({ isActive }) =>
                `lg:px-4 py-2 px-2 cursor-pointer font-bold transition-colors ease-in duration-300 ${
                  isActive ? "text-blue-600   " : " "
                }`
              }
              to={nav.link}
              key={i}
            >
              {nav.label}
            </NavLink>
          ))}
        </ul>
        <div className="px-4 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen === true ? (
            <p className="text-xl font-bold  rounded-full w-10 h-10 text-center  border-4 text-red-600">
              x
            </p>
          ) : (
            <GiHamburgerMenu className="text-2xl text-green-600" />
          )}
        </div>
      </nav>{" "}
      {isOpen && (
        <>
          <motion.div
            initial={{ y: -100, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 z-50  bottom-[300px]  w-full   left-0 right-0  transition-all duration-500 ease-linear  bg-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ul className="flex flex-col items-start py-5 px-10 uppercase text-white gap-5">
              {navItem.map((nav, i) => (
                <motion.li
                  variants={childVariant}
                  initial="hidden"
                  animate="visible"
                  key={i}
                >
                  <NavLink
                    to={nav.link}
                    className={({ isActive }) =>
                      `lg:px-4 py-3 px-2 cursor-pointer transition-colors ease-in duration-300 ${
                        isActive ? "text-blue-600 font-semibold" : ""
                      }`
                    }
                  >
                    {nav.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Navbar;
