import React from "react";
import "./Slider.css";
import productImages from "../../images/index.js";
import prevIcon from "../../images/icon-previous.svg";
import closeIcon from "../../images/icon-close.svg";

const Slider = (props) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const slideLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(3);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const slideRight = () => {
    if (currentImage === 3) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className={`slider-section ${props.className}`}>
      <button
        className="close-slider"
        style={props.styleCloseButton}
        onClick={props.onCloseSlider}
      >
        <img src={closeIcon} />
      </button>
      
      <div className="slide-buttons flex-sb-c" style={props.styleSlideButtons}>
        <button className="slide-left flex-c-c" onClick={slideLeft}>
          <img src={prevIcon} />
        </button>
        <button className="slide-right flex-c-c" onClick={slideRight}>
          <img src={prevIcon} />
        </button>
      </div>

      <div className="slider-container">
        <div
          className="slider"
          onClick={props.onToggleSliderFullScreen}
          style={{ transform: `translateX(-${25 * currentImage}%)` }}
        >
          {Object.values(productImages).map((img, i) => {
            return <img key={i} src={img} alt="trainers" />;
          })}
        </div>
      </div>

      <div className="image-select" style={props.styleImageSelect}>
        {Object.values(productImages).map((img, i) => {
          return (
            <img
              onClick={() => {
                setCurrentImage(i);
              }}
              key={i}
              src={img}
              alt="trainers photo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
