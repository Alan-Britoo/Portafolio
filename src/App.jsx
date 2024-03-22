import React, { useState } from "react";
import InfoNavbar from "./Contenedores/infoNavbar";
import { NavIcons } from "./Contenedores/navBar";
import Infoicon from "./Contenedores/infoicon";
import fotoR from "./assets/ElVijoRotsen.jpeg";
import Footer from "./Contenedores/Foot";

import About from "./Contenedores/About";
import Robot from "./Contenedores/Robot";
import CarouselSlider from "./Contenedores/CarouselSlider";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  return (
    <>
      <div className=" bg-[#191919]">
        <InfoNavbar toggleAbout={toggleAbout} />
        <div className="h-full w-[80%] flex justify-between items-center mt-[10%] text-white mx-auto md:bg-[#191919] lg:bg-[#191919] ">
          <h1
            className="text-5xl text-start max-md:text-[26px] max-lg:text-[38px]"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <p className="flex ">
              Hi <p className=" animate-bounce">👋</p>,
            </p>
            My name is <br />
            <p className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 p-0 m-0">
              Rotsen Estefanel
            </p>{" "}
            I build things for web
          </h1>
          <div
            className="rounded-full h-96 w-96 p-1 bg-gradient-to-r from-pink-500 to-blue-600 max-md:w-[236px] max-md:h-[236px] max-lg:w-[310px] max-lg:h-[310px] max-sm:w-[160px] max-sm:h-[160px]"
            data-aos="fade-down-left"
            data-aos-duration="2000"
          >
            <img
              src={fotoR}
              alt=""
              className="rounded-full h-full w-full object-cover border-4 border-transparent transform hover:scale-105 transition duration-300 ease-in-out  "
            />
          </div>
        </div>
        {showAbout && (
          <section id="about" className=" max-sm:bg-[#191919]">
            <About />
          </section>
        )}
        <h2 className="w-[30%] mx-auto mt-[10%] text-5xl text-center font-semibold leading-tight  text-[#CCCCCC] max-md:text-[34px] max-sm:text-[26px]">
          My Tech Stack
        </h2>

        <p class="w-full text-[#A7A7A7] mt-4 text-2xl text-center mx-auto font-normal leading-7  max-md:text-[20px]">
          Technologies I’ve been working with recently
        </p>

        <div className="h-[20%] py-[5%]">
          <Infoicon />
        </div>
        <div
          id="projects"
          className="text-[#CCCCCC] my-[5%] text-center text-[48px] font-semibold max-md:text-[38px]"
        >
          Projects
          <p className="text-[#A7A7A7] mt-[2%] text-center text-[32px] font-medium max-md:text-[26px]">
            Things I’ve built so far
          </p>
        </div>

        <CarouselSlider />

        <section id="footer" className="mt-[5%] ">
          <Footer />
        </section>
        <Robot />
      </div>
    </>
  );
}

export default App;
