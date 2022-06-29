import React from "react";
import "./CartItem.css";
import productImages from "../../images/index.js";
import deleteIcon from "../../images/icon-delete.svg";

export default function CartItem(props) {
  const price = (125).toFixed(2);

  return (
    <div className="cart-item">
      <img
        className="cart-item-photo"
        src={productImages.imageProduct1}
        alt="trainers"
      />

      <div className="cart-item-summary">
        <div className="cart-item-summary-name">
          Autumn Limited Edition Sneakers
        </div>

        <div className="cart-item-summary-price-summary flex-">
          <div className="cart-item-summary-price">{`$${price}`}</div>
          <span>x</span>
          <div className="cart-item-summary-amount">{props.amountInCart}</div>
          <div className="cart-item-summary-total-price">{`$${(
            price * props.amountInCart
          ).toFixed(2)}`}</div>
        </div>
      </div>

      <button className="cart-item-delete" onClick={props.onDelete}>
        <img src={deleteIcon} />
      </button>
    </div>
  );
}
