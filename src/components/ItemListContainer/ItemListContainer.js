import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { askData } from "../../helpers/askData";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); //estado

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    askData()
      .then((resp) => {
        if (categoryId) {
          setItems(resp.filter((el) => el.category === categoryId));
        } else {
          setItems(resp);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>{loading ? <h2> Loading ... </h2> : <ItemList items={items} />}</div>
  );
};
