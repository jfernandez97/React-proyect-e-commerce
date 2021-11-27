import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ props }) => {
  return (
    <div className="card col-3 m-2">
      <img className="m-2" src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Precio :{props.price}</p>
      <p>Marca:{props.brand}</p>
      <ItemCount />
    </div>
  );
};
