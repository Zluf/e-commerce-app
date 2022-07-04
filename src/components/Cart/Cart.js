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
            <div className="cart-title">Cart</div>

            {!props.amountInCart && (
              <div className="cart-empty">
                <span>Your cart is empty.</span>
              </div>
            )}

            {props.amountInCart >= 1 && (
              <div className="cart-content">
                <CartItem
                  amountInCart={props.amountInCart}
                  onDelete={props.onDelete}
                />
                <Button>Checkout</Button>
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
