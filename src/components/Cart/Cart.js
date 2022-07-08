import React from "react";
import ReactDOM from "react-dom";
import CartItem from "./CartItem.js";
import Button from "../UI/Button.js";
import Overlay from "../UI/Overlay.js";
import "./Cart.css";

const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="cart-container">
          <Overlay
            onClick={props.onToggleCart}
            style={{ backgroundColor: "transparent" }}
          />
          <div className={`cart ${props.className}`}>
            <h4 className="cart__title">Cart</h4>

            {!props.amountInCart && (
              <div className=" cart__content cart__content--empty">
                <span>Your cart is empty.</span>
              </div>
            )}

            {props.amountInCart >= 1 && (
              <div className="cart__content cart__content--full">
                <CartItem
                  amountInCart={props.amountInCart}
                  onDelete={props.onDelete}
                />
                <Button className="cart__btn--checkout">Checkout</Button>
              </div>
            )}
          </div>
        </div>,
        document.getElementById("cart")
      )}
    </React.Fragment>
  );
};

export default Cart;
