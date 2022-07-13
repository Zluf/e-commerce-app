import React from "react";
import "./Slider.css";
import productImages from "../../images/index.js";
import prevIcon from "../../images/icon-previous.svg";
import closeIcon from "../../images/icon-close.svg";

const Slider = (props) => {
  const slideLeft = () => {
    if (props.currentImage === 0) {
      props.onChangeImage(3);
    } else {
      props.onChangeImage(props.currentImage - 1);
    }
  };

  const slideRight = () => {
    if (props.currentImage === 3) {
      props.onChangeImage(0);
    } else {
      props.onChangeImage(props.currentImage + 1);
    }
  };

  return (
    <div className={`slider ${props.classNameSlider}`}>
      <button
        className="slider__close-btn"
        style={props.styleCloseButton}
        onClick={props.onCloseSlider}
      >
        <img src={closeIcon} />
      </button>

      <div className="slider__container">
        <div
          className="slider__thread"
          onClick={props.onToggleSliderFullScreen}
          style={{ transform: `translateX(-${25 * props.currentImage}%)` }}
        >
          {Object.values(productImages).map((img, i) => {
            return <img key={i} src={img} alt="trainers" />;
          })}
        </div>
      </div>

      <div
        className={`slider__slide-buttons ${props.classNameSlideButtons} flex-sb-c`}
      >
        <button
          className="slider__slide-change slider__slide-change--left flex-c-c"
          onClick={slideLeft}
        >
          <img src={prevIcon} />
        </button>
        <button
          className="slider__slide-change slider__slide-change--right flex-c-c"
          onClick={slideRight}
        >
          <img src={prevIcon} />
        </button>
      </div>

      <div className="slider__image-select" style={props.styleImageSelect}>
        {Object.values(productImages).map((img, i) => {
          return (
            <div
              key={i}
              style={
                props.currentImage === i
                  ? { border: "2px solid var(--orange)" }
                  : { border: "2px solid transparent" }
              }
              className="slider__slide"
            >
              <img
                onClick={() => {
                  props.onChangeImage(i);
                }}
                src={img}
                alt="trainers photo"
                className={`slider__slide ${
                  props.currentImage === i && "slider__slide-img--selected"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
