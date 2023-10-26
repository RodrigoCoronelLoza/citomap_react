import React from "react";
import Carousel from "../../components/Carousel/Carousel.js";
import classes from "./homePage.module.css";
// import image1 from "../../../public/images/homeImages/image-1.jpg";

export default function HomePage() {
  const slides = [
    <div>
      <img src={"./images/homeImages/image-1.jpg"} alt="Slide1"></img>
      <h2>
        Calidad1 y seguridad Trabajamos con calidad, seguridad y por el trato
        digno de las muestras de citología1
      </h2>
    </div>,
    <div>
      <img src={"./images/homeImages/image-2.jpg"} alt="Slide2"></img>
      <h2>Muestras de tejidos para diagnostico de patologias</h2>
    </div>,
    <div>
      <img src={"./images/homeImages/image-3.jpg"} alt="Slide3"></img>
      <h2>Muestras citologicas y anatomicas</h2>
    </div>,
  ];
  return (
    <>
      {/* <img src={require("/images/homeImages/image-1.jpg")} alt="Slide1" /> */}

      {/* <img src={"./images/homeImages/image-1.jpg"} alt="Slide1" /> */}

      <div className={classes.carouselhome}>
        <Carousel slides={slides} />
      </div>
    </>
  );
}
