import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Belief from "./Components/Belief";
import VideoSection from "./Components/VideoSection";
import Gallery from "./Components/Gallery";
import SloganLine from "./Components/SloganLine";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Belief />
      <VideoSection />
      <Gallery />
      <SloganLine />
      <Footer />
    </>
  );
}

export default App;
