import { useState } from "react";
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";


function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#050510] text-gray-300 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Link to={"/"}>
                <div className="font-extrabold text-[2rem] ">
                  <span className="text-[#c7f9cc]">ZUP</span>
                  <span className="text-[#fdf0d5]">AY</span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              At zupay, our mission is to revolutionize the payment landscape in
              Africa. We empower individuals and businesses with fast, easy, and
              flawless payment solutions. Our vision is to become the most
              trusted and beloved payment platform across Africa, known for its
              reliability and user-friendly experience.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:chimafrancis94@gmail.com"
                className="flex items-center space-x-2 text-sm hover:text-[#c7f9cc]"
              >
                <BiMailSend className="w-4 h-4" />
                <span>support@zupay.com</span>
              </a>
              <a
                href="tel:+2349153079292"
                className="flex items-center space-x-2 text-sm hover:text-[#c7f9cc]"
              >
                <BiPhone className="w-4 h-4" />
                <span>+234 9153079292</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                {" "}
                <Link to={"/about"} className="text-sm hover-text-[#c7f9cc]">
                  About
                </Link>
              </li>
              <li>
                {""}
                <Link to={"/features"} className="text-sm hover-text-[#c7f9cc]">
                  Features
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/faq"} className="text-sm hover-text-[#c7f9cc]">
                  FAQs
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/contact"} className="text-sm hover-text-[#c7f9cc]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="">
              <li>
                <Link to={"/terms"} className="text-sm hover:text-[#c7f7cc]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/terms"} className="text-sm hover:text-[#c7f7cc]">
                  Terms & Condition{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">
              Newsletter subscription
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Sign up for updates on new features and offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#fdf0d5]  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-[#c7f9cc] text-[#333] hover:bg-[#fdf0d5] rounded-md text-sm  transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-gray-800 flex flex-col md:flex-row justify-between items-center sapce-y-4 md:space-y-0">
          <p className=" order-2 lg:order-none text-sm test-gray-400 flex flex-col md:flex-row justify-start items-start">
            Copyright © 2025 zupay. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover-text-[#c7f9cc]">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover-text-[#c7f9cc]">
              <BsTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover-text-[#c7f9cc]">
              <LiaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
