import React, { useState } from "react";

export const useCounter = (initial = 0, stock) => {
  const [amount, setAmount] = useState(initial);

  const handleSub = () => {
    amount > initial && setAmount(amount - 1);
  };

  const handleAdd = () => {
    amount < stock && setAmount(amount + 1);
  };

  return {
    amount,
    handleSub,
    handleAdd,
  };
};
