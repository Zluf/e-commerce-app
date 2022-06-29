import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../UI/Overlay.js";
import Slider from "./Slider.js";

const SliderFullScreen = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay>
          <Slider
            styleCloseButton={{ display: "block" }}
            onCloseSlider={props.onCloseSlider}
            styleSlideButtons={{
              display: "flex",
            }}
            styleImageSelect={{ width: "82%" }}
          />
        </Overlay>,
        document.getElementById("slider-full-screen")
      )}
    </React.Fragment>
  );
};

export default SliderFullScreen;
