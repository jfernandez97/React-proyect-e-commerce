import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { askItem } from "../../helpers/askItem";
import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

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
  return <div>{loading ? <Loader /> : <ItemDetail item={item} />}</div>;
};
