import React from "react";
import InfoNavbar from "./Contenedores/infoNavbar";
import { NavIcons } from "./Contenedores/navBar";
import Infoicon from "./Contenedores/infoicon";
import fotoR from "./assets/ElVijoRotsen.jpeg";
import Footer from "./Contenedores/Foot";

function App() {
  return (
    <>
      <div className=" bg-[#191919]">
        <InfoNavbar />
        <div className="h-full w-[80%] flex justify-between items-center mt-[10%] text-white mx-auto">
          <h1 className="text-5xl text-start">
            Hi 👋,
            <br />
            My name is <br />
            <p className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 p-0 m-0">
              Rotsen Estefanel
            </p>{" "}
            I build things for web
          </h1>
          <div className="rounded-full h-96 w-96 p-1 bg-gradient-to-r from-pink-500 to-blue-600">
            <img
              src={fotoR}
              alt=""
              className="rounded-full h-full w-full object-cover border-4 border-transparent transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <h2 className="w-[30%] mx-auto mt-[10%] text-5xl text-center font-semibold leading-tight  text-[#CCCCCC] ">
          My Tech Stack
        </h2>

        <p class="w-full text-[#A7A7A7] mt-4 text-2xl text-center mx-auto font-normal leading-7 ">
          Technologies I’ve been working with recently
        </p>

        <div className="h-[20%] py-[5%]">
          <Infoicon />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
