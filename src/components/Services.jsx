import tools from "../utils/icons/ToolsBlack.svg";
import winch from "../utils/icons/WinchBlack.svg";
import vacuum from "../utils/icons/Vacuum.svg";
import paint from "../utils/icons/PaintBlack.svg";
import measuring from "../utils/icons/MeasuringBlack.svg";
import driller from "../utils/icons/DrillerBlack.svg";
import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import diagonalArrow from "../utils/icons/DiagonalArrow.svg";

const Services = () => {
  const widthPx = window.innerWidth < 1024 ? window.innerWidth - 8 : 728 + 100;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  //console.log(widthPx);

  return (
    <>
      <section className="h-auto">
        <div className="py-10 font-almarai bg-emerald-900 md:py-14 md:w-full lg:px-[7vw] lg:py-12">
          <div className="md:flex md:items-center">
            <div className="mx-[5vw] md:w-1/2 ">
              <p className="text-emerald-500 text-[1.125rem] mb-4">/SERVICES</p>
              <h1 className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]">
                Our services
              </h1>
              <p className="mt-7 font-catamaran text-white">
                We offer high-quality construction and maintenance services for
                homes and businesses. Our team of experienced professionals is
                committed to excellence and ready to help you achieve your
                goals.
              </p>
            </div>
            <div className="flex justify-center space-x-4 mx-[5vw] mt-7 md:w-1/2 md:mt-0">
              <a className="w-full" href="/contact">
                <button className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-500">
                  Contact
                </button>
              </a>
              <a className="w-full" href="/projects">
                <button className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-600">
                  Projects
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-16 lg:px-[7vw]">
          <div className="mx-[5vw] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                and mid-rise multifamily buildings. We guarantee quality,
                safety, and sustainability to meet your goals on time and
                budget.
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
                We provide cleaning services for homes and businesses. Our
                trained team uses sustainable products and practices to keep
                your space clean and healthy, from deep cleans to scheduled
                maintenance.
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
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
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
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
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
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={driller}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Repair <br /> Services
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                We provide specialized maintenance and repair services in
                electricity, plumbing, roofing, and more. We guarantee reliable
                and efficient solutions to keep your spaces in optimal
                condition.
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
          </div>
        </div>
        <div className="pt-10 pb-6 lg:px-[7vw]">
          <div className="mx-[5vw]">
            <div className="md:flex md:justify-between md:items-center">
              <div className="font-almarai md:w-8/12">
                <p className="text-emerald-500 text-[1.125rem] mb-4 font-bold">
                  /TESTIMONIALS
                </p>
                <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
                  What our clients say about us and our work
                </h2>
              </div>
              <div className="hidden flex justify-end md:block md:flex md:space-x-3 md:w-4/12">
                <button
                  onClick={scrollLeft}
                  className="border border-black p-[0.825rem] md:p-5 hover:bg-emerald-500"
                >
                  <img className="h-5 md:h-6" src={leftArrow} alt="" />
                </button>
                <button
                  onClick={scrollRight}
                  className="border p-[0.825rem] bg-emerald-500 md:p-5 hover:bg-emerald-600"
                >
                  <img className="h-5 md:h-6" src={rightArrow} alt="" />
                </button>
              </div>
            </div>
            <div className="pt-20 md:pb-20">
              <div
                id="content"
                className="p-1 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[10vw] lg:p-1 "
              >
                <div>
                  <div className="shadow-card border border-gray-50 h-auto w-[87vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
                    <div className="md:w-1/2">
                      <img
                        className="mb-8 sm:w-full md:mb-0"
                        src="https://assets.website-files.com/62ff9dff9c2362f8fb83a28e/62ff9dff9c2362d63583a469_lily-woods-testimonial-image-contractor-webflow-template-p-500.png"
                        alt=""
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="mb-3 text-[1.375rem] font-almarai font-bold">
                        “A true team of expert contractors”
                      </h3>
                      <p className="font-catamaran text-gray-500 md:text-[1.125rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis senectus non dui vel tortor. Justo lectus
                        integer arcu elit.
                      </p>
                      <div className="pt-8 font-almarai font-bold">
                        <span className="md:text-[1.125rem]">Lily Woods</span>
                        <div className="mt-1.5 text-[0.875rem] text-gray-500">
                          ORLANDO, FL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadow-card border border-gray-50 h-auto w-[87vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
                    <div className="md:w-1/2">
                      <img
                        className="mb-8 sm:w-full md:mb-0"
                        src="https://assets.website-files.com/62ff9dff9c2362f8fb83a28e/62ff9dff9c2362d63583a469_lily-woods-testimonial-image-contractor-webflow-template-p-500.png"
                        alt=""
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="mb-3 text-[1.375rem] font-almarai font-bold">
                        “A true team of expert contractors”
                      </h3>
                      <p className="font-catamaran text-gray-500 md:text-[1.125rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis senectus non dui vel tortor. Justo lectus
                        integer arcu elit.
                      </p>
                      <div className="pt-8 font-almarai font-bold">
                        <span className="md:text-[1.125rem]">Lily Woods</span>
                        <div className="mt-1.5 text-[0.875rem] text-gray-500">
                          ORLANDO, FL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadow-card border border-gray-50 h-auto w-[87vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
                    <div className="md:w-1/2">
                      <img
                        className="mb-8 sm:w-full md:mb-0"
                        src="https://assets.website-files.com/62ff9dff9c2362f8fb83a28e/62ff9dff9c2362d63583a469_lily-woods-testimonial-image-contractor-webflow-template-p-500.png"
                        alt=""
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="mb-3 text-[1.375rem] font-almarai font-bold">
                        “A true team of expert contractors”
                      </h3>
                      <p className="font-catamaran text-gray-500 md:text-[1.125rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis senectus non dui vel tortor. Justo lectus
                        integer arcu elit.
                      </p>
                      <div className="pt-8 font-almarai font-bold">
                        <span className="md:text-[1.125rem]">Lily Woods</span>
                        <div className="mt-1.5 text-[0.875rem] text-gray-500">
                          ORLANDO, FL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Services;
