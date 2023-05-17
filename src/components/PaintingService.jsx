import paint from "../utils/icons/Paint.svg";
import measuring from "../utils/icons/MeasuringBlack.svg";
import driller from "../utils/icons/DrillerBlack.svg";
import tools from "../utils/icons/ToolsBlack.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const PaintingService = () => {
  return (
    <section>
      <div>
        <div className="relative h-[88vh] sm:h-[74vh] sm:min-h-[280px] md:h-screen lg:h-[92vh]">
          <img
            className="absolute h-full w-full object-cover"
            src="https://scontent.faep7-1.fna.fbcdn.net/v/t1.6435-9/193750178_165595418920707_5852149987576009275_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tep3XcqBQSYAX-G5baf&_nc_ht=scontent.faep7-1.fna&oh=00_AfAbaeg6fSf7z9_PYI3TKzp_eMkMPfdAzC6a5Vd5l3fi3w&oe=6481EC78"
            alt=""
          />
          <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40 bg-gradient-to-b from-transparent to-black/90">
            <div className="mx-[5vw] mt-[12vh] w-full text-white md:w-2/3 lg:px-[7vw] xl:mt-[20vh] ">
              <img
                className="h-16 mb-2 md:h-[78px] md:mb-10"
                src={paint}
                alt=""
              />
              <h1 className="text-[2.125rem] font-semibold leading-10 font-almarai mb-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-8 md:leading-none lg:text-[4.375rem]">
                Painting <br /> Service
              </h1>
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
        <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
          About the service
        </h2>
        <p className="mt-7 font-catamaran">
          We specialize in delivering exceptional painting services that
          transform your spaces with impeccable results. With our expertise in
          interior and exterior painting, we bring new life to both residential
          and commercial properties.
          <br />
          <br />
          Using specialized techniques and premium quality materials, our
          skilled team ensures a flawless finish that enhances the aesthetic
          appeal of your spaces. We pay meticulous attention to detail, ensuring
          precise and even application of paint for a professional and
          long-lasting result. <br />
          <br />
          Whether it's refreshing the interior of your home or giving your
          business a vibrant new look, you can trust us to deliver outstanding
          craftsmanship and reliable service. Our commitment to excellence and
          customer satisfaction drives us to go above and beyond to meet your
          painting needs. <br />
          <br />
          Experience the difference of our trusted painting service and let us
          create stunning transformations that exceed your expectations. Contact
          us today for a consultation and discover how we can enhance the beauty
          of your spaces.
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
                src={measuring}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Space <br /> Remodeling
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We transform your spaces with impeccable results. Interior and
                exterior painting for homes and businesses. Trust us to beautify
                your environments with precision and quality.
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
          <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:flex-col">
            <div>
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={tools}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Residential <br /> Construction
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We build custom homes with comprehensive design and construction
                services, including ground-up construction, remodeling, outdoor
                living spaces, landscaping, and sustainable practices.
              </p>
            </div>
            <div className="md:flex md:h-full md:items-end">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingService;
