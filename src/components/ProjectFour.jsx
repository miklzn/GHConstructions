import client from "../utils/icons/Client.svg";
import pin from "../utils/icons/Pin.svg";
import clock from "../utils/icons/Clock.svg";
import mansory from "../utils/icons/Mansory.svg";
import mallet from "../utils/icons/Mallet.svg";
import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import project_4_1 from "../utils/images/project-4/project-4-1.jpg";
import project_4_2 from "../utils/images/project-4/project-4-2.jpg";
import project_4_3 from "../utils/images/project-4/project-4-3.jpg";
import project_4_4 from "../utils/images/project-4/project-4-4.jpg";
import project_4_5 from "../utils/images/project-4/project-4-5.jpg";
import project_4_6 from "../utils/images/project-4/project-4-6.jpg";

const ProjectFour = () => {
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

  // console.log(widthPx);

  return (
    <>
      <section>
        <div>
          <div className="relative h-[57vh] sm:min-h-[280px] md:h-[100vh]">
            <img
              className="absolute h-full w-full object-cover"
              src={project_4_1}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <h1 className="text-[2.125rem] font-semibold font-almarai mb-12 px-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-40 lg:px-20 lg:text-[4.375rem]">
                  Kitchen remodeling in Orlando, FL
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] xl:px-[7vw]">
          <div className="relative h-auto bg-white -mt-16 mb-16 border border-gray-50 shadow-card overflow-hidden px-6 py-10 md:-mt-40 lg:-mt-44 lg:py-16">
            <img
              className="absolute -right-10 bottom-0 h-32 -rotate-[25deg]"
              src={mallet}
              alt=""
            />
            <div className="grid grid-cols-1 gap-9 min-[480px]:grid-cols-2 sm:px-10 lg:grid-cols-4">
              <div className="flex font-catamaran">
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
              </div>
              <div className="flex font-catamaran">
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
                    Orlando, FL
                  </div>
                </div>
              </div>
              <div className="flex font-catamaran">
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
              </div>
              <div className="flex font-catamaran">
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
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] font-catamaran xl:px-[7vw]">
          <h2 className="text-[2rem] font-bold font-almarai mb-4 leading-10 min-[480px]:text-[2.25rem]">
            About the project
          </h2>
          <p className="text-gray-500 mb-10 lg:text-[1.125rem]">
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
          </p>
        </div>
        <div className="h-auto pt-4 mx-[5vw] md:pt-8 xl:px-[7vw]">
          <div className="md:flex md:justify-between">
            <div className="font-almarai">
              <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem] md:py-4">
                Gallery
              </h2>
            </div>
            <div className="hidden flex justify-end md:block md:flex md:space-x-3 md:w-4/12">
              <button
                onClick={scrollLeft}
                className="border border-black p-[0.825rem] md:p-5"
              >
                <img className="h-5 md:h-6" src={leftArrow} alt="" />
              </button>
              <button
                onClick={scrollRight}
                className="border p-[0.825rem] bg-emerald-500 md:p-5"
              >
                <img className="h-5 md:h-6" src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-[5vw] py-10 md:py-20 xl:px-[7vw]">
          <div
            id="content"
            className="snap-x flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-3 lg:px-3"
          >
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_1}
                  alt=""
                />
              </div>
            </div>
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_2}
                  alt=""
                />
              </div>
            </div>
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_3}
                  alt=""
                />
              </div>
            </div>
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_4}
                  alt=""
                />
              </div>
            </div>
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_5}
                  alt=""
                />
              </div>
            </div>
            <div className="snap-center md:snap-start">
              <div className="w-[90vw] md:w-[30vw]">
                <img
                  className="object-cover w-full h-[50vh] sm:h-[70vh] md:relative md:h-[40vh] md:min-h-[206px]"
                  src={project_4_6}
                  alt=""
                />
              </div>
            </div>
          </div>
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
    </>
  );
};

export default ProjectFour;
