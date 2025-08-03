import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-full px-[1.5rem] py-[1.5rem">
          <nav className="flex justify-between items-center px-[.5rem]">
            <div className="flex center gap-2">
              <Link to={"/"}>
                {/* <img src={Logo} alt="zupay" className="w-[5rem]" /> */}
                <div className="font-extrabold text-[2rem] ">
                  <span className="text-[#c7f9cc]">ZUP</span>
                  <span className="text-[#fdf0d5]">AY</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4  px-4 py-2">
              <Link
                to={"/"}
                className="text-white hover:text-white text-[1rem] transition-colors"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-white hover:text-white transition-colors text-[1rem]"
              >
                About
              </Link>
              <Link
                to={"/features"}
                className="text-white hover:text-white transition-colors text-[1rem]"
              >
                Features
              </Link>
              <Link
                to={"/faq"}
                className="text-white hover:text-white transition-colors text-[1rem]"
              >
                FAQs
              </Link>
              <Link
                to={"/contact"}
                className="text-white hover:text-white transition-colors text-[1rem]"
              >
                Contact
              </Link>
            </div>
            <Link
              to={"/download"}
              className="hidden md:block bg-[#c7f9cc] text-[1rem] text-[#000] hover:bg-[#fff] hover:text-[#1d351f] rounded-full px-4 py-2 font-normal transition-colors "
            >
              Download
            </Link>
            <button
              className="text-white cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <MdClose size={30}/> : <CiMenuBurger  size={30}/>}
            </button>
          </nav>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-full left-0 right-0 p-4 z-50 transition-all duration-300 ease-in-out flex flex-col gap-4 text-[1rem] ${
          isMenuOpen
            ? "opacity-100 max-h-[500px] bg-black/70 backdrop-blur-3xl"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link to={"/"} className="text-white/50 block px-2">
          Home
        </Link>
        <Link to={"/about"} className="text-white/50 block px-2">
          About
        </Link>
        <Link to={"/features"} className="text-white/50 block px-2">
          Features
        </Link>
        <Link to={"/faq"} className="text-white/50 block px-2">
          FAQs
        </Link>
        <Link to={"/contact"} className="text-white/50 block px-2">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
