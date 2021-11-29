import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss";

export const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="m-2">{totalAmount()}</span>
    </div>
  );
};
