import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card col-3 m-2">
      <img className="m-2" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Marca: {item.brand}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary m-2">
        Ver más
      </Link>
    </div>
  );
};
