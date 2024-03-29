import instagram from "../utils/icons/Instagram.svg";
import facebook from "../utils/icons/Facebook.svg";
import whatsapp from "../utils/icons/Whatsapp.svg";

import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900">
      <div className="bg-emerald-900 h-auto">
        <div className="md:flex md:flex-row md:items-center md:py-[5vw] md:px-10 xl:px-[10vw]">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-[1.5rem] text-center
         font-almarai text-white font-bold py-10 px-[15vw] min-[480px]:text-[1.75rem] sm:text-[1.875rem] md:py-0 md:text-[1.5rem] md:w-2/3 md:px-8 md:text-start lg:text-[1.875rem] xl:text-[2.375rem] xl:pr-[8vw]"
          >
            We would love to hear from you so don't hesitate to say hi!
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className=" w-full px-14 sm:px-32 md:w-1/3 md:px-12 md:py-2.5 md:my-auto"
          >
            <a href="/contact">
              <button className="w-full justify-center text-gray-900 bg-emerald-500 py-2.5 text-[0.9375rem] font-almarai font-semibold min-[480px]:text-[1rem] sm:py-4 sm:text-[1.125rem] md:py-2 md:text-[0.875rem] lg:text-[1rem] lg:py-4 xl:text-[1.125rem] hover:bg-emerald-600">
                Contact
              </button>
            </a>
          </motion.div>
        </div>
        <hr className="border-1 border-gray-500 mx-10 my-10 md:mb-[4vw] md:mt-0 xl:mx-[10vw]" />

        <div className="w-full md:flex md:items-center md:px-10 md:justify-between md:pb-10 xl:px-[10vw]">
          <div className="md:w-1/3">
            <motion.h2
              initial={{
                opacity: 0,
                transform: "translateY(10px)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
              }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-[1.25rem] font-bold font-almarai text-center text-white min-[480px]:text-[1.375rem] sm:text-3xl md:text-[2.5vw] lg:text-[1.625rem] xl:text-[1.5rem]"
            >
              G&H Constructions
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                transform: "translateY(10px)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
              }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="text-[0.875rem] font-catamaran text-center px-12 mt-4 text-white min-[480px]:text-[1rem] sm:text-[2.8vw] md:text-[0.875rem] md:px-0 md:mt-2 lg:px-5 xl:text-[1rem]"
            >
              We build, renovate and beautify your spaces with exellence and
              passion.
            </motion.p>
            <div className="w-full flex items-center justify-center space-x-2 py-7 md:py-2">
              <motion.a
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sm:h-9 sm:w-9 md:w-5 lg:w-6 xl:w-7"
                  src={facebook}
                  alt=""
                />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sm:h-9 sm:w-9 md:w-5 lg:w-6 xl:w-7"
                  src={instagram}
                  alt=""
                />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
                href="http://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sm:h-9 sm:w-9 md:w-5 lg:w-6 xl:w-7"
                  src={whatsapp}
                  alt=""
                />
              </motion.a>
            </div>
          </div>
          <div className="md:flex md:w-2/4">
            <div className="flex justify-center text-center md:w-1/2 md:text-start">
              <div className="font-catamaran my-8 text-white">
                <motion.h2
                  initial={{
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                  }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="font-semibold font-almarai mb-4 text-[1rem] min-[480px]:text-[1.125rem] md:text-[1.694vw] lg:text-[1.125rem] xl:text-[1.25rem]"
                >
                  Company
                </motion.h2>
                <motion.ul
                  initial={{
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                  }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  class="flex flex-col text-[0.875rem] space-y-2 min-[480px]:text-[0.9375rem] sm:mb-0 md:text-[0.875rem] lg:text-[0.9375rem] xl:text-[1rem]"
                >
                  <li>
                    <a href="/" className="hover:text-emerald-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-emerald-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-emerald-500">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="hover:text-emerald-500">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="contact" className="hover:text-emerald-500">
                      Contact
                    </a>
                  </li>
                </motion.ul>
              </div>
            </div>
            <div className="flex justify-center text-center md:w-1/2 md:text-start">
              <div className="font-catamaran my-8 text-white">
                <motion.h2
                  initial={{
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                  }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="font-semibold font-almarai mb-4 text-[1rem] min-[480px]:text-[1.125rem] md:text-[1.694vw] lg:text-[1.125rem] xl:text-[1.25rem]"
                >
                  Services
                </motion.h2>
                <motion.ul
                  initial={{
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0px)",
                  }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  class="flex flex-col text-[0.875rem] space-y-2 min-[480px]:text-[0.9375rem] sm:mb-0 md:text-[0.875rem] lg:text-[0.9375rem] xl:text-[1rem]"
                >
                  <li>
                    <a
                      href="/residential-construction"
                      className="hover:text-emerald-500"
                    >
                      Residential Construction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/commercial-construction"
                      className="hover:text-emerald-500"
                    >
                      Commercial Construction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cleaning-service"
                      className="hover:text-emerald-500"
                    >
                      Cleaning Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/painting-service"
                      className="hover:text-emerald-500"
                    >
                      Painting Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/space-remodeling"
                      className="hover:text-emerald-500"
                    >
                      Space Remodeling
                    </a>
                  </li>
                  <li>
                    <a
                      href="repair-services"
                      className="hover:text-emerald-500"
                    >
                      Repair Services
                    </a>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-xs text-center text-white font-catamaran px-3 md:text-[0.9375rem]">
        Copyright © {year} G&H Constructions. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
