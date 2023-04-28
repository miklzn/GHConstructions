import instagram from "../utils/icons/Instagram.svg";
import facebook from "../utils/icons/Facebook.svg";
import whatsapp from "../utils/icons/Whatsapp.svg";

const Services = () => {
  return (
    <section className="h-screen">
      <div className="py-10 font-almarai  bg-emerald-900 md:py-14 md:w-full lg:px-[7vw] lg:py-12">
        <div className="md:flex md:items-center">
          <div className="px-[5vw] md:w-1/2 ">
            <p className="text-emerald-500 text-[1.125rem] mb-4">/SERVICES</p>
            <h1 className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]">
              Our services
            </h1>
            <p className="mt-7 font-catamaran text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
              porttitor quis quisque erat.
            </p>
          </div>
          <div className="flex w-full justify-center space-x-4 px-[5vw] mt-7 md:w-1/2 md:mt-0">
            <button
              className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-lg md:py-[1rem] md:px-9"
              href="/"
            >
              Contact
            </button>
            <button
              className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-lg md:py-[1rem] md:px-9"
              href="/"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
