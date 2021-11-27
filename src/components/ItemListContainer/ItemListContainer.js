import React, { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); //estado

  console.log(items);

  useEffect(() => {
    askData()
      .then((resp) => {
        setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Peticion finalizada");
      });
  }, []);

  return <div></div>;
};
