import React from "react";
import { products } from "../data/products";

export const askItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((el) => el.id === id));
    }, 1000);
  });
};
