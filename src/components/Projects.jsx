import client from "../utils/icons/Client.svg";
import pin from "../utils/icons/Pin.svg";
import clock from "../utils/icons/Clock.svg";
import mansory from "../utils/icons/Mansory.svg";

import project_1_1 from "../utils/images/project-1/project-1-3.jpg";
import project_2_1 from "../utils/images/project-2/project-2-1.jpg";
import project_3_1 from "../utils/images/project-3/project-3-1.jpg";
import project_4_1 from "../utils/images/project-4/project-4-1.jpg";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section>
      <div className="py-10 font-almarai bg-emerald-900 md:py-14 md:w-full lg:px-[7vw] lg:py-12">
        <div className="md:flex md:items-center">
          <div className="mx-[5vw] md:w-1/2 ">
            <motion.p
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
              className="text-emerald-500 text-[1.125rem] mb-4"
            >
              /PROJECTS
            </motion.p>
            <motion.h1
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
              className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]"
            >
              Our projects
            </motion.h1>
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
              className="mt-7 font-catamaran text-white"
            >
              In every project we undertake, we leave our mark of quality and
              commitment. Each space we create is a testament to our passion for
              excellence in construction and maintenance. Let our work speak for
              itself and discover what we can do for you.
            </motion.p>
          </div>
          <div className="flex justify-center space-x-4 mx-[5vw] mt-7 md:w-1/2 md:mt-0">
            <a className="w-full" href="/contact">
              <motion.button
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.7, duration: 1 }}
                viewport={{ once: true }}
                className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-500"
              >
                Contact
              </motion.button>
            </a>
            <a className="w-full" href="/services">
              <motion.button
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
                className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-600"
              >
                Services
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto mx-[5vw] py-20 lg:px-[7vw]">
        <div className="grid grid-cols gap-10 lg:gap-20">
          <motion.a
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
            href="/project-1"
          >
            <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
              <div className="h-[60vw] w-full overflow-hidden sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3">
                <img
                  className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] hover:scale-110 transition duration-300"
                  src={project_1_1}
                  alt=""
                />
              </div>
              <div className="md:pl-4 md:flex-col">
                <div className="">
                  <h3 className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                    Remodeling Bathroom
                  </h3>
                </div>
                <div className="">
                  <div className="block font-catamaran space-y-1 md:hidden">
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={pin}
                        alt=""
                      />
                      <p className="font-semibold">Miami, FL</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={clock}
                        alt=""
                      />
                      <p className="font-semibold">3 weeks</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={mansory}
                        alt=""
                      />
                      <p className="font-semibold">Remodeling</p>
                    </div>
                  </div>
                  <div className="hidden w-full md:block">
                    <div className="grid grid-cols gap-y-2">
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={client}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Client
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            John Carter
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={pin}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Location
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Tampa, FL
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={clock}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Time
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            3 Weeks
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={mansory}
                          alt=""
                        />
                        <div className="relative">
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Service
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Remodeling
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            href="project-2"
          >
            <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
              <div className="h-[60vw] w-full overflow-hidden sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3">
                <img
                  className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] hover:scale-110 transition duration-300"
                  src={project_2_1}
                  alt=""
                />
              </div>
              <div className="md:pl-4 md:flex-col">
                <div className="">
                  <h3 className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                    Remodeling Bathroom
                  </h3>
                </div>
                <div className="">
                  <div className="block font-catamaran space-y-1 md:hidden">
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={pin}
                        alt=""
                      />
                      <p className="font-semibold">Miami, FL</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={clock}
                        alt=""
                      />
                      <p className="font-semibold">3 weeks</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={mansory}
                        alt=""
                      />
                      <p className="font-semibold">Remodeling</p>
                    </div>
                  </div>
                  <div className="hidden w-full md:block">
                    <div className="grid grid-cols gap-y-2">
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={client}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Client
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            John Carter
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={pin}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Location
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Tampa, FL
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={clock}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Time
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            3 Weeks
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={mansory}
                          alt=""
                        />
                        <div className="relative">
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Service
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Remodeling
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            href="project-3"
          >
            <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
              <div className="h-[60vw] w-full overflow-hidden sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3">
                <img
                  className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] hover:scale-110 transition duration-300"
                  src={project_3_1}
                  alt=""
                />
              </div>
              <div className="md:pl-4 md:flex-col">
                <div className="">
                  <h3 className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                    Remodeling Bathroom
                  </h3>
                </div>
                <div className="">
                  <div className="block font-catamaran space-y-1 md:hidden">
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={pin}
                        alt=""
                      />
                      <p className="font-semibold">Miami, FL</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={clock}
                        alt=""
                      />
                      <p className="font-semibold">3 weeks</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={mansory}
                        alt=""
                      />
                      <p className="font-semibold">Remodeling</p>
                    </div>
                  </div>
                  <div className="hidden w-full md:block">
                    <div className="grid grid-cols gap-y-2">
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={client}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Client
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            John Carter
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={pin}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Location
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Tampa, FL
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={clock}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Time
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            3 Weeks
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={mansory}
                          alt=""
                        />
                        <div className="relative">
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Service
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Remodeling
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            href="project-4"
          >
            <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
              <div className="h-[60vw] w-full overflow-hidden sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3">
                <img
                  className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] hover:scale-110 transition duration-300"
                  src={project_4_1}
                  alt=""
                />
              </div>
              <div className="md:pl-4 md:flex-col">
                <div className="">
                  <h3 className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                    Remodeling Bathroom
                  </h3>
                </div>
                <div className="">
                  <div className="block font-catamaran space-y-1 md:hidden">
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={pin}
                        alt=""
                      />
                      <p className="font-semibold">Miami, FL</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={clock}
                        alt=""
                      />
                      <p className="font-semibold">3 weeks</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-6 p-0.5 bg-emerald-500 mr-1"
                        src={mansory}
                        alt=""
                      />
                      <p className="font-semibold">Remodeling</p>
                    </div>
                  </div>
                  <div className="hidden w-full md:block">
                    <div className="grid grid-cols gap-y-2">
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={client}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Client
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            John Carter
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={pin}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Location
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Tampa, FL
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={clock}
                          alt=""
                        />
                        <div>
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Time
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            3 Weeks
                          </div>
                        </div>
                      </div>
                      <div className="flex font-catamaran">
                        <img
                          className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                          src={mansory}
                          alt=""
                        />
                        <div className="relative">
                          <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                            Service
                          </div>
                          <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                            Remodeling
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
