import React from "react";
import InfoNavbar from "./Contenedores/infoNavbar";
import { NavIcons } from "./Contenedores/navBar";
import Infoicon from "./Contenedores/infoicon";
import fotoR from "./assets/ElVijoRotsen.jpeg";
import Footer from "./Contenedores/Foot";
import CardProject from "./Contenedores/CardProject";
import EcZ from "./assets/ecomerceZapatos.png";
import ABB from "./assets/AirBnB.png";
import Temp from "./assets/Clima.png";

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
        <div className="text-[#CCCCCC] my-[5%] text-center text-[48px] font-semibold">
          Projects
          <p className="text-[#A7A7A7] mt-[2%] text-center text-[32px] font-medium">
            Things I’ve built so far
          </p>
        </div>
        <div className="flex w-[80%] gap-[5%] mx-auto  ">
          <CardProject
            foto={EcZ}
            titulo={"E-Commerce"}
            desc={
              "He replicado una plataforma de comercio electrónico intuitiva y minimalista para comprar y vender productos. Experimenta la conveniencia del shopping online con nosotros hoy mismo."
            }
            tec={"HTML , JavaScript, React, Tailwind"}
            url={"https://airbnbr.netlify.app"}
            url2={"https://github.com/Alan-Britoo/eCOMERS-ZAPATOS"}
          />
          <CardProject
            foto={ABB}
            titulo={"AirBnb"}
            desc={
              "He recreado la esencia y funcionalidad de Airbnb, ofreciendo una experiencia única. Diseñé y desarrollé esta app para descubrir, reservar y compartir alojamientos en todo el mundo de forma intuitiva."
            }
            tec={"HTML , JavaScript, React, Tailwind"}
            url={"https://ecomercezapatos.netlify.app"}
            url2={"https://github.com/Alan-Britoo/MPR-N3"}
          />
          <CardProject
            foto={Temp}
            titulo={"App-Temperature"}
            desc={
              "Mi proyecto es una aplicación de clima intuitiva y precisa. Proporciona información detallada del clima para ayudarte a planificar tus actividades diarias con confianza y comodidad."
            }
            tec={"HTML , JavaScript, React, Tailwind"}
            url={"https://temprfce.netlify.app"}
            url2={"https://github.com/Alan-Britoo/MPR-N3"}
          />
        </div>
        <div className="mt-[5%]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
