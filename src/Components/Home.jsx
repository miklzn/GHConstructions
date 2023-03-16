import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import instagram from "../utils/icons/Instagram.svg";

const Home = () => {
  return (
    <>
      <section className="h-full w-full">
        <div
          className="h-[157vh] w-screen bg-cover bg-center bg-fixed sm:h-[203vh]"
          style={{
            backgroundImage: `url(https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-vista-aerea_96f21db1_2000x1333.jpg)`,
          }}
        >
          <div className="flex flex-col justify-center font-almarai text-white w-full h-auto text-[2.025rem] bg-emerald-900 px-5 py-10 text-center absolute sm:text-[4.057rem] sm:px-6">
            <div className="w-full">
              <h1 className="">
                <span className="text-teal-700">ARCITECT </span>
                AWARD-WINNING
              </h1>
            </div>
            <div className="">
              <h1 className="">DESIGNERS OF HOMES AND</h1>
            </div>
            <div className="">
              <h1 className="">
                GARDENS OF <span className="text-teal-700">DISTINCTION.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full">
        <div className="flex flex-col px-4 py-12 w-full sm:py-16">
          <div className=" font-catamaran text-2xl font-bold sm:text-5xl">
            <div>
              <h1>Modernism &</h1>
            </div>
            <div>
              <h1>Modernity</h1>
            </div>
          </div>
          <div className="mt-5 font-catamaran text-xs sm:text-2xl sm:mt-12">
            Arsitect is a hybrid creative agency and architectural studio that
            infuses innovative branding and strategic marketing concepts early
            on in the architectural process. Our team of diverse and experienced
            problem solvers utilize our unique approach, which allows us to
            pinpoint value-add opportunities and ensure that the design of the
            building or space is aligned to target demographic desires.
          </div>
        </div>
        <div className="flex justify-center px-4">
          <img
            className="object-cover pb-8 h-full w-full max-h-[540px] max-w-7xl"
            src="https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-exterior_93687f5c_2000x1500.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="h-auto bg-gray-100">
        <div className="flex flex-row justify-between items-center px-4 py-10 font-catamaran text-2xl font-bold">
          <h1>Selected Project</h1>
          <div className="flex">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col px-4 space-y-8 pb-5">
          <div className="font-catamaran text-xs">
            <img
              className="h-48 w-full object-cover"
              src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
              alt=""
            />
            <p className="my-2">Title project 1</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem, ipsum.</p>
            <p>2023</p>
          </div>
          <div className="font-catamaran text-xs">
            <img
              className="h-48 w-full object-cover"
              src="https://www.glogevi.com/wp-content/uploads/2022/07/Tienda-de-muebles-de-cocina-a-medida-en-Toledo.-Glogevi-Cocinas.jpg"
              alt=""
            />
            <p className="my-2">Title project 2</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem, ipsum.</p>
            <p>2022</p>
          </div>
          <hr className="border-[0.094rem] border-gray-300 my-8" />
        </div>
      </section>
      <section className="h-auto">
        <div className="px-4 mt-5 mb-10 font-catamaran text-xs">
          <h1 className="text-2xl font-bold sm:text-5xl py-6">Our People</h1>
          <p>
            Our heart and soul are more than our expertise and resources. Our
            team – our community – is what makes Shildan extraordinary.
            <br />
            <br />
            The Arcitect team brings together a diverse group of people
            passionate about architecture, design, materiality, and artistry.
            Unified by a shared vision, we are a collective of innovators,
            designers, and engineers, working together to help build a better
            future.
            <br />
            <br />
            Passion is the driving force in all we do. We are passionate about
            good design, beautiful architecture, sustainability, changing
            neighborhoods and building a better tomorrow
          </p>
          <div className="mt-10 flex h-auto">
            <div className="w-1/2 flex">
              <img
                className="object-cover my-10 pr-5"
                src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_22_construction-company-names.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 ">
              <div className="flex flex-wrap">
                <img
                  className="pr-3 pb-7 object-cover "
                  src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_construction-company-names.jpg"
                  alt=""
                />
                <img
                  className="h-40 w-full object-cover"
                  src="http://www.obcipol.com/wp-content/uploads/2015/07/EMPRESA_DE_CONSTRUCCION_DE_EDIFICIOS_COLOMBIA-941x599.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="px-4 pt-10 mb-8 font-catamaran text-xs">
          <h1 className="text-2xl font-bold sm:text-5xl py-6">Our Services</h1>
          <p>
            The Company Arcitect has engaged fundamentally new approach to the
            designing. There are personal and reliability approach to Wide range
            of Engineering and Construction Company Services.
            <br />
            <br />
            Each design decision is guided by a deep appreciation for and
            understanding of the integral architectural, artistic, cultural,
            civic, environmental, and economic forces that shape a project. This
            rigorous, research-based approach has helped to establish MA as a
            leader in the revitalization of post-industrial neighborhoods and
            historic districts with projects that are imbued with a distinct
            sense of place and purpose.
          </p>
          <p className="mt-5 font-semibold text-sm">You Can See More Here:</p>
          <div className="flex items-center text-sm pt-4 font-semibold text-emerald-500">
            <img className="" src={instagram} alt="" /> <p>Instagram</p>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <header class="relative flex items-center justify-center h-80 overflow-hidden">
          <div class="relative w-full h-full z-30 py-14 px-8 text-center text-2xl text-white bg-black bg-opacity-60">
            <h1 className="text-4xl font-catamaran font-bold">
              Let’s Discuss Your Project
            </h1>
            <p className="text-sm mt-7 font-catamaran">
              We would love to share ideas, suggest options and answer your
              question.
              <br />
              We’re ready to beacome your guide in the fascinating landscape of
              architecture and design.
            </p>
          </div>
          <video
            autoplay="autoplay"
            muted
            loop
            playsinline
            className="absolute object-cover z-10 h-80"
          >
            <source
              src="https://st2.depositphotos.com/1007980/49070/v/600/depositphotos_490704012-stock-video-motion-video-waverly-surfside-beach.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
        <div className="bg-emerald-900 h-screen">
          <div
            className="text-2xl text-center
         font-catamaran text-white font-bold py-10 px-12 "
          >
            We would love to hear from you so don't hesitate to say hi!
          </div>
          <div className=" w-full px-12">
            <button className="w-full justify-center bg-emerald-500 py-2.5 text-black text-sm font-catamaran font-semibold">
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
