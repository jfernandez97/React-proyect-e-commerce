import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemList } from "./components/ItemList/ItemList";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemCount />
      {/* <ItemList /> */}
      <h2>Ofertas de la semana</h2>
    </div>
  );
}

export default App;
