import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Item } from "../ItemList/Item";

export const CheckOut = () => {
  const [orderId, setOrderId] = useState(null);

  const { cart, totalBuy, emptyCart } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const generateOrder = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: totalBuy(),
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);

    const productsRef = collection(db, "products");
    const ordersRef = collection(db, "orders");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((el) => el.id)
      )
    );

    const outOfStock = [];

    getDocs(q).then((res) => {
      res.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemToUpdate.amount) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemToUpdate.amount,
          });
        } else {
          outOfStock.push(itemToUpdate);
        }
      });
      if (outOfStock.length === 0) {
        batch.commit();
        addDoc(ordersRef, order).then((res) => {
          setOrderId(res.id);
          emptyCart();
        });
      } else {
        alert("Hay items del carrito que no tienen stock");
      }
    });
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name.length > 4 && values.email.length > 5) {
      generateOrder(values);
    } else {
      alert("Campos vacios");
    }
  };

  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <h2>Gracias por su compra</h2>
          <p> Su numero de compra es : {orderId}</p>
          <Link to="/" className="btn btn-primary">
            {" "}
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Resumen de compra</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              value={values.name}
              onChange={handleInputChange}
              name="name"
              className="form-control my-2"
              placeholder="Nombre y apellido"
              type="text"
            ></input>
            <input
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              className="form-control my-2"
              type="text"
            ></input>
            <input
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
              placeholder="Telefono"
              className="form-control my-2"
              type="text"
            ></input>
            <button type="submit" className="btn btn-success">
              {" "}
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
};
