import "./App.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import InfoBoxes from "./components/InfoBoxes";
import FeaturesSection from "./components/FeaturesSection";
import Facilities from "./components/Facilities";
import Departments from "./components/Departments";
import SpecialistsSection from "./components/SpecialistsSection";
import FooterGroup from "./components/FooterGroup";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <HeroSection />
      <div className="featured-info">
        <div className="first-featured-info container">
          <InfoBoxes />
        </div>
        <div className=" container">
          <FeaturesSection />
        </div>
      </div>
      <Facilities />
      <Departments />
      <SpecialistsSection />
      <FooterGroup />
    </>
  );
}

export default App;
