import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import WelcomeText from "../components/WelcomeText";
import USPs from "../components/USPs";
import AboutPreview from "../components/AboutPreview";
import Footer from "../components/Footer";

export function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <WelcomeText />
      <AboutPreview />
      <USPs />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;


