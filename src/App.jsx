import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/index";
import About from "./Pages/about";
import Features from "./Pages/features";
import FaqPage from "./Pages/faq";
import Contact from "./Pages/contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
