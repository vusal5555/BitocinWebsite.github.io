import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Coins from "./Components/Coins";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Coins></Coins>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
