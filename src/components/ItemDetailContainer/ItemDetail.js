import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const { amount, handleAdd, handleSub } = useCounter(0, item.stock);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    amount > 0 &&
      addToCart({
        id: item.id,
        name: item.name,
        brand: item.brand,
        price: item.price,
        amount: amount,
      });
  };

  return (
    <div className="card detail col-12 m-2 col-md-3">
      <img className="m-2" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio :{item.price}</p>
      <p>Marca:{item.brand}</p>
      {!isInCart(item.id) ? (
        <ItemCount
          handleAdd={handleAdd}
          handleSub={handleSub}
          onAdd={handleAddToCart}
          amount={amount}
          min={0}
          max={item.stock}
        />
      ) : (
        <Link to="/cart" className="btn btn-success m-2">
          {" "}
          Ir al carrito{" "}
        </Link>
      )}
      <button className="btn btn-primary m-2" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};
