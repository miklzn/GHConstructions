import drop from "../utils/icons/Drop.svg";

const Header = () => {
  return (
    <header className="bg-emerald-900 h-24 flex flex-">
      <div className=" w-full px-28 flex flex-wrap items-center text-white justify-between">
        <div className="border-2 border-black text-3xl">LOGO</div>
        <div className="border-2 border-black">
          <ul className="flex flex-wrap text-lg">
            <li className="border-2 border-black px-5">Home</li>
            <li className="border-2 border-black px-5">Company</li>
            <li className="border-2 border-black px-5">Services</li>
            <li className="border-2 border-black px-5">Contact</li>
          </ul>
        </div>
        <div>
          <img src={drop} alt="Dropdown" />
        </div>
      </div>
    </header>
  );
};

export default Header;
