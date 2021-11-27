import React, { useEffect, useState } from "react";
import { askItem } from "../../helpers/askItem";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  console.log(item);
  useEffect(() => {
    askItem(1).then((resp) => setItem(resp));
  }, []);
  return (
    <div>
      {/* {item && (
        <ItemDetail
          key={item.id}
          name={item.name}
          price={item.price}
          brand={item.brand}
          stock={item.stock}
        />
      )} */}
    </div>
  );
};
