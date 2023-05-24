import React, { useState } from "react";
import client from "../utils/icons/Client.svg";
import pin from "../utils/icons/Pin.svg";
import clock from "../utils/icons/Clock.svg";
import mansory from "../utils/icons/Mansory.svg";
import mallet from "../utils/icons/Mallet.svg";
import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import close from "../utils/icons/Close.svg";

import project_2_1 from "../utils/images/project-2/project-2-1.jpg";
import project_2_2 from "../utils/images/project-2/project-2-2.jpg";
import project_2_3 from "../utils/images/project-2/project-2-3.jpg";
import project_2_4 from "../utils/images/project-2/project-2-4.jpg";
import project_2_5 from "../utils/images/project-2/project-2-5.jpg";
import project_2_6 from "../utils/images/project-2/project-2-6.jpg";

import { motion } from "framer-motion";

const images = [
  project_2_1,
  project_2_2,
  project_2_3,
  project_2_4,
  project_2_5,
  project_2_6,
];

const ProjectTwo = () => {
  const [dataImg, setDataImg] = useState({ img: "", i: 0 });

  const widthPx =
    window.innerWidth < 768
      ? window.innerWidth * 0.9
      : window.innerWidth * 0.33;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  const viewImage = (img, i) => {
    setDataImg({ img, i });
  };

  const imgAction = (action) => {
    let i = dataImg.i;
    if (action === "next") {
      setDataImg({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous") {
      setDataImg({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setDataImg({ img: "", i: 0 });
    }
  };

  return (
    <>
      <section>
        <div>
          <div className="relative h-[57vh] sm:min-h-[280px] md:h-[100vh]">
            <img
              className="absolute h-full w-full object-cover"
              src={project_2_1}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
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
                  className="text-[2.125rem] font-semibold font-almarai mb-12 px-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-40 lg:px-20 lg:text-[4.375rem]"
                >
                  Kitchen remodeling in Tampa, FL
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] xl:px-[7vw]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="relative h-auto bg-white -mt-16 mb-16 border border-gray-50 shadow-card overflow-hidden px-6 py-10 md:-mt-40 lg:-mt-44 lg:py-16"
          >
            <img
              className="absolute -right-10 bottom-0 h-32 -rotate-[25deg]"
              src={mallet}
              alt=""
            />
            <div className="grid grid-cols-1 gap-9 min-[480px]:grid-cols-2 sm:px-10 lg:grid-cols-4">
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex font-catamaran"
              >
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={client}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
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
                transition={{ delay: 0.5, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex font-catamaran"
              >
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.375rem]">
                    Location
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    Tampa, FL
                  </div>
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
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex font-catamaran"
              >
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={clock}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.375rem]">
                    Time
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    3 Weeks
                  </div>
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
                transition={{ delay: 0.7, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex font-catamaran"
              >
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={mansory}
                  alt=""
                />
                <div className="relative">
                  <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.375rem]">
                    Service
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    Remodeling
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="h-auto mx-[5vw] font-catamaran xl:px-[7vw]">
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
            className="text-[2rem] font-bold font-almarai mb-4 leading-10 min-[480px]:text-[2.25rem]"
          >
            About the project
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
            className="text-gray-500 mb-10 lg:text-[1.125rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat
            morbi accumsan odio luctus ut quam senectus hendrerit convallis dui
            aenean mauris ut felis in tellus leo lacus sit molestie et augue
            orci, tortor magna malesuada orci id lorem ultrices sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat
            morbi accumsan odio luctus ut quam senectus hendrerit convallis dui
            aenean mauris ut felis in tellus leo lacus sit molestie et augue
            orci, tortor magna malesuada orci id lorem ultrices sapien.
          </motion.p>
        </div>
        <div className="h-auto pt-4 mx-[5vw] md:pt-8 xl:px-[7vw]">
          <div className="md:flex md:justify-between">
            <div className="font-almarai">
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
                className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem] md:py-4"
              >
                Gallery
              </motion.h2>
            </div>
            <div className="hidden flex justify-end md:block md:flex md:space-x-3 md:w-4/12">
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
                onClick={scrollLeft}
                className="border border-black p-[0.825rem] md:p-5"
              >
                <img className="h-5 md:h-6" src={leftArrow} alt="" />
              </motion.button>
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
                onClick={scrollRight}
                className="border p-[0.825rem] bg-emerald-500 md:p-5"
              >
                <img className="h-5 md:h-6" src={rightArrow} alt="" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="mx-[5vw] py-10 md:py-20 xl:px-[7vw]">
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
            id="content"
            className="snap-x flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-3 lg:px-3"
          >
            {images.map((image, i) => (
              <div className="snap-center cursor-pointer md:snap-start">
                <div className="w-[90vw] md:w-[30vw]">
                  <img
                    key={i}
                    className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                    src={image}
                    alt=""
                    onClick={() => viewImage(image, i)}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="block flex justify-center space-x-3 mb-10 md:hidden">
          <button
            onClick={scrollLeft}
            className="border border-black p-[0.825rem]"
          >
            <img className="h-5" src={leftArrow} alt="" />
          </button>
          <button
            onClick={scrollRight}
            className="border p-[0.825rem] bg-emerald-500"
          >
            <img className="h-5" src={rightArrow} alt="" />
          </button>
        </div>
      </section>
      {dataImg.img && (
        <div
          className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute flex bg-black opacity-80 inset-0 z-0"></div>
          <button
            onClick={() => imgAction()}
            className="absolute top-2 right-2 bg-emerald-500 p-2"
          >
            <img className="h-5" src={close} alt="" />
          </button>
          <button onClick={() => imgAction("previous")}>
            <img
              className="absolute h-10 bg-emerald-500 p-2 z-10 left-0 min-[480px]:relative"
              src={leftArrow}
              alt=""
            />
          </button>
          <img
            className="relative w-full max-w-sm h-auto p-3 sm:max-w-md md:max-w-lg md:p-6"
            src={dataImg.img}
            alt=""
          />
          <button onClick={() => imgAction("next")}>
            <img
              className="absolute h-10 bg-emerald-500 p-2 z-10 right-0 min-[480px]:relative"
              src={rightArrow}
              alt=""
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectTwo;
