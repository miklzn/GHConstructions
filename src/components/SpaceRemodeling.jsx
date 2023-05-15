import measuring from "../utils/icons/Measuring.svg";
import driller from "../utils/icons/DrillerBlack.svg";
import tools from "../utils/icons/ToolsBlack.svg";
import winch from "../utils/icons/WinchBlack.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const SpaceRemodeling = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[88vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://junebellehomes.com/wp-content/uploads/2015/08/hickory-nc-home-remodeling-contractors-scaled.jpg"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={measuring}
                alt=""
              />
              <h3 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Space <br /> Remodeling
              </h3>
              <p className="font-catamaran text-gray-300 md:text-[1.125rem]">
                We transform your spaces with impeccable results. Interior and
                exterior painting for homes and businesses. Trust us to beautify
                your environments with precision and quality.
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
          In our company, we specialize in space remodeling to provide you with
          renewed and functional environments that cater to your needs and
          reflect your personal style. Our dedicated team of remodeling experts
          works closely with you to understand your vision and transform your
          spaces into extraordinary places. <br />
          <br />
          From home renovation to business remodeling, we are committed to
          delivering high-quality results. We use premium materials and
          innovative techniques to ensure that each project is a true success.
          Whether you desire to update your kitchen, renovate your bathroom, or
          transform your commercial space, we are here to bring your vision to
          life. <br />
          <br />
          We take pride in offering a wide range of services, including interior
          remodeling, creating stunning outdoor spaces, and optimizing the flow
          and design of your areas. Our focus is on every detail, from selecting
          colors and materials to the impeccable execution of the work. <br />
          <br />
          Your satisfaction is our priority, and we strive to exceed your
          expectations in every project. We work with integrity, transparency,
          and commitment to ensure that your remodeling experience is smooth and
          satisfying.
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
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
              and efficient solutions to keep your spaces in optimal condition.
            </p>
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
              We build custom homes with comprehensive design and construction
              services, including ground-up construction, remodeling, outdoor
              living spaces, landscaping, and sustainable practices.
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
              New projects and remodels for stores, restaurants, gas stations,
              and mid-rise multifamily buildings. We guarantee quality, safety,
              and sustainability to meet your goals on time and budget.
            </p>
            <a href="commercial-construction">
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
    </section>
  );
};

export default SpaceRemodeling;
