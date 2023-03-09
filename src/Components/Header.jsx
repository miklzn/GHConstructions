import drop from "../utils/icons/Drop.svg";

const Header = () => {
  return (
    <header className="bg-emerald-900 w-full h-auto flex flex-col">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-5">
        <div className="text-white my-5">LOGO</div>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            height="40px"
            width="40px"
            version="1.1"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <title />
            <desc />
            <g
              fill="none"
              fill-rule="evenodd"
              id="Menu-4"
              stroke="none"
              stroke-width="1"
            >
              <path
                d="M15.5,19 L47.5,19 C48.8807119,19 50,20.1192881 50,21.5 C50,22.8807119 48.8807119,24 47.5,24 L15.5,24 C14.1192881,24 13,22.8807119 13,21.5 C13,20.1192881 14.1192881,19 15.5,19 Z"
                fill="white"
                id="Rectangle"
              />
              <path
                d="M14.8243243,29 L38.1756757,29 C39.1832222,29 40,30.1192881 40,31.5 C40,32.8807119 39.1832222,34 38.1756757,34 L14.8243243,34 C13.8167778,34 13,32.8807119 13,31.5 C13,30.1192881 13.8167778,29 14.8243243,29 Z"
                fill="white"
                id="Rectangle"
              />
              <path
                d="M15.5,39 L47.5,39 C48.8807119,39 50,40.1192881 50,41.5 C50,42.8807119 48.8807119,44 47.5,44 L15.5,44 C14.1192881,44 13,42.8807119 13,41.5 C13,40.1192881 14.1192881,39 15.5,39 Z"
                fill="white"
                id="Rectangle"
              />
            </g>
          </svg>
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col my-3 text-lg font-catamaran text-gray-300">
            <li className="my-1.5">
              <a href="" className="flex items-center">
                Home
              </a>
            </li>
            <li className="my-1.5">
              <a href="" className="flex items-center ">
                Company
              </a>
            </li>
            <li className="my-1.5">
              <a href="" className="flex items-center">
                Services
              </a>
            </li>
            <li className="my-1.5">
              <a href="" className="flex items-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
