import React from "react";
import "./ProductDescription.css";
import productImages from "../images/index.js";

function ProductDescription(props) {
  return (
    <div className="product-description">
      <section>
        <h5>Sneaker company</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer role, they'll withstand anything the
          weather can offer.
        </p>
      </section>
      <div className="price flex-sb-c">
        <div className="current-price flex-sb-c">
          <h2>$125.00</h2>
          <span>50%</span>
        </div>
        <div className="old-price">$250.00</div>
      </div>
    </div>
  );
}

export default ProductDescription;
