import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="card col-3 m-2">
      <img className="m-2" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio :{item.price}</p>
      <p>Marca:{item.brand}</p>
      <button className="btn btn-primary m-2">Ver más</button>
    </div>
  );
};
