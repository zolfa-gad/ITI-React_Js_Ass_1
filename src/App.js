import logo from "./logo.svg";
import "./App.css";
import Button from "./reusable-components/button-component/button-component";
import HeroSection from "./components/hero-section/hero-section";
import AboutMeSection from "./components/about-me-section/about-me-section";
import SkillsSection from "./components/skills-section/skill-section";
import PortofolioSection from "./components/portfolio-section/portfolio-section";
import Footer from "./components/footer-section/footer-section";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <PortofolioSection></PortofolioSection>

      <Footer></Footer>

    </div>
  );
}

export default App;
