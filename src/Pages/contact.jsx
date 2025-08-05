import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "../Components/header";
import Footer from "../Components/footer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name: "", message: "", email: "" });
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#000] text-white/30">
      <div
        className="absolute w-[70vw] h-full top-[-225px] left-[15vw] pointer-events-none bg-[#fdf0d5]"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16 relative">
        <motion.h1
          className="text-4xl md:text-5xl text-center mb-8 font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact <span className="text-[#fdf0d5]">Us</span>
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-center text-lg text-gray-300 mb-8">
            Have a question, or need assistance? We're here to help. Fill out
            the form and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                className="mt-1 px-3 block w-full py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="mt-1 px-3 block w-full py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 px-3 block w-full py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#c7f9cc] text-[#000] py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
