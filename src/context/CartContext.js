import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const isInCart = (id) => {
    //El metodo some, funciona como el find, solo que en vez de devolver un objeto devuelve un boolean.
    return cart.some((el) => el.id === id);
  };

  const totalAmount = () => {
    return cart.reduce((acc, el) => acc + el.amount, 0);
  };

  const totalBuy = () => {
    return cart.reduce((acc, el) => acc + el.amount * el.price, 0);
  };
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        totalAmount,
        emptyCart,
        totalBuy,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
