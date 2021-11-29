import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export const ItemCount = ({ handleAdd, handleSub, onAdd, amount }) => {
  return (
    <div className="m-4">
      <button onClick={handleSub} className="btn btn-outline-primary">
        -
      </button>
      <span className="mx-3">{amount} </span>
      <button onClick={handleAdd} className="btn btn-primary">
        +
      </button>
      <div>
        <button className="btn btn-success my-2" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
