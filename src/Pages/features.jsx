import Navbar from "../Components/header";
import Footer from "../Components/footer";
import FeaturesCard from "../Components/features";
import { useEffect } from "react";

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="min-h-screen">
      <div className="absolute w-[70vw] h-full left-[15vw] top-[-225px] bg-[#fdf0d5] pointer-events-none"  style={{
        filter: 'blur(120px)',
        opacity: 0.5
      }}/>
      <Navbar />
      <FeaturesCard />
      
      <Footer />
    </div>
  );
}

export default Features;
