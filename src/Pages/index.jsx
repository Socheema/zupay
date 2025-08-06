import Navbar from "../Components/header.jsx";
import BannerComponent from "../Components/banner.jsx";
import FeaturesComponent from "../Components/features.jsx";
import CardInfo from "../Components/cardInfo.jsx";
import Testimonial from "../Components/testimonial.jsx";
import Footer from "../Components/footer.jsx";
import FaQuestion from "../Components/faq.jsx";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.scrollTo(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#fdf0d5] pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <BannerComponent />
      <FeaturesComponent />
      <CardInfo />
      <Testimonial />
      <FaQuestion />
      <Footer />
    </div>
  );
}

export default App;



