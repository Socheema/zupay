import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import cardinfo from "../assets/cardinfo.png";
import { Link } from "react-router-dom";

function CardInfo() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-[2.5rem] px-[2rem] py-[2rem] md:px-0 md:py-[5rem] bg-gradient-to-b from-[#07000b] to-[#010203]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl bold text-center md:text-center mb-5 text-white tracking-tight">
          Our <span className="text-[#c7f9cc]">Services</span>
        </h1>
      </div>
      <section className="container mx-auto bg-[#ccc]/5 rounded-[1rem] p-[2rem] md:p-[2rem] md:py-[2rem]">
        <div className="grid lg:grid-cols-2 md:px-[2.5rem] gap-12 items-center ">
          <div className="max-w-xl">
            <h1 className="text-3xl text-[#c7f9cc] font-bold mb-8">
              Virtual <span className="text-white">Dollar</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Use our virtual dollar card for all of your online transactions.
              Ideal for shopping, subscriptions and international payments.
            </p>
            <button className="bg-[#fdf0d5] hover:bg[#c7f9cc] text-black px-8 py-4 rounded-full text-sm flex items-center transition-colors">
              <Link to={"/download"} className="flex">
                Download Now <FaCircleArrowRight className="ml-2 w-5" />
              </Link>
            </button>
          </div>
          <motion.div className="flex justify-center order-2 lg:order-none">
            <img src={cardinfo} alt="" className="md:h-[20rem]" />
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto bg-white/5 rounded-[1rem] p-[2rem] md:p-[2rem] md:py-[2rem]">
        <div className="grid lg:grid-cols-2 md:px-[2.5rem] gap-12 md:gap-16 items-center">
          <motion.div className="flex justify-center order-last lg:order-none">
            <img src={cardinfo} alt="" className="md:h-[20rem]" />
          </motion.div>
          <div className="max-w-xl">
            <h1 className="text-3xl text-white font-bold mb-8">
              Bill <span className="text-[#c7f9cc]">Payments</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Use our App to conveniently pay for utilities, subscriptions, and
              more.
            </p>
            <button className=" bg-[#fdf0d5] hover:bg-[#c7f9cc] text-black px-8 py-4 rounded-full text-small flex items-center transition-colors">
              <Link to={"/download"} className="flex justify-between">
                Get Started <FaCircleArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardInfo;
