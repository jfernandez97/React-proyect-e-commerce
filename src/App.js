import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemList } from "./components/ItemList/ItemList";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer />
      <Routes>
        <Route path="/" element={<ItemCount />} />
        <Route path="/cart" element={<CartView />} />
        {/* <ItemList /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
