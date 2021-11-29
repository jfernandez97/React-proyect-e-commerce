import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar px-5">
      <Link to="/">
        <h1>ClothStore</h1>
      </Link>
      <div id="navigation-bar">
        <nav>
          <ul>
            <li>
              <Link to="/category/zapatillas">Zapatillas</Link>
            </li>
            <li>
              <Link to="/category/buzos">Buzos</Link>
            </li>
            <li>
              <Link to="/category/camperas">Camperas</Link>
            </li>
            <li>
              <Link to="/category/gorros">Gorros</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
