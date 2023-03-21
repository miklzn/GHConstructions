import drop from "../utils/icons/Drop.svg";

const Header = () => {
  return (
    <nav class="bg-emerald-900 px-2 py-2 border-b-4 border-emerald-900 sm:px-5 sm:py-7 md:px-5 md:py-1 lg:px-44">
      <div class="container flex flex-wrap items-center justify-between mx-auto sm:px-3 md:px-5">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
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
            width="32px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
        <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="absolute z-40 flex flex-col bg-white bg-opacity-[0.005] backdrop-blur-xl p-4 mt-2 w-full -left-[0.02rem] text-[5vw] font-catamaran text-gray-300 sm:w-full sm:mt-7 sm:text-[2.125rem] sm:space-y-8 md:w-full md:static md:flex-row md:space-x-8 md:space-y-0 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-emerald-900 md:text-gray-400 lg:text-lg">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
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
