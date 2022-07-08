import React from "react";
import "./Purchase.css";
import Button from "./UI/Button";
import MinusButton from "../images/icon-minus.svg";
import PlusButton from "../images/icon-plus.svg";
import CartIcon from "../images/icon-cart.svg";

export default function Purchase(props) {
  const [amountOfItemsForCart, setAmountOfItemsForCart] = React.useState(0);

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
      <div className="purchase__btn--set-amount flex-sb-c">
        <button onClick={lessItemsToBuy}>
          <img src={MinusButton} />
        </button>
        <span className="purchase__amount">{amountOfItemsForCart}</span>
        <button onClick={moreItemsToBuy}>
          <img src={PlusButton} />
        </button>
      </div>
      <Button className="purchase__btn--add-to-cart" onClick={addToCart}>
        <img src={CartIcon} />
        <h3>Add to cart</h3>
      </Button>
    </div>
  );
}
