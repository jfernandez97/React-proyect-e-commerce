import { useEffect } from "react";
import { ItemList } from "./ItemList";
import { useState } from "react";

const products = [
  { id: 1, type: "gorro", brand: "adidas", price: 1500, stock: 10 },
  { id: 2, type: "buzo", brand: "nike", price: 12000, stock: 20 },
  { id: 3, type: "campera", brand: "ansilta", price: 25000, stock: 5 },
  { id: 4, type: "zapatilla", brand: "fila", price: 18000, stock: 8 },
];
function Data() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const err = false;
      if (!err) {
        resolve(products);
      }
      reject("Error al obtener los datos");
    }, 300);
  });
}

function ItemListContainer() {
  const [items, setItems] = useState(null);

  let requestData = Data();
  useEffect(() => {
    requestData
      .then(function (items_data) {
        setItems(items_data);
      })
      .catch(function (error_msg) {
        console.log(error_msg);
      })
      .finally(function () {
        console.log("Promesa finalizada");
      });
  }, []);
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -ms-8 -mb-10">
          {items ? <ItemList items={items} /> : <h3>Cargando . . . </h3>}
        </div>
      </div>
    </section>
  );
}
