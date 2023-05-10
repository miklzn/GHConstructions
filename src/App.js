import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import Project from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ResidentialConstruction from "./components/ResidentialConstruction";
import CommercialConstruction from "./components/CommercialConstruction";
import CleaningService from "./components/CleaningService";
import PaintingService from "./components/PaintingService";
import SpaceRemodeling from "./components/SpaceRemodeling";
import HomeRepair from "./components/HomeRepair";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/residential-construction"
          element={<ResidentialConstruction />}
        />
        <Route
          path="/commercial-construction"
          element={<CommercialConstruction />}
        />
        <Route path="/cleaning-service" element={<CleaningService />} />
        <Route path="/painting-service" element={<PaintingService />} />
        <Route path="/space-remodeling" element={<SpaceRemodeling />} />
        <Route path="/home-repair" element={<HomeRepair />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
