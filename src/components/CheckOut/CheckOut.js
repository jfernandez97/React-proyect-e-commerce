import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Este campo es obligatorio.")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(30, "El nombre no puede superar los 30 caracteres"),
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("Email invalido."),
  tel: Yup.number()
    .typeError("Lo que acaba de ingresar no parece un numero de telefono")
    .positive("Un numero de telefono no puede comenzar con un menos")
    .integer("El numero de telefono no puede incluir decimales")
    .required("Este campo es obligatorio")
    .min(8, "Debe tener al menos 8 numeros"),
});

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              tel: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              generateOrder(values);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                  className="form-control my-2"
                  placeholder="Nombre y apellido"
                  type="text"
                ></input>
                {formik.touched.name && formik.errors.name && (
                  <p className="alert alert-danger">{formik.errors.name}</p>
                )}
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  placeholder="Email"
                  className="form-control my-2"
                  type="text"
                ></input>
                {formik.touched.email && formik.errors.email && (
                  <p className="alert alert-danger">{formik.errors.email}</p>
                )}
                <input
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  name="tel"
                  placeholder="Telefono"
                  className="form-control my-2"
                  type="text"
                ></input>
                {formik.touched.email && formik.errors.tel && (
                  <p className="alert alert-danger">{formik.errors.tel}</p>
                )}
                <button type="submit" className="btn btn-success">
                  {" "}
                  Enviar
                </button>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};
