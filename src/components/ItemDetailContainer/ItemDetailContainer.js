import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const docRef = doc(productsRef, itemId);

    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container detail_cont row col-12 my-5">
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};
