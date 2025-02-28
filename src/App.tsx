import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import WeSell from "./components/WeSell";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ChooseUs />
      <WeSell />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
