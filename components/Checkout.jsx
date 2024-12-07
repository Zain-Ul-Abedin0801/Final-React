import React from "react";
import { cart } from "./Data/Carts";

const Checkout = () => {
  let itemsCount = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    itemsCount += item.quantity;
    totalPrice += item.quantity * 10;  // Assuming $10 for simplicity
  });

  return (
    <div className="main">
      <div className="page-title">Review your order</div>
      <div className="checkout-grid">
        <div className="order-summary">
          <p>Items ({itemsCount}):</p>
          <p>${totalPrice}</p>
        </div>
        <div className="payment-summary">
          <div className="payment-summary-row">
            <p>Order total:</p>
            <p>${totalPrice}</p>
          </div>
          <button className="place-order-button">Place your order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
