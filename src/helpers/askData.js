import { products } from "../data/products";

export const askData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
