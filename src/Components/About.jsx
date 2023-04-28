import medal from "../utils/icons/Medal.svg";

const About = () => {
  return (
    <>
      <section className="h-auto">
        <div className="px-[5vw] py-10 font-almarai  bg-emerald-900">
          <p className="text-emerald-500 text-[1.125rem] mb-4">/ABOUT US</p>
          <h1 className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem] md:pr-48">
            A team of expert contractors ready to help you
          </h1>
          <p className="mt-7 font-catamaran text-white md:text-[1.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
            porttitor quis quisque erat.
          </p>
        </div>
        <div className="px-[5vw] py-10 font-almarai">
          <div
            className="h-auto bg-cover bg-center"
            style={{
              backgroundImage: `url(https://dss.fosterwebmarketing.com/upload/942/nyc-construction-accident-attorneys.jpeg)`,
            }}
          >
            <div className="flex grid grid-cols-2 gap-x-4 gap-y-4 py-16 px-12 backdrop-opacity-10 backdrop-invert bg-black/60 md:grid-cols-4 md:gap-x-12 md:py-24">
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">341</p>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Executed Projects
                </p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <p className="text-white">3</p>
                  <span className="text-emerald-500">Y</span>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Years Experience
                </p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">217</p>
                </div>
                <p className="text-white md:text-[1.125rem]">
                  Client Satisfied
                </p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center min-[480px]:text-[2.5rem] md:text-[3.25rem]">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">31</p>
                </div>
                <p className="text-white md:text-[1.125rem]">Team Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[5vw] py-10 font-almarai ">
          <div className="md:flex md:space-x-14 md:items-center">
            <div className="md:w-1/2">
              <p className="text-emerald-500 text-[1.125rem] mb-4">
                /OUR MISSION
              </p>
              <h1 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
                Our goal is to deliver high quality work at an affordable price
              </h1>
              <p className="mt-7 font-catamaran">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst
                porttitor porttitor quis quisque erat.
              </p>
            </div>
            <div className="py-10 md:w-1/2">
              <img
                className="h-[51.338vh] object-cover sm:w-full"
                src="https://content.fortune.com/wp-content/uploads/2016/09/71300566.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-[5vw] py-10 font-almarai">
          <div>
            <p className="text-emerald-500 text-[1.125rem] mb-4">/OUR VALUES</p>
            <h1 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
              The values that drive our work
            </h1>
            <p className="mt-7 font-catamaran">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
              porttitor quis quisque erat.
            </p>
          </div>
          <div className="py-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="h-auto border px-6 py-10 text-center">
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={medal} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Quality</h3>
              <p className="font-catamaran text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut dolor
                arcu dictum at neque commodo.
              </p>
            </div>
            <div className="h-auto border px-6 py-10 text-center">
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={medal} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Quality</h3>
              <p className="font-catamaran text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut dolor
                arcu dictum at neque commodo.
              </p>
            </div>
            <div className="h-auto border px-6 py-10 text-center">
              <div className="flex justify-center mb-4 min-[480px]:mb-5">
                <img className="w-14 min-[480px]:w-[70px]" src={medal} alt="" />
              </div>
              <h3 className="mb-3 min-[480px]:text-[1.25rem]">Quality</h3>
              <p className="font-catamaran text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut dolor
                arcu dictum at neque commodo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
