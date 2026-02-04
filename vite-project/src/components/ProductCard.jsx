import React from "react";
import Button from "./Button";
import "./ProductCard.css";
export default function Product(props) {
  const { brand, price, image } = props;
  return (
    <>
      <div className="product-card">
        <h1>{brand}</h1>
        <p>Price: ${price}</p>
        <img src={image} alt={brand} width="200" />
      </div>
    </>
  );
}
