import React from "react";
import "./Purchase.css";
import Button from "./UI/Button";
import MinusButton from "../images/icon-minus.svg";
import PlusButton from "../images/icon-plus.svg";
import CartIcon from "../images/icon-cart.svg";

export default function Purchase(props) {
  const [amountOfItemsForCart, setAmountOfItemsForCart] = React.useState(1);

  const lessItemsToBuy = () => {
    setAmountOfItemsForCart((prevAmountofItemsForCart) => {
      if (amountOfItemsForCart === 1) {
        return 1;
      } else {
        return prevAmountofItemsForCart - 1;
      }
    });
  };

  const moreItemsToBuy = () => {
    setAmountOfItemsForCart(amountOfItemsForCart + 1);
  };

  const addToCart = () => {
    props.addToCart(amountOfItemsForCart);
  };

  return (
    <div className="purchase">
      <div className="set-amount flex-sb-c">
        <button className="minus" onClick={lessItemsToBuy}>
          <img src={MinusButton} />
        </button>
        <span className="amount">{amountOfItemsForCart}</span>
        <button className="minus" onClick={moreItemsToBuy}>
          <img src={PlusButton} />
        </button>
      </div>
      <Button onClick={addToCart}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fillRule="nonzero"
          />
        </svg>
        <span>Add to cart</span>
      </Button>
    </div>
  );
}
