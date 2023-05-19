import medal from "../utils/icons/Medal.svg";
import check from "../utils/icons/Check.svg";
import lamp from "../utils/icons/Lamp.svg";

import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="h-auto">
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
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
                className="text-emerald-500 text-[1.125rem] mb-4"
              >
                /ABOUT US
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
                transition={{ delay: 0.2, duration: 1 }}
                viewport={{ once: true }}
                className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]"
              >
                A group of experts ready <br /> to help you.{" "}
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
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }}
                className="mt-7 font-catamaran text-white"
              >
                We are a team of construction experts ready to assist you at
                every stage of your project. We pride ourselves on offering
                customized services to fit your needs and budget. Trust us to
                take your project to the next level.
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
                  className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-9 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-500"
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
                  className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-9 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-600"
                >
                  Services
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-[5vw] py-10 font-almarai lg:px-[7vw]">
          <div
            className="h-auto bg-cover bg-center"
            style={{
              backgroundImage: `url(https://dss.fosterwebmarketing.com/upload/942/nyc-construction-accident-attorneys.jpeg)`,
            }}
          >
            <div className="flex grid grid-cols-2 gap-x-4 gap-y-4 py-16 px-12 backdrop-opacity-10 backdrop-invert bg-black/60 md:grid-cols-4 md:gap-x-12 md:py-24">
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">341</p>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Executed Projects
                </p>
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
                className="relative text-center"
              >
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <p className="text-white">3</p>
                  <span className="text-emerald-500">Y</span>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Years Experience
                </p>
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
                transition={{ delay: 0.75, duration: 1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">217</p>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Client Satisfied
                </p>
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
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">31</p>
                </div>
                <p className="text-white md:text-[1.125rem]">Team Members</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mx-[5vw] py-10 font-almarai ">
          <div className="md:flex md:space-x-14 md:items-center lg:px-[7vw]">
            <div className="md:w-1/2">
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
                /OUR MISSION
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
                Our goal is to provide high-quality work at an affordable price
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
                At G&H Construction, we focus on providing high-quality
                construction services at affordable prices. We strive to
                accommodate our clients' budgets without compromising on
                excellence in our work.
              </motion.p>
            </div>
            <div className="py-10 md:w-1/2">
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
                className="h-[51.338vh] object-cover sm:w-full sm:min-h-[280px] md:min-h-[291px]"
                src="https://content.fortune.com/wp-content/uploads/2016/09/71300566.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-[5vw] py-10 font-almarai">
          <div className="lg:px-[7vw]">
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
              /OUR VALUES
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
              The values that drive our work
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
              We are guided by a strong work ethic based on values that are
              fundamental to us. We work with honesty, integrity, and
              transparency to provide exceptional service to our clients and
              achieve their complete satisfaction.
            </motion.p>
          </div>
          <div className="py-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:px-[7vw]">
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
              className="h-auto shadow-card border border-gray-50 px-6 py-10 text-center"
            >
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={medal} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Quality</h3>
              <p className="font-catamaran text-gray-600">
                In our company, quality is our top priority. We are committed to
                delivering exceptional work on every project we undertake.
              </p>
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
              className="h-auto shadow-card border border-gray-50 px-6 py-10 text-center"
            >
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={check} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Commitment</h3>
              <p className="font-catamaran text-gray-600">
                The commitment is essential. We make sure to fulfill our
                promises and exceed our clients' expectations in every project
                we undertake.
              </p>
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
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
              className="h-auto shadow-card border border-gray-50 px-6 py-10 text-center"
            >
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={lamp} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Innovation</h3>
              <p className="font-catamaran text-gray-600">
                Innovation is a core value at our company. We strive to stay at
                the forefront of the latest trends and technologies in our
                industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
