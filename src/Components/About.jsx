import medal from "../utils/icons/Medal.svg";

const About = () => {
  return (
    <>
      <section className="h-auto">
        <div className="px-[5vw] py-10 font-almarai  bg-emerald-900">
          <p className="text-emerald-500 text-[1.125rem] mb-4">/ABOUT US</p>
          <h1 className="text-[2.125rem] text-white font-semibold leading-10">
            A team of expert contractors ready to help you
          </h1>
          <p className="mt-7 font-catamaran text-white">
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
            <div className="flex grid grid-cols-2 gap-x-4 gap-y-4 py-16 px-12 backdrop-opacity-10 backdrop-invert bg-black/60">
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">341</p>
                </div>
                <p className="text-white">Executed Projects</p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center">
                  <p className="text-white">3</p>
                  <span className="text-emerald-500">Y</span>
                </div>
                <p className="text-white">Years Experience</p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">217</p>
                </div>
                <p className="text-white">Client Satisfied</p>
              </div>
              <div className="relative text-center">
                <div className="flex text-[2.125rem] font-bold justify-center">
                  <span className="text-emerald-500">+</span>
                  <p className="text-white">31</p>
                </div>
                <p className="text-white">Team Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[5vw] py-10 font-almarai ">
          <div>
            <p className="text-emerald-500 text-[1.125rem] mb-4">
              /OUR MISSION
            </p>
            <h1 className="text-[2rem] font-semibold leading-10">
              Our goal is to deliver high quality work at an affordable price
            </h1>
            <p className="mt-7 font-catamaran">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
              porttitor quis quisque erat.
            </p>
          </div>
          <div className="py-10">
            <img
              className="h-[51.338vh] object-cover"
              src="https://content.fortune.com/wp-content/uploads/2016/09/71300566.jpg?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="px-[5vw] py-10 font-almarai">
          <div>
            <p className="text-emerald-500 text-[1.125rem] mb-4">/OUR VALUES</p>
            <h1 className="text-[2rem] font-semibold leading-10">
              The values that drive our work
            </h1>
            <p className="mt-7 font-catamaran">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
              porttitor quis quisque erat.
            </p>
          </div>
          <div>
            <div className="h-auto border px-6 py-10 justify-center">
              <div>
                <img className="w-14" src={medal} alt="" />
              </div>
              <h3>Quality</h3>
              <p className="font-catamaran">
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
