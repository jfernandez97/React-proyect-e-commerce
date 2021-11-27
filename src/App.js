import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemList } from "./components/ItemList2/ItemList";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer />
      <hr />
      <ItemDetailContainer />
      {/* <Routes>
        <Route path="/" element={<ItemCount />} />
        <Route path="/cart" element={<CartView />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
