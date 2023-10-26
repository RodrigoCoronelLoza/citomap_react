import React, { useState } from "react";
import classes from "./carousel.module.css";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    if (currentIndex === props.slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const renderSlide = () => {
    // foo();

    return <div>{props.slides[currentIndex]}</div>;
  };

  function foo() {
    // console.log("carajo");

    goToNextSlide();

    setTimeout(foo, 5000);
  }

  return (
    <div className={classes.carouselcontainer}>
      <button className={classes.prevbutton} onClick={goToPrevSlide}>
        {"<"}
      </button>
      {renderSlide()}
      {/* {foo()} */}
      <button className={classes.nextbutton} onClick={goToNextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
