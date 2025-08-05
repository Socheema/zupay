import { useEffect } from "react";
import FaQuestion from "../Components/faq";
import Footer from "../Components/footer";
import Navbar from "../Components/header";

function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="absolute w-[70vw] h-full top-[-225px] left-[15vw] pointer-events-none bg-[#fdf0d5]"
        style={{
          filter: "blur(120px",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <FaQuestion />

      <Footer />
    </div>
  );
}

export default FaqPage;
