import React from "react";
import ReactDOM from "react-dom";
import "./SliderFullScreen.css";
import Overlay from "../UI/Overlay.js";
import Slider from "./Slider.js";

const SliderFullScreen = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay className="overlay-toggle">
          <Slider
            classNameSlider="slider--full-screen"
            classNameSlideButtons="slider--full-screen__slide-buttons"
            onCloseSlider={props.onCloseSlider}
            styleCloseButton={{ display: "block" }}
            styleImageSelect={{ width: "82%" }}
            currentImage={props.currentImage}
            onChangeImage={props.onChangeImage}
          />
        </Overlay>,
        document.getElementById("slider-full-screen")
      )}
    </React.Fragment>
  );
};

export default SliderFullScreen;
