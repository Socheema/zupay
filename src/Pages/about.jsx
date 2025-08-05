import Navbar from "../Components/header";
import Footer from "../Components/footer";
import FaQuestion from "../Components/faq";
import { motion } from "motion/react";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#c7f9cc] text-[#0a0202]">
      <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-225px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16 relative ">
        <motion.h1
          className="text-4xl md:text:5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About <span className="text-[#fdf0d5]">Zupay</span>
        </motion.h1>
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold  mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            At Zupay, our mission is to revolutionize the payment landscape in
            Africa. We empower individuals and businesses with fast, easy, and
            flawless payment solutions. Our vision is to become the most trusted
            and beloved payment platform across Africa, known for its
            reliability and user-friendly experience.{" "}
          </p>
        </motion.section>
      </main>
        <FaQuestion />
      <Footer />
    </div>
  );
}

export default About;
