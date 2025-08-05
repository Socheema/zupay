import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../Components/header";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#07000b] via-[#010203] via-[#fdf0d5] to-[#c7f9cc] text-[#0a0202]">
      <div
        className="w-[70vw] top-[-225px] left-[15vw] absolute pointer-events-none h-full bg-[#fdf0d5]"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <main className="flex items-center justify-center mx-auto px-4 py-16 container flex-col relative z-0 min-h-[calc(100vh-200px)]">
        <motion.h1
          className="text-6xl md:text-8xl text-center mb-4 font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          4<span className="text-[#c7f9cc]">0</span>4
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-center mb-8 text-black"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Oops! Page not found.
        </motion.p>
        <motion.p
          className="text-lg mb-8 text-[#333] text-center max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <Link to="/" className="bg-[#c7f9cc] text-[#333] px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
            Go to Homepage
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
