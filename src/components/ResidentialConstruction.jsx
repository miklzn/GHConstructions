import tools from "../utils/icons/Tools.svg";
import winch from "../utils/icons/WinchBlack.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import paint from "../utils/icons/PaintBlack.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const ResidentialConstruction = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[92vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="http://www.landmarkco.info/wp-content/uploads/2016/11/residential-construction-hero-1024x685.jpg"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={tools}
                alt=""
              />
              <h3 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Residential Construction
              </h3>
              <p className="font-catamaran text-gray-300 md:text-[1.125rem]">
                We build custom homes with comprehensive design and construction
                services, including ground-up construction, remodeling, outdoor
                living spaces, landscaping, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5vw] py-10 font-almarai sm:pb-10 sm:pt-14 lg:px-[7vw]">
        <p className="text-emerald-500 text-[1.125rem] mb-4">/OUR SERVICE</p>
        <h1 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
          About the service
        </h1>
        <p className="mt-7 font-catamaran">
          At our company, we offer comprehensive design and construction
          services for custom homes, from planning to construction and
          maintenance. We specialize in ground-up construction, home remodeling,
          and the creation of outdoor spaces, such as entertainment areas and
          gardens.
          <br />
          <br />
          Additionally, we provide landscaping and hardscaping services,
          allowing us to create a complete experience for our clients in their
          homes. We are also proud to offer sustainable and
          environmentally-friendly practices to help reduce the environmental
          impact of every project we build.
          <br />
          <br />
          As a design-build company, we take care of the entire process,
          ensuring quality, consistency, and efficiency in every project. We
          make sure to work closely with our clients to understand their needs
          and expectations, providing them with personalized and practical
          solutions to meet their design and construction goals.
          <br />
          <br />
          With our focus on quality, attention to detail, and exceptional
          customer service, you can rest assured that your home is in good hands
          with us. Let us bring your vision to reality and create the custom
          home you have always dreamed of.
        </p>
      </div>
      <div className="mx-[5vw] lg:px-[7vw]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-[2rem] font-almarai font-semibold leading-10 min-[480px]:text-[2.25rem]">
            More of our services
          </h2>
          <a href="/services">
            <button
              type="submit"
              className="w-full justify-center bg-emerald-500 py-4 text-[1rem] font-almarai font-semibold my-5
            sm:justify-between sm:py-4 sm:w-auto sm:px-8 md:py-[0.75rem] md:text-[1rem] lg:text-[1.125rem] lg:py-[1rem]"
            >
              All services
            </button>
          </a>
        </div>
        <div className="py-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
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
                <div className="flex items-center font-almarai md:text-[1.125rem]">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
          </div>
          <div className="shadow-card bg-emerald-900 border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
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
                <div className="flex text-white items-center font-almarai md:text-[1.125rem]">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
          </div>
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Painting <br /> Service
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We transform your spaces with impeccable results. Interior and
                exterior painting for homes and businesses. Trust us to beautify
                your environments with precision and quality.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/painting-service">
                <div className="flex items-center font-almarai md:text-[1.125rem]">
                  <img
                    className="h-[30px] mr-2 bg-emerald-500"
                    src={diagonalArrow}
                    alt=""
                  />
                  Learn more
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialConstruction;
