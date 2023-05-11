import React, { useState } from "react";

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center animate-fade-in-up">
            <a href="/" className="text-white font-almarai">
              LOGOTIPE
            </a>
          </div>
          {/*navlinks*/}
          <div className="hidden animate-fade-in-up md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-light">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-300 hover:text-emerald-500 px-3 py-2"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/*hamburguer button*/}
          <div className="-mr-3 animate-fade-in-up flex md:hidden">
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
          </div>
        </div>
      </div>
      {/*mobile-menu*/}
      {open ? (
        <div className="absolute z-40 bg-emerald-900 w-screen bg-opacity-[0.005] backdrop-blur-xl md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="text-white font-light hover:text-emerald-500 block px-3 py-2 text-base"
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;

// First navbar

// <nav className="w-full bg-emerald-900 px-[3vw] py-[1.4vw] sm:px-[3vw] sm:py-[4.4vw] md:px-[2.4vw] md:py-[1vw] lg:px-[3.5vw] xl:px-[10vw]">
//   <div className="container flex flex-wrap items-center justify-between mx-auto sm:px-3 md:px-5">
//     <a
//       href="/"
//       className="pl-1 flex animate-fade-in-up items-center md:pl-0"
//     >
//       <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
//         Logotipe
//       </span>
//     </a>
//     <button
//       data-collapse-toggle="navbar-default"
//       type="button"
//       className="animate-fade-in-up inline-flex items-center py-2 ml-3 text-sm text-white md:hidden"
//       aria-controls="navbar-default"
//       aria-expanded="false"
//     >
//       <span class="sr-only">Open main menu</span>
// <svg
//   className="w-8"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 10 10"
//   stroke="#eee"
//   stroke-width=".6"
//   fill="rgba(0,0,0,0)"
//   stroke-linecap="round"
//   style={{ cursor: "pointer" }}
// >
//   <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
//     <animate
//       dur="0.2s"
//       attributeName="d"
//       values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
//       fill="freeze"
//       begin="start.begin"
//     />
//     <animate
//       dur="0.2s"
//       attributeName="d"
//       values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
//       fill="freeze"
//       begin="reverse.begin"
//     />
//   </path>
//   <rect width="10" height="10" stroke="none">
//     <animate
//       dur="2s"
//       id="reverse"
//       attributeName="width"
//       begin="click"
//     />
//   </rect>
//   <rect width="10" height="10" stroke="none">
//     <animate
//       dur="0.001s"
//       id="start"
//       attributeName="width"
//       values="10;0"
//       fill="freeze"
//       begin="click"
//     />
//     <animate
//       dur="0.001s"
//       attributeName="width"
//       values="0;10"
//       fill="freeze"
//       begin="reverse.begin"
//     />
//   </rect>
// </svg>
//     </button>
//     <div className=" hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="absolute z-40 flex flex-col bg-emerald-900 bg-opacity-[0.005] backdrop-blur-xl p-4 mt-2 w-full -left-[0.02rem] text-[5vw] text-gray-300 sm:w-full sm:mt-7 sm:text-[2.125rem] sm:space-y-8 md:w-full md:static md:flex-row md:space-x-8 md:space-y-0 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-emerald-900 md:text-gray-400 lg:text-lg">
//         <li className="animate-fade-in-up delay-100">
//           <a
//             href="/"
//             className="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0 "
//             aria-current="page"
//           >
//             Home
//           </a>
//         </li>
//         <li className="animate-fade-in-up delay-200">
//           <a
//             href="/about"
//             className="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
//           >
//             About
//           </a>
//         </li>
//         <li className="animate-fade-in-up delay-300">
//           <a
//             href="/services"
//             className="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
//           >
//             Services
//           </a>
//         </li>
//         <li className="animate-fade-in-up delay-400">
//           <a
//             href="/projects"
//             className="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
//           >
//             Projects
//           </a>
//         </li>
//         <li className="animate-fade-in-up delay-500">
//           <a
//             href="/contact"
//             className="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
