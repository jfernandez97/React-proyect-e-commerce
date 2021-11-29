import React from "react";
import { useNavigate } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="card col-3 m-2">
      <img className="m-2" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio :{item.price}</p>
      <p>Marca:{item.brand}</p>
      <ItemCount />
      <button className="btn btn-primary" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};
