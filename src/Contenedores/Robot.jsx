import React, { useState } from "react";

import Yo from "../assets/ElVijoRotsen.jpeg";

import Wp2 from "../assets/wp3.png";
import Gm from "../assets/gmail.svg";
import Git from "../assets/github.svg";
import Link from "../assets/link.svg";

function Robot() {
  const [expanded, setExpanded] = useState(false);

  const toggleOptions = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed bottom-14 right-9 z-10 ">
      {expanded && (
        <div className="mt-2 rounded-lg shadow-md p-1 flex flex-col gap-3 transition-all duration-1000 ">
          {/* <a
            href="https://github.com/Alan-Britoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src={Git}
              alt="Correo"
              className="w-12 h-12 max-sm:w-[34px]  max-sm:h-[34px]"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/rotsenestefanel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img
              src={Link}
              alt="Correo"
              className="w-12 h-12 max-sm:w-[34px]  max-sm:h-[34px]"
            />
          </a>
          <a
            href="https://wa.me/+573175200679"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src={Wp2}
              alt="WhatsApp"
              className="w-12 h-12 max-sm:w-[37px]  max-sm:h-[37px]"
            />
          </a>
          <a
            href="mailto:rotcarrillo_8@hotmail.com"
            className="flex items-center gap-2 mb-2"
          >
            <img
              src={Gm}
              alt="Correo"
              className="w-12 h-12 max-sm:w-[38px]  max-sm:h-[38px]"
            />
          </a>
        </div>
      )}
      <div
        className="w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse transform hover:scale-110 transition duration-1000 max-sm:w-[43px]  max-sm:h-[43px] "
        onClick={toggleOptions}
      >
        <img
          src={Yo}
          alt="Robot"
          className={`w-[50px] h-[50px] max-sm:w-[41px]  max-sm:h-[40px]  rounded-full transition ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Robot;
