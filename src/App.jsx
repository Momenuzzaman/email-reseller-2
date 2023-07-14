import AboutUs from "./Components/AboutUs/AboutUs";
import Faq from "./Components/FAQ/Faq";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import PricingCard from "./Components/PricingCard/PricingCard";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Faq />
      <PricingCard />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
