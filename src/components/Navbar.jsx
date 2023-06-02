import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../utils/images/logo2.png";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-emerald-900">
      <div className="mx-[5vw] sm:px-6 lg:px-[7vw]">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <a href="/" className="text-white font-almarai">
              LOGO
            </a>
          </motion.div>
          {/*navlinks*/}
          <div className="hidden md:block">
            <motion.div
              initial={{
                opacity: 0,
                transform: "translateY(10px)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="ml-10 flex items-baseline space-x-4 font-light"
            >
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-300 hover:text-emerald-500 px-3 py-2"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </motion.div>
          </div>
          {/*hamburguer button*/}
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="-mr-3 flex md:hidden"
          >
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2"
            >
              <span className="sr-only">Open Main Menu</span>
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                stroke="#eee"
                stroke-width=".6"
                fill="rgba(0,0,0,0)"
                stroke-linecap="round"
                style={{ cursor: "pointer" }}
              >
                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                  <animate
                    dur="0.2s"
                    attributeName="d"
                    values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                    fill="freeze"
                    begin="start.begin"
                  />
                  <animate
                    dur="0.2s"
                    attributeName="d"
                    values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                    fill="freeze"
                    begin="reverse.begin"
                  />
                </path>
                <rect width="10" height="10" stroke="none">
                  <animate
                    dur="2s"
                    id="reverse"
                    attributeName="width"
                    begin="click"
                  />
                </rect>
                <rect width="10" height="10" stroke="none">
                  <animate
                    dur="0.001s"
                    id="start"
                    attributeName="width"
                    values="10;0"
                    fill="freeze"
                    begin="click"
                  />
                  <animate
                    dur="0.001s"
                    attributeName="width"
                    values="0;10"
                    fill="freeze"
                    begin="reverse.begin"
                  />
                </rect>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
      {/*mobile-menu*/}
      {open ? (
        <div className="absolute z-40 bg-emerald-900 w-screen bg-opacity-[0.005] backdrop-blur-xl md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
            {navlinks.map((link, index) => (
              <motion.a
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                key={index}
                className="text-white font-light hover:text-emerald-500 block px-3 py-2 text-base"
                href={link.link}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
