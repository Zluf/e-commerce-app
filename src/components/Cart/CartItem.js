import React from "react";
import "./CartItem.css";
import productImages from "../../images/index.js";
import deleteIcon from "../../images/icon-delete.svg";

export default function CartItem(props) {
  const price = (125).toFixed(2);

  return (
    <div className="cart-item">
      <img
        className="cart-item__photo"
        src={productImages.imageProduct1}
        alt="trainers"
      />

      <div className="cart-item__summary">
        <div className="cart-item__name">Autumn Limited Edition Sneakers</div>

        <div className="cart-item__price-summary">
          <div className="cart-item__price--one">{`$${price}`}</div>
          <span>x</span>
          <div className="cart-item__amount">{props.amountInCart}</div>
          <div className="cart-item__price--total">{`$${(
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
