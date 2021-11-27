import React, { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); //estado

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    askData()
      .then((resp) => {
        setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>{loading ? <h2> Loading ... </h2> : <ItemList items={items} />}</div>
  );
};
