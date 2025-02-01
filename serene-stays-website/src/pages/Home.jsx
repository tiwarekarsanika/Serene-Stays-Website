import React from "react";
import Header from "../components/Header";
import WelcomeText from "../components/WelcomeText";
import USPs from "../components/USPs";
import AboutPreview from "../components/AboutPreview";


export function Home() {
  return (
    <div>
      <Header />
      <WelcomeText />
      <AboutPreview />
      <USPs />
    </div>
  );
}

export default Home;


