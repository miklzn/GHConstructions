import success from "../utils/icons/Success.svg";

const SuccessAlert = ({ handleClosePopup }) => {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
      <div className="w-full max-w-sm h-auto p-6 relative mx-2 my-auto shadow-lg bg-white">
        <div className="">
          <div className="text-center p-5 justify-center min-[480px]:flex min-[480px]:items-center min-[480px]:space-x-4 min-[480px]:my-2">
            <img
              className="h-20 mx-auto mb-4 min-[480px]:mb-0"
              src={success}
              alt=""
            />
            <h2 className="font-semibold font-catamaran ">
              Your request has been submitted. Thank you for your interest in
              our services!
            </h2>
          </div>

          <div className="text-center md:block">
            <button
              className="flex items-center justify-center w-full px-6 py-3 text-base font-almarai text-center text-black transition duration-500 ease-in-out transform bg-emerald-500 hover:bg-emerald-600 focus:ring-0"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
