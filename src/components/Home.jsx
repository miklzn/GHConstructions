import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import igGreen from "../utils/icons/InstagramGreen.svg";
import fbGreen from "../utils/icons/FacebookGreen.svg";
import tools from "../utils/icons/Tools.svg";
import toolsBack from "../utils/icons/ToolsBack.svg";
import winch from "../utils/icons/Winch.svg";
import winchBack from "../utils/icons/WinchBack.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import vacuumBack from "../utils/icons/VacuumBack.svg";
import pin from "../utils/icons/Pin.svg";
import clock from "../utils/icons/Clock.svg";
import mansory from "../utils/icons/Mansory.svg";
import bottomVideo from "../utils/videos/bottom-video.mp4";

import project_1_1 from "../utils/images/project-1/project-1-3.jpg";
import project_2_1 from "../utils/images/project-2/project-2-1.jpg";
import project_3_1 from "../utils/images/project-3/project-3-1.jpg";
import project_4_1 from "../utils/images/project-4/project-4-1.jpg";

import { motion } from "framer-motion";

const Home = () => {
  const widthPx = window.innerWidth;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  return (
    <>
      <section className="h-full">
        <div
          className="h-[160vh] w-screen bg-cover bg-center bg-fixed sm:h-[320vh] md:h-[140vh] md:min-h-[708px] lg:h-[150vh]"
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/07/ef/41/07ef4167a4e11abe607842d88ff29ed3.gif)`,
          }}
        >
          <div className="flex flex-col justify-center font-almarai text-white w-full h-auto text-[10vw] bg-emerald-900 px-[5vw] py-10 text-center sm:px-[5vw] md:static md:text-[5.3vw] md:px-[4.8vw] lg:py-[4.8vw] lg:px-[5vw] lg:text-[5vw] lg:leading-tight xl:text-[4vw] xl:px-[11.5vw] xl:py-[4.5vw]">
            <motion.div
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
              className="w-full"
            >
              <h1 className="md:text-start">
                <span className="text-teal-700">WE BUILD, </span>
                RENOVATE AND
              </h1>
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
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="md:text-end"
            >
              <h1 className="">BEAUTIFY YOUR SPACES WITH</h1>
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
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="">
                EXELLENCE AND
                <span className="text-teal-700"> PASSION.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="h-full lg:px-[7vw] xl:px-[10.8vw]">
        <div className="mx-[5vw] mb-16 -mt-16 grid grid-cols-1 gap-6 font-catamaran md:grid-cols-3 md:mb-24">
          <motion.div
            className="h-auto shadow-card border border-gray-50 bg-white px-5 py-8 overflow-hidden min-[480px]:py-12 md:py-8 lg:py-12"
            initial={{
              opacity: 0,
              transform: "translateY(15px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full relative">
              <img
                className="h-14 border p-2 bg-emerald-900 "
                src={tools}
                alt=""
              />
              <h3 className="pb-3 pt-2 text-[1.375rem] font-semibold font-almarai relative z-10">
                Residential <br className="lg:hidden" /> Construction
              </h3>
              <p className="text-[0.875rem] text-gray-600 relative z-10 min-[480px]:text-[0.9375rem] sm:text-[1rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1.125rem]">
                We build custom homes with comprehensive design and construction
                services, including ground-up construction, remodeling, outdoor
                living spaces, landscaping, and sustainable practices.
              </p>
              <img
                className="h-40 absolute top-24 -right-20 min-[480px]:top-10 md:top-36 lg:top-32"
                src={toolsBack}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            className="h-auto shadow-card border border-gray-50 bg-white px-5 py-8 overflow-hidden min-[480px]:py-12 md:py-8 lg:py-12"
            initial={{
              opacity: 0,
              transform: "translateY(15px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full relative">
              <img
                className="h-14 border p-2 bg-emerald-900 "
                src={winch}
                alt=""
              />
              <h3 className="pb-3 pt-2 text-[1.375rem] font-semibold font-almarai relative z-10">
                Commercial <br className="lg:hidden" /> Construction
              </h3>
              <p className="text-[0.875rem] text-gray-600 relative z-10 min-[480px]:text-[0.9375rem] sm:text-[1rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1.125rem]">
                New projects and remodels for stores, restaurants, gas stations,
                and mid-rise multifamily buildings. We guarantee quality,
                safety, and sustainability to meet your goals on time and
                budget.
              </p>
              <img
                className="h-40 absolute top-24 -right-20 min-[480px]:top-10 md:top-36 lg:top-32"
                src={winchBack}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            className="h-auto shadow-card bg-emerald-900 px-5 py-8  overflow-hidden min-[480px]:py-12 md:py-8 lg:py-12"
            initial={{
              opacity: 0,
              transform: "translateY(15px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full relative">
              <img
                className="h-14 border-4 border-white p-2 bg-emerald-900 "
                src={vacuum}
                alt=""
              />
              <h3 className="pb-3 pt-2 text-[1.375rem] font-semibold text-white font-almarai relative z-10">
                Cleannig <br className="lg:hidden" /> Service
              </h3>
              <p className="text-[0.875rem] text-gray-200 relative z-10 min-[480px]:text-[0.9375rem] sm:text-[1rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1.125rem]">
                We provide cleaning services for homes and businesses. Our
                trained team uses sustainable products and practices to keep
                your space clean and healthy, from deep cleans to scheduled
                maintenance.
              </p>
              <img
                className="h-40 absolute top-24 -right-20 min-[480px]:top-10 md:top-36 lg:top-32"
                src={vacuumBack}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="h-full md:px-6 lg:px-[10.8vw]">
        <div className="flex flex-col mx-[5vw] py-12 sm:py-16 md:flex md:flex-row md:py-[7.5vw] lg:py-16">
          <div className=" font-catamaran text-[1.5rem] font-bold min-[480px]:text-[1.875rem] sm:text-[2rem] md:w-2/5 md:my-auto md:text-[1.875rem] lg:text-[2.7vw]">
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
            >
              <h2>Quality &</h2>
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
            >
              <h2>Satisfaction</h2>
            </motion.div>
          </div>
          <motion.p
            className="mt-5 font-catamaran text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mt-12 md:mt-0 md:w-3/5 md:my-auto md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1.125rem]"
            initial={{
              opacity: 0,
              transform: "translateY(15px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
          >
            At G&H Construction, we take pride in providing high-quality,
            personalized services tailored to each client's needs. Our highly
            skilled team is dedicated to excellence on every project we
            undertake. Whether you need to build a new home, remodel a kitchen
            or bathroom, paint your home, or require maintenance and cleaning
            services, G&H Construction is here to help you.
          </motion.p>
        </div>
        <div className="flex justify-center mx-[5vw] md:mb-16">
          <motion.img
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
            className="object-cover pb-8 h-full w-full max-h-[540px] md:h-[37.5vw] md:pb-0 lg:h-[30vw]"
            src="https://www.chiraltarquitectos.com/wp-content/uploads/2020/11/Bueno-Chiralt-Arquitectos-Valencia-54-2.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="h-auto bg-gray-100 md:px-6 lg:px-[10.8vw]">
        <div className="pb-3 md:pb-1">
          <div className="flex flex-row justify-between items-center mx-[5vw] pt-16 pb-2 font-catamaran text-[1.5rem] font-bold min-[480px]:text-[1.875rem] sm:text-[2rem] sm:pt-20 sm:pb-4 md:text-[1.875rem] md:pt-24 lg:text-[2.7vw]">
            <motion.h2
              initial={{
                opacity: 0,
                transform: "translateY(10px)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0px)",
              }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              Selected Projects
            </motion.h2>
            <div className="flex justify-end space-x-2 md:w-4/12">
              <button
                onClick={scrollLeft}
                className="border border-black p-[0.825rem] md:p-4 hover:bg-emerald-500"
              >
                <img className="h-4 md:h-5" src={leftArrow} alt="" />
              </button>
              <button
                onClick={scrollRight}
                className="border p-[0.825rem] bg-emerald-500 md:p-4 hover:bg-emerald-600"
              >
                <img className="h-4 md:h-5" src={rightArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="pt-10 mx-[5vw] md:pb-20">
            <div
              id="content"
              className="flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[10vw] lg:p-1 "
            >
              <div>
                <div className="flex flex-col w-[90vw] md:grid grid-cols-2 md:gap-x-8 md:w-[83.7vw] lg:gap-x-3 lg:w-[68vw]">
                  <a href="/project-1">
                    <motion.div
                      className="font-catamaran text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[0.875rem] lg:mb-10 lg:pr-4 xl:text-[1.125rem]"
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
                    >
                      <img
                        className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                        src={project_1_1}
                        alt=""
                      />
                      <div className="md:mt-4">
                        <div>
                          <h3 className="font-almarai my-2 sm:my-6 md:my-4">
                            Remodeling Bathroom
                          </h3>
                        </div>
                        <div className="space-y-1 ">
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
                      </div>
                    </motion.div>
                  </a>
                  <a href="/project-2">
                    <motion.div
                      className="font-catamaran text-[0.875rem] mt-8 min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[0.875rem] md:mt-0 lg:pl-4 xl:text-[1.125rem]"
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
                    >
                      <img
                        className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                        src={project_2_1}
                        alt=""
                      />
                      <div className="md:mt-4">
                        <div>
                          <h3 className="font-almarai my-2 sm:my-6 md:my-4">
                            Remodeling Bathroom
                          </h3>
                        </div>
                        <div className="space-y-1">
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
                      </div>
                    </motion.div>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-[90vw] md:grid grid-cols-2 md:gap-x-8 md:w-[83.7vw] lg:gap-x-3 lg:w-[68vw]">
                  <a href="/project-3">
                    <div className="font-catamaran text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[0.875rem] lg:mb-10 lg:pr-4 xl:text-[1.125rem]">
                      <img
                        className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                        src={project_3_1}
                        alt=""
                      />
                      <div className="md:mt-4">
                        <div>
                          <h3 className="font-almarai my-2 sm:my-6 md:my-4">
                            Remodeling Bathroom
                          </h3>
                        </div>
                        <div className="space-y-1 ">
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
                      </div>
                    </div>
                  </a>
                  <a href="/project-4">
                    <div className="font-catamaran text-[0.875rem] mt-8 min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[0.875rem] md:mt-0 lg:pl-4 xl:text-[1.125rem]">
                      <img
                        className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                        src={project_4_1}
                        alt=""
                      />
                      <div className="md:mt-4">
                        <div>
                          <h3 className="font-almarai my-2 sm:my-6 md:my-4">
                            Remodeling Bathroom
                          </h3>
                        </div>
                        <div className="space-y-1">
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
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[0.094rem] border-gray-300 my-6 mx-[5vw] sm:my-10" />
        </div>
      </section>
      <section className="h-auto md:px-6 lg:px-[10.8vw]">
        <div className="mx-[5vw] mt-5 mb-10 font-catamaran text-[3.5vw] sm:mt-10 md:pb-10">
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
            className="text-[1.5rem] font-bold py-6 min-[480px]:text-[1.875rem] sm:text-[2rem] sm:py-10 md:text-[1.875rem] lg:text-[2.7vw]"
          >
            Our People
          </motion.h2>
          <div className="md:flex md:flex-row">
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
              className="text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] md:text-[0.875rem] md:w-[45vw] md:pr-16 md:ml-0 lg:text-[0.875rem] xl:text-[1.125rem]"
            >
              At G&H Construction, our extensive team of highly skilled
              professionals is committed to excellence on every project.
              <br />
              <br />
              Including architects, engineers, interior designers, general
              contractors, painters, cleaners, and maintenance staff, each with
              extensive experience in their area of expertise.
              <br />
              <br />
              We work closely with clients to ensure satisfaction at every step
              of the way, maintaining high standards of quality and safety.
            </motion.p>
            <div className="mt-10 flex h-auto md:w-[45vw] md:-mt-16">
              <div className="w-1/2">
                <motion.img
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
                  className="object-cover w-full h-full py-5 pr-5 sm:pr-14 sm:py-10 md:pr-8"
                  src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_22_construction-company-names.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-full">
                  <motion.img
                    initial={{
                      opacity: 0,
                      transform: "translateY(-10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(0px)",
                    }}
                    transition={{ delay: 0.7, duration: 1 }}
                    viewport={{ once: true }}
                    className="h-full w-full pr-4 pb-9 object-cover sm:pr-8 sm:pb-14 "
                    src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_construction-company-names.jpg"
                    alt=""
                  />
                  <motion.img
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
                    className="h-full w-full object-cover"
                    src="http://www.obcipol.com/wp-content/uploads/2015/07/EMPRESA_DE_CONSTRUCCION_DE_EDIFICIOS_COLOMBIA-941x599.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto md:bg-gray-100 md:px-6 md:pb-8 lg:py-16 lg:px-[10.8vw]">
        <div className="mx-[5vw] pt-10 mb-8 font-catamaran text-[3.5vw] md:mb-0 md:pb-10">
          <div className="md:flex md:flex-row md:h-full md:space-x-10 md:flex md:items-center">
            <div className=" hidden md:block md:w-1/2 md:h-full">
              <motion.img
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
                className="md:h-[50vw] md:w-[50vw] md:object-cover lg:h-[40vw] lg:w-[34vw]"
                src="https://static2.mansionglobal.com/production/media/article-images/d92c7415002ec3cf75b08329fb479444/large_DSC8488-HIGH1.jpg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 md:pl-3">
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
                className="text-[1.5rem] font-bold min-[480px]:text-[1.875rem] sm:text-[2rem] py-6 sm:py-12 md:text-[1.875rem] md:pt-1 md:pb-5 lg:text-[2.7vw]"
              >
                Our Services
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
                className="text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1.125rem]"
              >
                We offer a wide range of construction, remodeling, maintenance,
                cleaning services and more. We adapt to our clients' budgets
                without compromising quality and ensure that each project is
                carried out to the highest standards of excellence and safety.
                Trust us to bring your construction projects to life.
              </motion.p>
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
                className="mt-5 font-semibold text-[0.875rem] min-[480px]:text-[1.125rem] sm:text-[1.25rem] sm:mt-10 md:text-[1rem] md:mt-4 lg:mt-8 lg:text-[1rem] xl:text-[1.125rem]"
              >
                You can see more here:
              </motion.p>
              <div className="flex space-x-4 pb-6 pt-3">
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    className="flex items-center text-[0.8125rem] pt-4 font-semibold text-emerald-500 min-[480px]:text-[1rem] sm:text-[1.125rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1rem]"
                  >
                    <img
                      className="sm:h-7 sm:my-7 md:h-6 md:my-2 lg:h-[2.5vw]"
                      src={fbGreen}
                      alt=""
                    />
                    <p className="md:pt-1 lg:pt-0">Facebook</p>
                  </motion.div>
                </a>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
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
                    className="flex items-center text-[0.8125rem] pt-4 font-semibold text-emerald-500 min-[480px]:text-[1rem] sm:text-[1.125rem] md:text-[0.875rem] lg:text-[0.875rem] xl:text-[1rem]"
                  >
                    <img
                      className="sm:h-7 sm:my-7 md:h-6 md:my-2 lg:h-[2.5vw]"
                      src={igGreen}
                      alt=""
                    />
                    <p className="md:pt-1 lg:pt-0">Instagram</p>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <header class="relative flex items-center justify-center h-auto overflow-hidden sm:h-[85vw] md:h-[37.5vw] lg:h-[22.5vw]">
          <div class="relative flex w-full h-full z-30 items-center text-center justify-center text-white bg-black bg-opacity-60 sm:py-32 md:py-[10vw] lg:py-[6.5vw]">
            <div className="py-[20vw] px-[6vw] sm:py-[1.5vh] sm:px-[15vw] md:py-[0vw] md:px-[8vw]">
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
                className="text-[1.75rem] font-almarai font-bold min-[480px]:text-[2rem] md:text-[2.25rem] lg:text-[2rem] xl:text-[2.5rem]
            "
              >
                Let’s discuss your project
              </motion.p>
              <motion.p
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
                className="text-[0.875rem] mt-7 font-catamaran min-[480px]:text-[0.9375rem] sm:text-[3vw] md:text-[1.125rem] lg:text-[1rem] xl:text-[1.25rem]"
              >
                We would love to share ideas, suggest options and answer your
                question.
                <br />
                We're ready to become your guide in the fascinating world of
                construction.
              </motion.p>
            </div>
          </div>
          <video
            autoplay="autoplay"
            muted
            loop
            playsinline
            className="absolute object-cover z-10 h-full w-full"
          >
            <source src={bottomVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      </section>
    </>
  );
};

export default Home;
