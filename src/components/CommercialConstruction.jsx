import winch from "../utils/icons/Winch.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import paint from "../utils/icons/PaintBlack.svg";
import measuring from "../utils/icons/MeasuringBlack.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const CommercialConstruction = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[92vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://loganparkinc.com/files/shutterstock/2022/03/shutterstock_601605617_1647975197_e141237af2f3a306d54ab52c8e093f9b2f.jpg?w=1600&a=t"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={winch}
                alt=""
              />
              <h3 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Commercial Construction
              </h3>
              <p className="font-catamaran text-gray-300 md:text-[1.125rem]">
                New projects and remodels for stores, restaurants, gas stations,
                and mid-rise multifamily buildings. We guarantee quality,
                safety, and sustainability to meet your goals on time and
                budget.
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
          We specialize in commercial construction projects, offering services
          for new building construction and renovations for stores, restaurants,
          gas stations, and mid-rise multifamily buildings.
          <br />
          <br />
          In each project, we work closely with our clients to understand their
          specific goals and needs, and create tailor-made solutions that meet
          their requirements.
          <br />
          <br />
          Our commitment is to ensure quality, safety, and sustainability in all
          phases of construction, and to adhere to established timelines and
          budgets. Additionally, we have a highly trained and experienced team,
          as well as state-of-the-art tools and technologies to efficiently and
          effectively carry out each project.
          <br />
          <br />
          Trust us to bring your commercial projects to life, with exceptional
          results and high-quality service.
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={measuring}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Space <br /> Remodeling
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Creativity and quality in transforming your spaces. Homes,
                businesses, and more. We fulfill your visions and create
                functional and attractive spaces with our expert team.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/space-remodeling">
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

export default CommercialConstruction;
