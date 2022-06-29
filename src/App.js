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

  const showCartHandler = () => {
    setShowCart(showCart ? false : true);
  };

  const showSliderHandler = () => {
    console.log("boo");
    setShowSlider(showSlider ? false : true);
  };

  const addToCart = (amountOfItemsForCart) => {
    setCurrentAmountInCart(currentAmountInCart + amountOfItemsForCart);
  };

  const emptyCart = () => {
    setCurrentAmountInCart(0);
  };

  return (
    <div className="app">
      {showCart && (
        <Cart
          onToggleCart={showCartHandler}
          onDelete={emptyCart}
          amountInCart={currentAmountInCart}
        />
      )}

      {showSlider && <SliderFullScreen onCloseSlider={showSliderHandler} />}

      <Header
        onToggleCart={showCartHandler}
        amountInCart={currentAmountInCart}
      />

      <main>
        <Slider onToggleSliderFullScreen={showSliderHandler} />
        <div className="product-container container">
          <ProductDescription />
          <Purchase addToCart={addToCart} />
        </div>
      </main>
    </div>
  );
}

export default App;
