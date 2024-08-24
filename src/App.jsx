import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroImg from "./assets/hero.jpg";
import Explore from "./components/Explore/Explore";
import Journal from "./components/Journal/Journal";
import Footer from "./components/Footer/Footer";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
};
const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <Explore />
      <Journal />
      <Footer />
    </div>
  );
};

export default App;
