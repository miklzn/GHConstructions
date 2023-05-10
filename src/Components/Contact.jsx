import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import instagram from "../utils/icons/Instagram.svg";
import facebook from "../utils/icons/Facebook.svg";
import whatsapp from "../utils/icons/Whatsapp.svg";
import mail from "../utils/icons/Mail.svg";
import mailBack from "../utils/icons/MailBack.svg";
import phone from "../utils/icons/Phone.svg";
import phoneBack from "../utils/icons/PhoneBack.svg";
import pin from "../utils/icons/Pin.svg";
import pinBack from "../utils/icons/PinBack.svg";
import Success from "../commons/SuccessAlert";
import Error from "../commons/ErrorAlert";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2t26cn",
        "template_x1gxahj",
        form.current,
        "qKEzTHTQUMZE2ZtoJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setShowPopup(1);
        },
        (error) => {
          console.log(error.text);
          setShowPopup(2);
        }
      );
  };

  const handleClosePopup = () => {
    return setShowPopup(0);
  };

  return (
    <>
      <section className="h-auto bg-emerald-900 lg:px-[7vw]">
        <div className="md:flex md:items-center md:py-10">
          <div className="px-[5vw] py-[10vh] md:w-1/2">
            <p className="text-emerald-500 text-[1.125rem] font-almarai mb-4">
              /CONTACT
            </p>
            <h1 className="text-white text-[2.125rem] font-almarai font-semibold pr-10 leading-10 sm:text-[2.5rem]">
              Get in touch today!
            </h1>
            <p className="text-white font-catamaran mt-3 min-[480px]:pr-[18vw] md:pr-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias quas impedit eius. Molestias quas impedit eius at!
            </p>
            <div>
              <div className="w-full flex items-center space-x-2 py-5 md:py-2 lg:py-5">
                <img
                  className="sm:h-9 sm:w-9 md:w-6 lg:w-8"
                  src={facebook}
                  alt=""
                />
                <img
                  className="sm:h-9 sm:w-9 md:w-6 lg:w-8"
                  src={instagram}
                  alt=""
                />
                <img
                  className="sm:h-9 sm:w-9 md:w-6 lg:w-8"
                  src={whatsapp}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="px-[5vw] font-catamaran md:w-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="min-[480px]:grid min-[480px]:grid-cols-2 min-[480px]:gap-x-4">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="fullname"
                    id="name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="name"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="min-[480px]:grid min-[480px]:grid-cols-2 min-[480px]:gap-x-4">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_repeat_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="service"
                    id="service"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Service
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="message"
                  class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full justify-center bg-emerald-500 py-2.5 text-gray-800 text-[0.9375rem] font-almarai font-semibold my-5 sm:py-4 sm:text-[3.2vw] md:py-[0.75rem] md:text-[1rem] lg:text-[1.125rem] lg:py-[1rem]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="h-auto md:pb-[10vh] lg:px-[7vw]">
        <div className="px-[5vw] py-[10vh] font-catamaran">
          <h2 className="text-center text-[2rem] font-bold min-[480px]:text-[2.25rem] font-almarai">
            Prefer to reach out directly?
          </h2>
          <p className="text-gray-500 my-4 text-center md:text-[1.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ac
            cursus laoreet imperdiet. Volutpat tellus sit nunc netus magna
            adipiscing leo ligula praesent vitae sed volutpat.
          </p>
        </div>
        <div className="px-[5vw] py-[5vh] font-almarai">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="h-auto shadow-card border border-gray-50 px-5 pt-8 pb-[24.4vh] overflow-hidden min-[480px]:py-12 lg:pb-[24.4vh]">
              <div className="w-full relative">
                <img
                  className="h-14 border p-2 bg-emerald-900 "
                  src={mail}
                  alt=""
                />
                <h2 className="pb-3 pt-2 text-[1.375rem] font-semibold">
                  Email us
                </h2>
                <p className="text-gray-500 text-[1.25rem] font-semibold relative z-10">
                  ghconst@mail.com
                </p>

                <img
                  className="h-40 absolute -right-20 min-[480px]:top-10 lg:top-36"
                  src={mailBack}
                  alt=""
                />
              </div>
            </div>
            <div className="h-auto shadow-card border border-gray-50 px-5 pt-8 pb-[24.4vh] overflow-hidden min-[480px]:py-12 lg:pb-[24.4vh]">
              <div className="w-full relative">
                <img
                  className="h-14 border p-2 bg-emerald-900 "
                  src={phone}
                  alt=""
                />
                <h2 className="pb-3 pt-2 text-[1.375rem] font-semibold">
                  Call us
                </h2>
                <p className="text-gray-500 text-[1.25rem] font-semibold relative z-10">
                  (323) 238-0682
                </p>

                <img
                  className="h-40 absolute -right-20 min-[480px]:top-5 lg:top-36"
                  src={phoneBack}
                  alt=""
                />
              </div>
            </div>
            <div className="h-auto shadow-card border border-gray-50 bg-emerald-900 px-5 pt-8 pb-[24.4vh] overflow-hidden min-[480px]:py-12 lg:pb-[24.4vh]">
              <div className="w-full relative">
                <img
                  className="h-14 border-4 border-white p-2 bg-emerald-900 "
                  src={pin}
                  alt=""
                />
                <h2 className="pb-3 pt-2 text-[1.375rem] font-semibold text-white">
                  Location
                </h2>
                <p className="text-white text-[1.25rem] font-semibold relative z-10">
                  Miami, FL
                </p>

                <img
                  className="h-40 absolute -right-20 min-[480px]:top-5 lg:top-36"
                  src={pinBack}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showPopup === 1 ? (
        <Success handleClosePopup={handleClosePopup} />
      ) : showPopup === 2 ? (
        <Error handleClosePopup={handleClosePopup} />
      ) : null}
    </>
  );
};

export default Contact;
