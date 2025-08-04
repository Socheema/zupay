import featureimg from "../assets/feature.png";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import { FaQuoteRight } from "react-icons/fa6";

const TestimonialData = () => [
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Robinson Honour",
  },
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "Tolu",
  },
  {
    content:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    author: "PRisca",
  },
];

function Testimonial() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div className="bg-gradient-to-r from-[#07000b] via-[#010203] via-[#fdf0d5] to-[#c7f9cc] relative overflow-hidden  pb-[5rem]">
      <img src={featureimg} alt="" className="w-full h-full absolute" />
      <div className="px-4 md:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-6xl py-[2rem] mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl text-center bold md:text;3xl mb-2 text-[#000]/70 tracking-tight"
          >
            Testimonials
          </motion.h1>
          <motion.h6
            variants={itemVariants}
            className="text-sm text-center md:text-sm text-gray-400 tracking-tight"
          >
            Testimonials
          </motion.h6>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-width-7xl mx-auto">
          {TestimonialData().map((data, index)=>{
            return (
              <div key={index} className="bg-[#4d7553] backdrop-blur-sm text-center rounded-[24px] p-8">
                <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-[#fdf0d5] flex justify-center items-center flex-col ">
                  <FaQuoteRight className="text-[#000]/70" />
                  
                </div>
                <p className="text-gray-300 my-8">
                  {data.content}
                </p>
                <div className="relative mb-2 my-1 flex items-center justify-center">
                  <p className="text-white">~{data.author}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonial;
