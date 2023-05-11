import driller from "../utils/icons/Driller.svg";
import tools from "../utils/icons/ToolsBlack.svg";
import winch from "../utils/icons/WinchBlack.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const HomeRepair = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[88vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://white-electric.com/wp-content/uploads/2021/01/home-electrical-repair.jpg"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={driller}
                alt=""
              />
              <h3 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Home <br /> Repair
              </h3>
              <p className="font-catamaran text-gray-300 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst
                porttitor.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi
          accumsan odio luctus ut quam senectus hendrerit convallis dui aenean
          mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor
          magna malesuada orci id lorem ultrices sapien.
        </p>
        <ul className="pl-7 mt-6 font-catamaran space-y-2 mb-6 md:text-lg">
          <li type="disc">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae.
          </li>
          <li type="disc">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae.
          </li>
          <li type="disc">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae.
          </li>
          <li type="disc">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae.
          </li>
        </ul>
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
            <img
              className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
              src={tools}
              alt=""
            />
            <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
              Residential <br /> Construcction
            </h2>
            <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
              pharetra, habitasse turpis feugiat scelerisque nisi vestibulum eu
              nibh.
            </p>
            <a href="/residential-construction">
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
            <img
              className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
              src={winch}
              alt=""
            />
            <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
              Commercial <br /> Construction
            </h2>
            <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
              pharetra, habitasse turpis feugiat scelerisque nisi vestibulum eu
              nibh.
            </p>
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
          <div className="shadow-card bg-emerald-900 border border-gray-50 h-auto px-6 py-10">
            <img
              className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
              src={vacuum}
              alt=""
            />
            <h2 className="font-almarai text-white font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
              Cleaning <br /> Service
            </h2>
            <p className="font-catamaran mb-4 text-gray-300 md:text-[1.125rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
              pharetra, habitasse turpis feugiat scelerisque nisi vestibulum eu
              nibh.
            </p>
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
      </div>
    </section>
  );
};

export default HomeRepair;
