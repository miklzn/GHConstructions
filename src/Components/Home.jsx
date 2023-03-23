import leftArrow from "../utils/icons/ArrowLeft.svg";
import rightArrow from "../utils/icons/ArrowRight.svg";
import instagram from "../utils/icons/Instagram.svg";
import facebook from "../utils/icons/Facebook.svg";
import whatsapp from "../utils/icons/Whatsapp.svg";
import igGreen from "../utils/icons/InstagramGreen.svg";

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
          <div className="flex flex-col justify-center font-almarai text-white w-full h-auto text-[10vw] bg-emerald-900 px-[5vw] py-10 text-center absolute sm:px-[5vw] md:text-[5.3vw] md:px-[4.8vw] lg:py-[4.8vw] lg:px-[5vw] lg:text-[5vw] lg:leading-tight xl:text-[4vw] xl:px-[11.5vw] xl:py-[4.5vw]">
            <div className="w-full">
              <h1 className="md:text-start">
                <span className="text-teal-700">ARCITECT </span>
                AWARD-WINNING
              </h1>
            </div>
            <div className="md:text-end">
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
      <section className="h-full w-full md:px-6 lg:px-[10.8vw]">
        <div className="flex flex-col px-4 py-12 w-full sm:py-16 md:flex md:flex-row md:py-[7.5vw] lg:py-16">
          <div className=" font-catamaran text-[7vw] font-bold sm:text-[6.5vw] md:w-2/5 md:my-auto md:text-[4vw] lg:text-[2.7vw]">
            <div>
              <h1>Modernism &</h1>
            </div>
            <div>
              <h1>Modernity</h1>
            </div>
          </div>
          <div className="mt-5 font-catamaran text-[3.5vw] sm:text-[3.5vw] sm:mt-12 md:mt-0 md:w-3/5 md:my-auto md:text-[1.8vw] lg:text-[1.2vw]">
            Arsitect is a hybrid creative agency and architectural studio that
            infuses innovative branding and strategic marketing concepts early
            on in the architectural process. Our team of diverse and experienced
            problem solvers utilize our unique approach, which allows us to
            pinpoint value-add opportunities and ensure that the design of the
            building or space is aligned to target demographic desires.
          </div>
        </div>
        <div className="flex justify-center px-4 md:mb-16">
          <img
            className="object-cover pb-8 h-full w-full max-h-[540px] max-w-7xl md:h-[37.5vw] md:pb-0 lg:h-[30vw]"
            src="https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-exterior_93687f5c_2000x1500.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="h-auto w-full bg-gray-100 md:px-6 lg:px-[10.8vw]">
        <div className="pb-3 md:pb-1">
          <div className="flex flex-row justify-between items-center px-4 py-10 font-catamaran text-[7vw] font-bold sm:text-[6.5vw] sm:py-20 md:text-[4vw] md:py-14 lg:text-[2.7vw]">
            <h1>Selected Project</h1>
            <div className="flex">
              <img className="sm:h-14 md:h-9 lg:h-11" src={leftArrow} alt="" />
              <img className="sm:h-14 md:h-9 lg:h-11" src={rightArrow} alt="" />
            </div>
          </div>
          <div className="flex flex-col px-4 md:grid grid-cols-2 md:space-x-8 lg:space-x-0">
            <div className="font-catamaran text-[3.5vw] sm:text-[3.2vw] sm:mb-5 md:text-[1.6vw] lg:mb-10 lg:pr-4">
              <img
                className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                src="https://www.maperi.com/wp-content/uploads/2022/07/tendencia-lavabo-2023-maperi.jpg"
                alt=""
              />
              <div className="md:flex flex-row md:mt-4">
                <div className="md:w-1/3">
                  <p className="my-2 sm:my-6 md:my-0 lg:text-[1.3vw]">
                    Title project 1
                  </p>
                </div>
                <div className="md:w-2/3 lg:text-[1.3vw]">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem, ipsum.</p>
                  <p>2023</p>
                </div>
              </div>
            </div>
            <div
              className="font-catamaran text-[3.5vw]
            mt-8 sm:text-[3.2vw] sm:mb-5 md:text-[1.6vw] md:mt-0 lg:pl-4"
            >
              <img
                className="h-[60vw] w-full object-cover sm:h-[25.313rem] md:h-[29vw] lg:h-[25vw]"
                src="https://www.glogevi.com/wp-content/uploads/2022/07/Tienda-de-muebles-de-cocina-a-medida-en-Toledo.-Glogevi-Cocinas.jpg"
                alt=""
              />
              <div className="md:flex flex-row md:mt-4">
                <div className="md:w-1/3">
                  <p className="my-2 sm:my-6 md:my-0 lg:text-[1.3vw]">
                    Title project 2
                  </p>
                </div>
                <div className="md:w-2/3 lg:text-[1.3vw]">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem, ipsum.</p>
                  <p>2022</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[0.094rem] border-gray-300 my-6 mx-4 sm:my-10" />
        </div>
      </section>
      <section className="h-auto w-full md:px-6 lg:px-[10.8vw]">
        <div className="px-4 mt-5 mb-10 font-catamaran text-[3.5vw] sm:mt-10">
          <h1 className="text-[7vw] font-bold py-6 sm:text-[6.5vw] sm:py-10 md:text-[4vw] lg:text-[2.7vw]">
            Our People
          </h1>
          <div className="md:flex md:flex-row">
            <p className="sm:text-[3.5vw] md:text-[1.8vw] md:w-[45vw] md:pr-16 md:ml-0 lg:text-[1.2vw]">
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
              neighborhoods and building a better tomorrow.
            </p>
            <div className="mt-10 flex h-auto md:w-[45vw] md:mt-0">
              <div className="w-1/2">
                <img
                  className="object-cover w-full h-full py-5 pr-5 sm:pr-14 sm:py-10 md:pr-8"
                  src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_22_construction-company-names.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <div className="flex flex-col h-full">
                  <img
                    className="h-full w-full pr-4 pb-9 object-cover sm:pr-8 sm:pb-14 "
                    src="https://www.cgmiami.org/wp-content/uploads/2022/07/1658379943_construction-company-names.jpg"
                    alt=""
                  />
                  <img
                    className="h-full w-full object-cover"
                    src="http://www.obcipol.com/wp-content/uploads/2015/07/EMPRESA_DE_CONSTRUCCION_DE_EDIFICIOS_COLOMBIA-941x599.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full md:bg-gray-100 md:px-6 md:pb-8 lg:py-16 lg:px-[10.8vw]">
        <div className="px-4 pt-10 mb-8 font-catamaran text-[3.5vw] md:mb-0 md:pb-10">
          <div className="md:flex md:flex-row md:h-full md:space-x-10">
            <div className=" hidden md:block md:w-1/2 md:h-full">
              <img
                className="md:h-[50vw] md:w-[50vw] md:object-cover lg:h-[40vw] lg:w-[34vw]"
                src="https://static2.mansionglobal.com/production/media/article-images/d92c7415002ec3cf75b08329fb479444/large_DSC8488-HIGH1.jpg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 md:pl-3">
              <h1 className="text-[7vw] font-bold sm:text-[6.5vw] py-6 sm:py-12 md:text-[4vw] md:pt-1 lg:text-[2.7vw]">
                Our Services
              </h1>
              <p className="sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.2vw]">
                The Company Arcitect has engaged fundamentally new approach to
                the designing. There are personal and reliability approach to
                Wide range of Engineering and Construction Company Services.
                <br />
                <br />
                Each design decision is guided by a deep appreciation for and
                understanding of the integral architectural, artistic, cultural,
                civic, environmental, and economic forces that shape a project.
              </p>
              <p className="mt-5 font-semibold text-[4.2vw] sm:text-2xl sm:mt-10 md:text-[2vw] md:mt-4 lg:mt-8 lg:text-[1.2vw]">
                You Can See More Here:
              </p>
              <div className="flex items-center text-[4vw] pt-4 font-semibold text-emerald-500 sm:text-[1.75rem] md:text-[1.8vw] lg:text-[1.1vw]">
                <img
                  className="sm:h-11 sm:my-7 md:h-6 md:my-2 lg:h-[2vw]"
                  src={igGreen}
                  alt=""
                />
                <p className="md:pt-1 lg:pt-0">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full">
        <header class="relative flex items-center justify-center h-auto overflow-hidden sm:h-[85vw] md:h-[37.5vw] lg:h-[22.5vw]">
          <div class="relative w-full h-full z-30 aligne-items text-center justify-center text-white bg-black bg-opacity-60 sm:py-32 md:py-[10vw] lg:py-[6.5vw]">
            <div className="py-[20vw] px-[6vw] sm:py-[1.5vh] sm:px-[15vw] md:py-[0vw] md:px-[8vw]">
              <h1
                className="text-[8.5vw] font-catamaran font-bold md:text-[4.6vw] lg:text-[2.5vw]
            "
              >
                Let’s Discuss Your Project
              </h1>
              <p className="text-[3.8vw] mt-7 font-catamaran sm:text-[3vw] md:text-[2.2vw] lg:text-[1.4vw]">
                We would love to share ideas, suggest options and answer your
                question.
                <br />
                We’re ready to beacome your guide in the fascinating landscape
                of architecture and design.
              </p>
            </div>
          </div>
          <video
            autoplay="autoplay"
            muted
            loop
            playsinline
            className="absolute object-cover z-10 h-full w-full"
          >
            <source
              src="https://st2.depositphotos.com/1007980/49070/v/600/depositphotos_490704012-stock-video-motion-video-waverly-surfside-beach.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
        <div className="bg-emerald-900 h-auto">
          <div className="md:flex md:flex-row md:pt-[5vw] md:px-10 lg:px-40 lg:items-center lg:pt-[5vw]">
            <div
              className="text-[7vw] text-center
         font-catamaran text-white font-bold py-10 px-[15vw] sm:text-4xl md:py-0 md:text-[3vw] md:w-2/3 md:px-8 md:text-start lg:w-auto lg:text-[2.5vw] lg:pr-[11vw]"
            >
              We would love to hear from you so don't hesitate to say hi!
            </div>
            <div className=" w-full px-14 sm:px-32 md:w-1/3 md:px-12 md:py-2.5 md:my-auto lg:w-auto">
              <button className="w-full justify-center bg-emerald-500 py-2.5 text-gray-700 text-[4.7vw] font-catamaran font-semibold sm:py-4 sm:text-[3.2vw] md:py-2 md:text-[2.2vw] lg:px-[4.5vw] lg:py-[1vw] lg:text-[1.6vw] xl:text-[1.3vw]">
                Contact
              </button>
            </div>
          </div>
          <hr className="border-1 border-gray-500 mx-10 my-16 md:my-[8vw] lg:my-[6.8vw] lg:mx-40" />
          <div className="w-full md:px-10">
            <h2 className="text-[6vw] font-bold font-catamaran text-center text-white sm:text-3xl md:text-[3vw] lg:text-[2vw]">
              G&H Constructions
            </h2>
            <p className="text-[4.5vw] font-catamaran text-center px-12 mt-4 text-white sm:text-[2.8vw] md:text-[2.3vw] lg:text-[1.2vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              perferendis ullam tempore modi
            </p>
            <div className="w-full flex items-center justify-center space-x-2 py-7">
              <img className="sm:h-9 sm:w-9" src={facebook} alt="" />
              <img className="sm:h-9 sm:w-9" src={instagram} alt="" />
              <img className="sm:h-9 sm:w-9" src={whatsapp} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
