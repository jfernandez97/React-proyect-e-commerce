import React from "react";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -ms-8 -mb-10">
          {items.map((item) => {
            <Item
              key={item.id}
              type={item.type}
              brand={item.brand}
              price={item.price}
            />;
          })}
        </div>
      </div>
    </section>
  );
};
