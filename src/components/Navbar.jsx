const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
    //       <svg
    //         className="w-8"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 10 10"
    //         stroke="#eee"
    //         stroke-width=".6"
    //         fill="rgba(0,0,0,0)"
    //         stroke-linecap="round"
    //         style={{ cursor: "pointer" }}
    //       >
    //         <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
    //           <animate
    //             dur="0.2s"
    //             attributeName="d"
    //             values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
    //             fill="freeze"
    //             begin="start.begin"
    //           />
    //           <animate
    //             dur="0.2s"
    //             attributeName="d"
    //             values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
    //             fill="freeze"
    //             begin="reverse.begin"
    //           />
    //         </path>
    //         <rect width="10" height="10" stroke="none">
    //           <animate
    //             dur="2s"
    //             id="reverse"
    //             attributeName="width"
    //             begin="click"
    //           />
    //         </rect>
    //         <rect width="10" height="10" stroke="none">
    //           <animate
    //             dur="0.001s"
    //             id="start"
    //             attributeName="width"
    //             values="10;0"
    //             fill="freeze"
    //             begin="click"
    //           />
    //           <animate
    //             dur="0.001s"
    //             attributeName="width"
    //             values="0;10"
    //             fill="freeze"
    //             begin="reverse.begin"
    //           />
    //         </rect>
    //       </svg>
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
  );
};

export default Navbar;
