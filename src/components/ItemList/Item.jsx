import React from "react";

export const Item = (props) => {
  return (
    <div className="x1:w-1/3 md:w-1/2 p-4">
      <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
        <h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">
          {props.type}
        </h3>
        <h2 className="text-lg text-red-600 font-medium title-font mb-4">
          {props.price}
        </h2>
        <a href="#" className="text-red-500 inline-flex items-center mt-3">
          Ver mas
        </a>
      </div>
    </div>
  );
};
