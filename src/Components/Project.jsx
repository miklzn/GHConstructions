import pin from "../utils/icons/Pin.svg";
import mallet from "../utils/icons/Mallet.svg";
import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";

const Project = () => {
  const widthPx = window.innerWidth < 1024 ? 288 : 728 + 100;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  console.log(widthPx);

  return (
    <>
      <section>
        <div>
          <div className="relative h-[57vh] md:h-[100vh]">
            <img
              className="absolute h-full w-full object-cover"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_3.jpg"
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <h3 className="text-[2.125rem] font-semibold font-catamaran mb-12 px-4 min-[480px]:text-[2.5rem] md:text-[3.625rem] md:mb-40 lg:px-20 lg:text-[4.375rem]">
                  Garden remodeling in Miami, FL
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] xl:px-[7vw]">
          <div className="relative h-auto bg-white -mt-16 mb-16 border overflow-hidden px-6 py-10 md:-mt-40 lg:-mt-44 lg:py-16">
            <img
              className="absolute -right-10 bottom-0 h-32 -rotate-[25deg]"
              src={mallet}
              alt=""
            />
            <div className="grid grid-cols-1 gap-9 min-[480px]:grid-cols-2 sm:px-10 lg:grid-cols-4">
              <div className="flex font-catamaran">
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
                </div>
              </div>
              <div className="flex font-catamaran">
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
                </div>
              </div>
              <div className="flex font-catamaran">
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div>
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
                </div>
              </div>
              <div className="flex font-catamaran">
                <img
                  className="bg-emerald-500 p-2 w-12 mr-4 lg:w-[60px]"
                  src={pin}
                  alt=""
                />
                <div className="relative">
                  <div className="text-[1.125rem] font-bold lg:text-[1.375rem]">
                    Client
                  </div>
                  <div className="text-gray-500 lg:text-[1.125rem]">
                    John Carter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mx-[5vw] font-catamaran xl:px-[7vw]">
          <h1 className="text-[2rem] font-bold font-almarai mb-4 min-[480px]:text-[2.375rem] lg:text-[3rem]">
            About the project
          </h1>
          <p className="text-gray-500 mb-10 lg:text-[1.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat
            morbi accumsan odio luctus ut quam senectus hendrerit convallis dui
            aenean mauris ut felis in tellus leo lacus sit molestie et augue
            orci, tortor magna malesuada orci id lorem ultrices sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat
            morbi accumsan odio luctus ut quam senectus hendrerit convallis dui
            aenean mauris ut felis in tellus leo lacus sit molestie et augue
            orci, tortor magna malesuada orci id lorem ultrices sapien.
          </p>
        </div>
        <div className="h-auto mx-[5vw] xl:px-[7vw]">
          <div className="font-almarai">
            <h2 className="text-[2rem] font-semibold leading-10 min-[480px]:text-[2.25rem] md:py-4">
              Gallery
            </h2>
          </div>
        </div>
        <div className="mx-[5vw] py-10 md:py-20">
          <div
            id="content"
            className="flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide lg:px-3"
          >
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-[90vw] h-auto md:w-[30vw]">
                <img
                  className="object-cover md:relative"
                  src="https://latinexclusive.com/sites/default/files/api_file_downloads/5f2daa1a39646167c51a2308_1.jpg"
                  alt=""
                />
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

export default Project;

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
