import React from "react";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="container row my-5">
      {/* El map me genera un array con la misma cant de elementos que el array de origen, donde cada elemento del nuevo array */}
      {/* es el return que yo defino para la funcion que paso dentro */}
      <h2> Productos </h2>
      <hr />
      {items.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </div>
  );
};
