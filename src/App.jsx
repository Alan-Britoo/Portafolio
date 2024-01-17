import { useState } from "react";

import "./App.css";
import InfoNavbar from "./Contenedores/infoNavbar";
import { NavIcons } from "./Contenedores/navBar";
import Infoicon from "./Contenedores/infoicon";
import fotoR from './assets/ElVijoRotsen.jpeg'

function App() {
  return (
    <>
      <div>
        <div>
          <InfoNavbar />
        </div>
        <div className="info">
          <h1 style={{fontSize:'45px'}}>
            Hi 👋,
            <br />
            My name is <br />
            Rotsen Estefanel <br />I build things for web
          </h1>
          <img
            src={fotoR}
            alt=""
            className="foto"
          />
        </div>
        <h2 style={{ marginLeft: "55%", marginTop: "90px", fontSize: "30px" }}>
        My Tech Stack
      </h2>
      <p style={{ marginLeft: "49%", marginTop: "10px", fontSize: "17px" }}>
        {" "}
        Technologies I’ve been working with recently
      </p>
      <div>
        <Infoicon/>
      </div>
      </div>
    </>
  );
}

export default App;
