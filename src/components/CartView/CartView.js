import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../CartView/CartView.scss";

export const CartView = () => {
  const { cart, emptyCart, totalBuy, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito esta vacio</h2>
        <Link to="/" className="btn btn-primary m-2">
          {" "}
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />
      {cart.map((el) => (
        <div key={el.id}>
          <ul>
            <li>
              <h3>{el.name}</h3>
              <p>Marca: {el.brand}</p>
              <p>Precio: ${el.price}</p>
              <p>Cantidad: {el.amount}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(el.id)}
              >
                <FaTrash />
              </button>
            </li>
          </ul>
        </div>
      ))}
      <hr />
      <h4>Total: ${totalBuy()}</h4>
      <button className="btn btn-danger m-2" onClick={emptyCart}>
        {" "}
        Vaciar carrito
      </button>
      <Link to="/checkout" className="btn btn-success m-2">
        Terminar mi compra
      </Link>
    </div>
  );
};
