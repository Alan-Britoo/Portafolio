import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "./CardProject";
import EcZ from "../assets/ecomerceZapatos.png";
import ABB from "../assets/AirBnB.png";
import Temp from "../assets/Clima.png";

function CarouselSlider() {
  // npm install react-slick slick-carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex w-[80%] gap-[5%] mx-auto  ">
      <div className="px-4">
        <CardProject
          foto={EcZ}
          titulo={"E-Commerce"}
          desc={
            "He replicado una plataforma de comercio electrónico intuitiva y minimalista para comprar y vender productos. Experimenta la conveniencia del shopping online con nosotros hoy mismo."
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://ecomercezapatos.netlify.app"}
          url2={"https://github.com/Alan-Britoo/eCOMERS-ZAPATOS"}
        />
      </div>
      <div className="px-4">
        <CardProject
          foto={ABB}
          titulo={"AirBnb"}
          desc={
            'He recreado la esencia y funcionalidad de Airbnb, ofreciendo una experiencia única. Diseñé y desarrollé esta app para descubrir, reservar y compartir alojamientos en "todo el mundo".'
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://airbnbr.netlify.app"}
          url2={"https://github.com/Alan-Britoo/MPR-N3"}
        />
      </div>
      <div className="px-4">
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
    </Slider>
  );
}

export default CarouselSlider;
