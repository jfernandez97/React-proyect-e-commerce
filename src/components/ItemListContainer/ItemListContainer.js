import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); //estado

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    //Creo referencia a la coleccion
    const productsRef = collection(db, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;
    //Llamamos a la referencia
    getDocs(q)
      .then((resp) => {
        const products = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(products);
        setItems(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return <div>{loading ? <Loader /> : <ItemList items={items} />}</div>;
};
