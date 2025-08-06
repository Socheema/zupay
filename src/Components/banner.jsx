import grid from "../assets/grid.png";
import star from "../assets/star.png";
import phone from "../assets/phone.png";
import { IoStar } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Banner() {
  return (
    <div className="relative min-h-[30rem] md:min-h-[55rem] w-full overflow-hidden ">
      <div className="absolute inset-0 h-auto top-0 justify-center w-full">
        <div className="relative max-w-4xl -bottom-10 h-auto flex flex-col justify-start item-start w-full">
          <img
            src={grid}
            alt="Grid background"
            className="w-full object-cover opacity-15"
          />
        </div>
      </div>
      <div className="relative flex flex-col pt-16 md:pt-24 px-4 sm:px lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="max-wxl mx-auto text-center mb-[1.5rem]">
            <div className="bg-[#c7f9cc] flex item-center justify-center text-[#000] gap-5 w-fit backdrop-blur-md rounded-full py-[1rem] px-[2rem] mx-auto">
              <IoStar />
              <motion.h5
                className=" whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Customized card for you
              </motion.h5>
              <IoStar />
            </div>
          </div>
          <motion.h1
            className="text-white/70 tracking-tighter mb-[1.5rem] text-3xl sm:text-3xl bold md:text-6xl "
            initial={{ opcity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience Financial
            <span className="text-[#c7f9cc]">
              <br />
              Freedom
            </span>{" "}
            with
            <span className="text-[#c7f9cc]"> ZUPAY</span>
          </motion.h1>
          <motion.p
            className="text-md text-white/70 mb-[1.5rem] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Welcome to Zupay. Every transaction is smooth, secure and speedy.
            Designed for enterpreneurs, freelancers, and general users.
          </motion.p>
          <div className="flex justify-center items-center gap-3">
            <motion.button
              className="flex gap-3 justify-center items-center bg-[#c7f9cc] rounded-[3rem] text-black font-medium text-sm shadow-lg hover:shadow-xl hover:bg-white hover:text-black hover:opacity-95"
              style={{
                backdropFilter: "blur(10px)",
                textShadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Link
                to={"/download"}
                className="flex gap-3 px-10 py-3 items-center"
              >
                Download Now <FaCircleArrowRight size={15} />
              </Link>
            </motion.button>

            <motion.button
              className="hidden md:flex gap-3 justify-center items-center bg-transparent border-white border-2 text-white rounded-[3rem] font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#fdf0d5] hover:text-black hover:opacity-95"
              style={{
                backdropFilter: "blur(10px)",
                textshadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              duration={{ duration: 1, ease: "ease", delay: 0.8 }}
            >
              <Link
                to={"/about"}
                className="flex gap-3 px-10 py-3 items-center"
              >
                Learn More <FaCircleArrowRight size={15} />
              </Link>
            </motion.button>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center ">
            <img src={phone} alt="phone" />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          const position = [
            "w-[2rem ] top-[1%] md:top-[10%] left-[10%]",
            "w-5 md:w-[2.5rem] top-[18%] md:top-[10%] right-[10%]",
            "hidden md:flex w-[1.2rem] top-[40%] left-[25%]",
            "w-[2rem] bottom-[10%] left-[10%]",
            "w-[2rem] bottom-[10%] right-[10%]",
            "hidden md:flex w-[2rem] top-[25%] right-[40%]",
          ];
          return (
            <motion.img
              src={star}
              key={item}
              className={`${position[index]} absolute color-[#c7f9cc]`}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 2 }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
