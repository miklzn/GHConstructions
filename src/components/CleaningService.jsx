import vacuum from "../utils/icons/Vacuum.svg";
import paint from "../utils/icons/PaintBlack.svg";
import measuring from "../utils/icons/MeasuringBlack.svg";
import driller from "../utils/icons/DrillerBlack.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const CleaningService = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[92vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://merciacleaningservices.co.uk/images/slider-carpet-cleaning.jpg"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={vacuum}
                alt=""
              />
              <h1 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Cleaning <br /> Service
              </h1>
              <p className="font-catamaran text-gray-300 md:text-[1.125rem]">
                We provide cleaning services for homes and businesses. Our
                trained team uses sustainable products and practices to keep
                your space clean and healthy, from deep cleans to scheduled
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5vw] py-10 font-almarai sm:pb-10 sm:pt-14 lg:px-[7vw]">
        <p className="text-emerald-500 text-[1.125rem] mb-4">/OUR SERVICE</p>
        <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
          About the service
        </h2>
        <p className="mt-7 font-catamaran">
          Our focus is to provide exceptional and reliable cleaning services to
          our clients. Whether you need a deep clean, scheduled maintenance, or
          regular commercial cleaning, our trained and experienced team is here
          to assist.
          <br />
          <br />
          We take pride in using only sustainable products and practices to
          ensure that your home or business is not only clean and healthy but
          also environmentally friendly. Our staff is highly trained to handle
          all types of cleaning needs and always works with attention to detail
          to ensure nothing is overlooked.
          <br />
          <br />
          We strive to maintain clear and open communication with our clients to
          ensure that their expectations are met and exceeded. We understand
          that each client has unique needs and preferences, so we work with you
          to tailor our services to your specific requirements and ensure your
          satisfaction.
          <br />
          <br />
          Trust us to keep your home or business clean and healthy, while
          working with a professional and reliable team that always strives to
          exceed your expectations.
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
              className="w-full justify-center bg-emerald-500 py-4 text-[1rem] font-almarai font-semibold my-5 sm:justify-between sm:py-4 sm:w-auto sm:px-8 md:py-[0.75rem] md:text-[1rem] lg:text-[1.125rem] lg:py-[1rem]"
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={driller}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Repair <br /> Service
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We provide specialized maintenance and repair services in
                electricity, plumbing, roofing, and more. We guarantee reliable
                and efficient solutions to keep your spaces in optimal
                condition.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
              <a href="/repair-services">
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

export default CleaningService;
