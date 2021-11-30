import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export const ItemCount = ({
  handleAdd,
  handleSub,
  onAdd,
  amount,
  min,
  max,
}) => {
  return (
    <div className="m-4">
      <button
        onClick={handleSub}
        className={
          amount === min ? "btn btn-outline-danger" : "btn btn-outline-primary"
        }
      >
        -
      </button>
      <span className="mx-3">{amount} </span>
      <button
        onClick={handleAdd}
        className={amount === max ? "btn btn-danger" : "btn btn-primary"}
      >
        +
      </button>
      <div>
        <button
          className="btn btn-success my-2"
          disabled={amount === min}
          onClick={onAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
