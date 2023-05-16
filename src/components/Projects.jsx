import client from "../utils/icons/Client.svg";
import pin from "../utils/icons/Pin.svg";
import clock from "../utils/icons/Clock.svg";
import mansory from "../utils/icons/Mansory.svg";

const Projects = () => {
  return (
    <section>
      <div className="py-10 font-almarai bg-emerald-900 md:py-14 md:w-full lg:px-[7vw] lg:py-12">
        <div className="md:flex md:items-center">
          <div className="mx-[5vw] md:w-1/2 ">
            <p className="text-emerald-500 text-[1.125rem] mb-4">/PROJECTS</p>
            <h1 className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]">
              Our projects
            </h1>
            <p className="mt-7 font-catamaran text-white">
              In every project we undertake, we leave our mark of quality and
              commitment. Each space we create is a testament to our passion for
              excellence in construction and maintenance. Let our work speak for
              itself and discover what we can do for you.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mx-[5vw] mt-7 md:w-1/2 md:mt-0">
            <a className="w-full" href="/contact">
              <button className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-500">
                Contact
              </button>
            </a>
            <a className="w-full" href="/services">
              <button className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem] hover:bg-emerald-600">
                Services
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto mx-[5vw] py-20 lg:px-[7vw]">
        <div className="grid grid-cols gap-10 lg:gap-20">
          <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
            <img
              className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3"
              src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
              alt=""
            />
            <div className="md:pl-4 md:flex-col">
              <div className="">
                <p className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                  Remodeling Bathroom
                </p>
              </div>
              <div className="">
                <div className="block font-catamaran space-y-1 md:hidden">
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={pin}
                      alt=""
                    />
                    <p className="font-semibold">Miami, FL</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={clock}
                      alt=""
                    />
                    <p className="font-semibold">3 weeks</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={mansory}
                      alt=""
                    />
                    <p className="font-semibold">Remodeling</p>
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  <div className="grid grid-cols gap-y-2">
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={client}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Client
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          John Carter
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={pin}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Location
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Tampa, FL
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={clock}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Time
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          3 Weeks
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={mansory}
                        alt=""
                      />
                      <div className="relative">
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Service
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Remodeling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
            <img
              className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3"
              src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
              alt=""
            />
            <div className="md:pl-4 md:flex-col">
              <div className="">
                <p className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                  Remodeling Bathroom
                </p>
              </div>
              <div className="">
                <div className="block font-catamaran space-y-1 md:hidden">
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={pin}
                      alt=""
                    />
                    <p className="font-semibold">Miami, FL</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={clock}
                      alt=""
                    />
                    <p className="font-semibold">3 weeks</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={mansory}
                      alt=""
                    />
                    <p className="font-semibold">Remodeling</p>
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  <div className="grid grid-cols gap-y-2">
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={client}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Client
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          John Carter
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={pin}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Location
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Tampa, FL
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={clock}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Time
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          3 Weeks
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={mansory}
                        alt=""
                      />
                      <div className="relative">
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Service
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Remodeling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
            <img
              className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3"
              src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
              alt=""
            />
            <div className="md:pl-4 md:flex-col">
              <div className="">
                <p className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                  Remodeling Bathroom
                </p>
              </div>
              <div className="">
                <div className="block font-catamaran space-y-1 md:hidden">
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={pin}
                      alt=""
                    />
                    <p className="font-semibold">Miami, FL</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={clock}
                      alt=""
                    />
                    <p className="font-semibold">3 weeks</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={mansory}
                      alt=""
                    />
                    <p className="font-semibold">Remodeling</p>
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  <div className="grid grid-cols gap-y-2">
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={client}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Client
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          John Carter
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={pin}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Location
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Tampa, FL
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={clock}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Time
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          3 Weeks
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={mansory}
                        alt=""
                      />
                      <div className="relative">
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Service
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Remodeling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-card p-2 text-[0.875rem] min-[480px]:text-[0.9375rem] sm:text-[1rem] sm:mb-5 md:text-[1.25rem] md:flex md:items-center md:mb-0 md:p-2 md:shadow-card lg:text-[1.375rem]">
            <img
              className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[45vh] md:min-h-[270px] md:w-2/3"
              src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
              alt=""
            />
            <div className="md:pl-4 md:flex-col">
              <div className="">
                <p className="font-almarai my-2 sm:my-6 md:my-0 md:mb-3">
                  Remodeling Bathroom
                </p>
              </div>
              <div className="">
                <div className="block font-catamaran space-y-1 md:hidden">
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={pin}
                      alt=""
                    />
                    <p className="font-semibold">Miami, FL</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={clock}
                      alt=""
                    />
                    <p className="font-semibold">3 weeks</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-6 p-0.5 bg-emerald-500 mr-1"
                      src={mansory}
                      alt=""
                    />
                    <p className="font-semibold">Remodeling</p>
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  <div className="grid grid-cols gap-y-2">
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={client}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Client
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          John Carter
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={pin}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Location
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Tampa, FL
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={clock}
                        alt=""
                      />
                      <div>
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Time
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          3 Weeks
                        </div>
                      </div>
                    </div>
                    <div className="flex font-catamaran">
                      <img
                        className="bg-emerald-500 p-2 w-10 mr-4 lg:w-12"
                        src={mansory}
                        alt=""
                      />
                      <div className="relative">
                        <div className="text-[1.125rem] font-bold font-almarai lg:text-[1.125rem]">
                          Service
                        </div>
                        <div className="text-[1rem] text-gray-500 lg:text-[1rem]">
                          Remodeling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
