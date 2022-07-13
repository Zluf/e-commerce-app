import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import ProductDescription from "./components/ProductDescription";
import Purchase from "./components/Purchase";
import Cart from "./components/Cart/Cart";
import SliderFullScreen from "./components/Slider/SliderFullScreen";

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showSlider, setShowSlider] = React.useState(false);
  const [currentAmountInCart, setCurrentAmountInCart] = React.useState(0);
  const [cartTransition, setCartTransition] = React.useState("");
  const [currentImage, setCurrentImage] = React.useState(0);

  const showCartHandler = () => {
    if (showCart === true) {
      setCartTransition(false);
      setTimeout(() => setShowCart(false), 300);
    } else {
      setShowCart(true);
      setTimeout(() => setCartTransition(true), 100);
    }
  };

  const showSliderHandler = () => {
    setShowSlider(showSlider ? false : true);
  };

  const addToCart = (amountOfItemsForCart) => {
    setCurrentAmountInCart(currentAmountInCart + amountOfItemsForCart);
  };

  const emptyCart = () => {
    setCurrentAmountInCart(0);
  };

  const changeImage = (slideNum) => {
    setCurrentImage(slideNum);
  };

  return (
    <div className="app">
      {showCart && (
        <Cart
          onToggleCart={showCartHandler}
          onDelete={emptyCart}
          amountInCart={currentAmountInCart}
          className={cartTransition ? "cart-slide" : ""}
        />
      )}

      {showSlider && (
        <SliderFullScreen
          currentImage={currentImage}
          onChangeImage={changeImage}
          onCloseSlider={showSliderHandler}
        />
      )}

      <Header
        onToggleCart={showCartHandler}
        amountInCart={currentAmountInCart}
        styleCartBtn={
          showCart || currentAmountInCart > 0
            ? { filter: "contrast(1000%)" }
            : {}
        }
      />

      <main>
        <Slider
          onToggleSliderFullScreen={showSliderHandler}
          currentImage={currentImage}
          onChangeImage={changeImage}
        />
        <div className="product-container">
          <ProductDescription />
          <Purchase addToCart={addToCart} />
        </div>
      </main>
    </div>
  );
}

export default App;
