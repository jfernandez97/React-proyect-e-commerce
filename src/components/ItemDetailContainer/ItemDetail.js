import React from "react";
import { useNavigate } from "react-router";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const { amount, handleAdd, handleSub } = useCounter(0, item.stock);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    console.log("item agregado", {
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      amount: amount,
    });
  };

  return (
    <div className="card col-3 m-2">
      <img className="m-2" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio :{item.price}</p>
      <p>Marca:{item.brand}</p>
      <ItemCount
        handleAdd={handleAdd}
        handleSub={handleSub}
        onAdd={handleAddToCart}
        amount={amount}
      />
      <button className="btn btn-primary" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};
