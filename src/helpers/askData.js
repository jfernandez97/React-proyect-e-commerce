import { products } from "../data/products";

export const askData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      //reject("Promesa rechazada");
    }, 1000);
  });
};
