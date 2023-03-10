const Home = () => {
  return (
    <>
      <section className="h-full w-full">
        <div
          className="h-screen w-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-vista-aerea_96f21db1_2000x1333.jpg)`,
          }}
        >
          <div className="flex flex-col justify-center font-bold text-white w-full h-auto text-3xl bg-emerald-900 px-5 py-16 text-center absolute">
            <div className="w-full">
              <h1 className="">
                <span className="text-teal-700">LOREM</span> IPSUM DOLOR AWARD
              </h1>
            </div>
            <div className="">
              <h1 className="">AMET AMET CONSECTETUR</h1>
            </div>
            <div className="">
              <h1 className="">
                ADIPISICING ELIT <span className="text-teal-700">MINUS</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full">
        <div className="flex flex-col px-4 py-12 w-full">
          <div className=" font-catamaran text-2xl font-bold">
            <div>
              <h1>Modernism &</h1>
            </div>
            <div>
              <h1>Modernity</h1>
            </div>
          </div>
          <div className="mt-5 font-catamaran text-xs">
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
            className="object-cover h-full w-full max-h-[540px] max-w-7xl"
            src="https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-exterior_93687f5c_2000x1500.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Home;

// {
//    <section className="h-full w-full">
//         <div
//           className="h-screen w-screen bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage: `url(https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-vista-aerea_96f21db1_2000x1333.jpg)`,
//           }}
//         >
//           <header className="bg-emerald-900 h-auto flex flex-col">
//             <div className=" w-full py-3 px-28 flex flex-wrap items-center text-white justify-between">
//               <div className="text-3xl">LOGO</div>
//               <div className="">
//                 <ul className="flex flex-wrap font-catamaran text-lg text-gray-400">
//                   <li className="px-5">Home</li>
//                   <li className="px-5">Company</li>
//                   <li className="px-5">Services</li>
//                   <li className="px-5">Contact</li>
//                 </ul>
//               </div>
//               <div>
//                 <img src={drop} alt="Dropdown" />
//               </div>
//             </div>
//             <div className="flex flex-col font-bold text-white px-28 w-full pt-14 pb-20 text-7xl">
//               <div className="">
//                 <h1 className=" mt-4 text-start">
//                   <span className="text-teal-700">LOREM</span> IPSUM DOLOR
//                 </h1>
//               </div>
//               <div className="">
//                 <h1 className="mt-4 text-end">SIT AMET CONSECTETUR</h1>
//               </div>
//               <div className="">
//                 <h1 className="mt-4 text-center">
//                   ADIPISICING ELIT <span className="text-teal-700">MINUS</span>
//                 </h1>
//               </div>
//             </div>
//           </header>
//         </div>
//       </section>
// }

/* <section className="h-full w-full">
<div className=" py-20 items-center flex flex-column w-full max-w-7xl mx-auto">
  <div className="w-1/2 font-catamaran text-5xl font-bold ">
    <div>
      <h1>Modernism &</h1>
    </div>
    <div>
      <h1>Modernity</h1>
    </div>
  </div>
  <div className="w-1/2 font-catamaran text-lg">
    Arsitect is a hybrid creative agency and architectural studio that
    infuses innovative branding and strategic marketing concepts early
    on in the architectural process. Our team of diverse and experienced
    problem solvers utilize our unique approach, which allows us to
    pinpoint value-add opportunities and ensure that the design of the
    building or space is aligned to target demographic desires.
  </div>
</div>
<div className="flex justify-center">
  <img
    className="object-cover h-full w-full max-h-[540px] max-w-7xl"
    src="https://www.arquitecturaydiseno.es/medio/2021/05/28/casa-moderna-de-madera-en-mitad-de-una-roca-en-ontario-exterior_93687f5c_2000x1500.jpg"
    alt=""
  />
</div>
</section> */
