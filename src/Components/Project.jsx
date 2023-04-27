import pin from "../utils/icons/Pin.svg";
import mallet from "../utils/icons/Mallet.svg";

const Project = () => {
  return (
    <>
      <section>
        <div>
          <div className="relative h-[57vh] md:h-[100vh]">
            <img
              className="absolute h-full w-full object-cover"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_3.jpg"
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <h3 className="text-[2.125rem] font-semibold font-catamaran mb-12 px-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-40 lg:px-20 lg:text-[4.375rem]">
                  Garden remodeling in Miami, FL
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] xl:px-[7vw]">
          <div className="relative h-auto bg-white -mt-16 mb-16 border overflow-hidden px-6 py-10 md:-mt-40 lg:-mt-44 lg:py-16">
            <img
              className="absolute -right-10 bottom-0 h-32 -rotate-[25deg]"
              src={mallet}
              alt=""
            />
            <div className="grid grid-cols-1 gap-9 min-[480px]:grid-cols-2 sm:px-10 lg:grid-cols-4">
              <div className="flex font-catamaran">
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
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
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
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
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
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
                <div className="relative">
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] font-catamaran xl:px-[7vw]">
          <h1 className="text-[2rem] font-bold text-center mb-4 min-[480px]:text-[2.375rem] lg:text-[3rem]">
            About the project
          </h1>
          <p className="text-gray-500 text-center mb-10 lg:text-[1.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat
            morbi accumsan odio luctus ut quam senectus hendrerit convallis dui
            aenean mauris ut felis in tellus leo lacus sit molestie et augue
            orci, tortor magna malesuada orci id lorem ultrices sapien.
          </p>
        </div>
        <div className="h-auto mx-[5vw] grid grid-cols-1 gap-8 my-10 sm:grid-cols-2 sm:my-16 lg:grid-cols-3 lg:gap-5 xl:px-[7vw]">
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover md:relative"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
