import React, { useState } from "react";

export const ItemCount = ({ stock = 10, initial = 0 }) => {
  const [amount, setAmount] = useState(initial);

  const handleSub = () => {
    amount > initial && setAmount(amount - 1);
  };

  const handleAdd = () => {
    amount < stock && setAmount(amount + 1);
  };

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
        <button className="btn btn-success my-2">Add to Cart</button>
      </div>
    </div>
  );
};
