const Header = () => {
  return (
    <nav class="w-full bg-emerald-900 px-[3vw] py-[1.4vw] border-b-4 border-emerald-900 sm:px-[3vw] sm:py-[4.4vw] md:px-[2.4vw] md:py-[1vw] lg:px-[3.5vw] xl:px-[10vw]">
      <div class="container flex flex-wrap items-center justify-between mx-auto sm:px-3 md:px-5">
        <a href="/" class="pl-1 flex animate-fade-in-up items-center md:pl-0">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
            Logotipe
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center py-2 ml-3 text-sm text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
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
        <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="absolute z-40 flex flex-col bg-emerald-900 bg-opacity-[0.005] backdrop-blur-xl p-4 mt-2 w-full -left-[0.02rem] text-[5vw] text-gray-300 sm:w-full sm:mt-7 sm:text-[2.125rem] sm:space-y-8 md:w-full md:static md:flex-row md:space-x-8 md:space-y-0 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-emerald-900 md:text-gray-400 lg:text-lg">
            <li className="animate-fade-in-up delay-100">
              <a
                href="/"
                class="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="animate-fade-in-up delay-200">
              <a
                href="/about"
                class="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li className="animate-fade-in-up delay-300">
              <a
                href="/services"
                class="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
              >
                Services
              </a>
            </li>
            <li className="animate-fade-in-up delay-400">
              <a
                href="/projects"
                class="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
              >
                Projects
              </a>
            </li>
            <li className="animate-fade-in-up delay-500">
              <a
                href="/contact"
                class="block py-2 pl-3 pr-4 hover:text-emerald-500 md:bg-transparent md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
