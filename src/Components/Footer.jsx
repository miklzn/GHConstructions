import instagram from "../utils/icons/Instagram.svg";
import facebook from "../utils/icons/Facebook.svg";
import whatsapp from "../utils/icons/Whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-emerald-900">
      <div className="bg-emerald-900 h-auto">
        <div className="md:flex md:flex-row md:items-center md:py-[5vw] md:px-10 xl:px-[10vw]">
          <div
            className="text-[7vw] text-center
         font-catamaran text-white font-bold py-10 px-[15vw] sm:text-4xl md:py-0 md:text-[3vw] md:w-2/3 md:px-8 md:text-start xl:text-[2.2vw] xl:pr-[15vw]"
          >
            We would love to hear from you so don't hesitate to say hi!
          </div>
          <div className=" w-full px-14 sm:px-32 md:w-1/3 md:px-12 md:py-2.5 md:my-auto">
            <a href="/contact">
              <button className="w-full justify-center bg-emerald-500 py-2.5 text-gray-800 text-[4.7vw] font-catamaran font-semibold sm:py-4 sm:text-[3.2vw] md:py-2 md:text-[1.693vw] xl:text-[1.3vw] xl:py-4">
                Contact
              </button>
            </a>
          </div>
        </div>
        <hr className="border-1 border-gray-500 mx-10 my-10 md:mb-[4vw] md:mt-0 xl:mx-[10vw]" />

        <div className="w-full md:flex md:items-center md:px-10 md:justify-between md:pb-10 xl:px-[10vw]">
          <div className="md:w-1/3">
            <h2 className="text-[6vw] font-bold font-catamaran text-center text-white sm:text-3xl md:text-[2.5vw] xl:text-[1.2vw]">
              G&H Constructions
            </h2>
            <p className="text-[4.5vw] font-catamaran text-center px-12 mt-4 text-white sm:text-[2.8vw] md:text-[1.5vw] md:px-0 md:mt-2 xl:text-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full flex items-center justify-center space-x-2 py-7 md:py-2">
              <img
                className="sm:h-9 sm:w-9 md:w-4 lg:w-6"
                src={facebook}
                alt=""
              />
              <img
                className="sm:h-9 sm:w-9 md:w-4 lg:w-6"
                src={instagram}
                alt=""
              />
              <img
                className="sm:h-9 sm:w-9 md:w-4 lg:w-6"
                src={whatsapp}
                alt=""
              />
            </div>
          </div>
          <div className="md:flex md:w-2/4">
            <div className="flex justify-center text-center md:w-1/2">
              <div className="font-catamaran my-8 text-white">
                <h2 className="font-semibold mb-4 text-[5.625vw] md:text-[1.694vw] xl:text-[1.2vw]">
                  Quick Links
                </h2>
                <ul class="flex flex-col text-[4.375vw] space-y-2 sm:mb-0 md:text-[1.5vw] xl:text-[1vw]">
                  <li>
                    <a href="#" class="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center text-center md:w-1/2">
              <div className="font-catamaran my-8 text-white">
                <h2 className="font-semibold mb-4 text-[5.625vw] md:text-[1.694vw] xl:text-[1.2vw]">
                  Contact Us
                </h2>
                <ul class="flex flex-col text-[4.375vw] space-y-2 sm:mb-0 md:text-[1.5vw] xl:text-[1vw]">
                  <li>
                    <a href="#" class="">
                      Phone
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      Time
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      Direction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-xs text-center text-white font-catamaran px-3">
        Copyright © 2023 G&H Constructions. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
