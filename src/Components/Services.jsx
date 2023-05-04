import paint from "../utils/icons/Paint.svg";

const Services = () => {
  const widthPx = window.innerWidth < 1024 ? window.innerWidth : 728 + 100;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  console.log(widthPx);

  return (
    <>
      <section className="h-auto">
        <div className="py-10 font-almarai  bg-emerald-900 md:py-14 md:w-full lg:px-[7vw] lg:py-12">
          <div className="md:flex md:items-center">
            <div className="px-[5vw] md:w-1/2 ">
              <p className="text-emerald-500 text-[1.125rem] mb-4">/SERVICES</p>
              <h1 className="text-[2.125rem] text-white font-semibold leading-10 min-[480px]:text-[2.5rem]">
                Our services
              </h1>
              <p className="mt-7 font-catamaran text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst
                porttitor porttitor quis quisque erat.
              </p>
            </div>
            <div className="flex w-full justify-center space-x-4 px-[5vw] mt-7 md:w-1/2 md:mt-0">
              <button
                className="bg-white w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem]"
                href="/"
              >
                Contact
              </button>
              <button
                className="bg-emerald-500 w-full py-2.5 px-6 text-sm text-gray-900 min-[480px]:w-full min-[480px]:text-base sm:w-full sm:py-[1.127rem] md:text-[1rem] md:py-[0.75rem] md:px-0 lg:text-[1.125rem] lg:py-[1rem]"
                href="/"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-16 lg:px-[7vw]">
          <div className="px-[5vw] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4 lg:text-[1.5rem]">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
            <div className="shadow-card border border-gray-50 h-auto px-6 py-10">
              <img
                className="w-12 min-[480px]:w-16 min-[480px]:mb-6"
                src={paint}
                alt=""
              />
              <h2 className="font-almarai font-bold text-[1.375rem] my-4">
                Project Planning
              </h2>
              <p className="font-catamaran mb-4 text-gray-500 md:text-[1.125rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor,
                pharetra, habitasse turpis feugiat scelerisque nisi vestibulum
                eu nibh.
              </p>
              <div className="font-almarai md:text-[1.125rem]">Learn more</div>
            </div>
          </div>
        </div>
        <div className="py-10 lg:px-[7vw]">
          <div className="px-[5vw]">
            <div className="font-almarai">
              <p className="text-emerald-500 text-[1.125rem] mb-4 font-bold">
                /TESTIMONIALS
              </p>
              <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem]">
                What our clients say about us and our work
              </h2>
            </div>
            <div className="py-20">
              <div className="shadow-card border border-gray-50 h-auto px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
                    Convallis senectus non dui vel tortor. Justo lectus integer
                    arcu elit.
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
      </section>
      {/* //Carrusel */}
      <section className="h-auto bg-gray-100">
        <div className="px-[5vw]">
          <div className="flex justify-between items-center border">
            <div>Carrusel</div>
            <div className="space-x-2">
              <button onClick={scrollLeft} className="bg-gray-200 p-3">
                P
              </button>
              <button onClick={scrollRight} className="bg-gray-200 p-3">
                N
              </button>
            </div>
          </div>
        </div>
        <div className="px-[5vw]">
          <div
            id="content"
            className="border py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[10vw] lg:px-3"
          >
            <div>
              <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
                    Convallis senectus non dui vel tortor. Justo lectus integer
                    arcu elit.
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
              <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
                    Convallis senectus non dui vel tortor. Justo lectus integer
                    arcu elit.
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
              <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
                    Convallis senectus non dui vel tortor. Justo lectus integer
                    arcu elit.
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
      </section>
    </>
  );
};

export default Services;

//--------- Carrousel

{
  /* <section className="h-auto bg-gray-100">
<div className="px-[5vw]">
  <div className="flex justify-between items-center border">
    <div>Carrusel</div>
    <div className="space-x-2">
      <button onClick={scrollLeft} className="bg-gray-200 p-3">
        P
      </button>
      <button onClick={scrollRight} className="bg-gray-200 p-3">
        N
      </button>
    </div>
  </div>
</div>
<div className="px-[5vw]">
  <div
    id="content"
    className="border py-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[10vw] lg:px-3"
  >
    <div>
      <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
            Convallis senectus non dui vel tortor. Justo lectus integer
            arcu elit.
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
      <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
            Convallis senectus non dui vel tortor. Justo lectus integer
            arcu elit.
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
      <div className="shadow-card border border-gray-50 h-auto w-[90vw] px-6 py-10 md:flex md:items-center md:space-x-10 lg:w-[728px] lg:px-11">
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
            Convallis senectus non dui vel tortor. Justo lectus integer
            arcu elit.
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
</section> */
}
