import driller from "../utils/icons/Driller.svg";
import tools from "../utils/icons/ToolsBlack.svg";
import winch from "../utils/icons/WinchBlack.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

import { motion } from "framer-motion";

const RepairServices = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[92vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://white-electric.com/wp-content/uploads/2021/01/home-electrical-repair.jpg"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
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
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={driller}
                alt=""
              />
              <motion.h1
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
                className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]"
              >
                Repair <br /> Services
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
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
                className="font-catamaran text-gray-300 md:text-[1.125rem]"
              >
                We provide specialized maintenance and repair services in
                electricity, plumbing, roofing, and more. We guarantee reliable
                and efficient solutions to keep your spaces in optimal
                condition.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5vw] py-10 font-almarai sm:pb-10 sm:pt-14 lg:px-[7vw]">
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
          /OUR SERVICE
        </motion.p>
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
          className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]"
        >
          About the service
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
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-7 font-catamaran"
        >
          In our company, we specialize in providing professional maintenance
          and repair services for your home and business. Our team of experts
          handles specialized solutions in electricity, plumbing, roofing, and
          more. We are committed to offering reliable and efficient solutions to
          keep your spaces in optimal condition. <br />
          <br />
          We understand the importance of having a reliable and high-quality
          service. Whether you need urgent repairs, scheduled maintenance, or
          customized solutions, you can trust us to meet all your maintenance
          and repair needs. Our team is trained to address a wide range of
          issues and ensure exceptional results. <br />
          <br />
          Your satisfaction is our top priority. We work with professionalism,
          integrity, and efficiency to provide you with a maintenance and repair
          service that exceeds your expectations.
        </motion.p>
      </div>
      <div className="mx-[5vw] lg:px-[7vw]">
        <div className="sm:flex sm:items-center sm:justify-between">
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
            className="text-[2rem] font-almarai font-semibold leading-10 min-[480px]:text-[2.25rem]"
          >
            More of our services
          </motion.h2>
          <a href="/services">
            <motion.button
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
              type="submit"
              className="w-full justify-center bg-emerald-500 py-4 text-[1rem] font-almarai font-semibold my-5
sm:justify-between sm:py-4 sm:w-auto sm:px-8 md:py-[0.75rem] md:text-[1rem] lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-600"
            >
              All services
            </motion.button>
          </a>
        </div>
        <div className="py-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
            className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col"
          >
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={tools}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Residential <br /> Construction
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We build custom homes with comprehensive design and construction
                services, including ground-up construction, remodeling, outdoor
                living spaces, landscaping, and sustainable practices.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/residential-construction">
                <div className="flex items-center font-almarai md:text-[1.125rem] hover:text-emerald-500">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
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
            className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col"
          >
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={winch}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Commercial <br /> Construction
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                New projects and remodels for stores, restaurants, gas stations,
                and mid-rise multifamily buildings. We guarantee quality,
                safety, and sustainability to meet your goals on time and
                budget.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/commercial-construction">
                <div className="flex items-center font-almarai md:text-[1.125rem] hover:text-emerald-500">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
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
            className="shadow-card bg-emerald-900 border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col"
          >
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={vacuum}
                alt=""
              />
              <h2 className="font-almarai text-white font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Cleaning <br /> Service
              </h2>
              <p className="font-catamaran mb-4 text-gray-300 md:text-[1.125rem]">
                We provide cleaning services for homes and businesses. Our
                trained team uses sustainable products and practices to keep
                your space clean and healthy, from deep cleans to scheduled
                maintenance.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/cleaning-service">
                <div className="flex text-white items-center font-almarai md:text-[1.125rem] hover:text-emerald-500">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RepairServices;
