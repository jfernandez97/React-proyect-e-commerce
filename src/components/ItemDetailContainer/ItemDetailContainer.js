import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { askItem } from "../../helpers/askItem";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    askItem(Number(itemId))
      .then((resp) => setItem(resp))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>{loading ? <h2> Loading... </h2> : <ItemDetail item={item} />}</div>
  );
};
