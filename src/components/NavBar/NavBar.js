import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand className="navbar-brand px-5">
              ClothStore
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/category/zapatillas" className="nav-link m-2 px-5">
                Zapatillas
              </NavLink>
              <NavLink to="/category/buzos" className="nav-link m-2 px-5">
                Buzos
              </NavLink>
              <NavLink to="/category/camperas" className="nav-link m-2 px-5">
                Camperas
              </NavLink>
              <NavLink to="/category/gorros" className="nav-link m-2 px-5">
                Gorros
              </NavLink>
              <NavLink className="cart-widget m-2" to="/cart">
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
{
  /* <header className="navbar px-5">
      <Link className="logo" to="/">
        <h1>ClothStore</h1>
      </Link>
      <div id="basic-navbar-nav">
        <nav>
          <ul>
            <li>
              <Link className="link" to="/category/zapatillas">
                Zapatillas
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/buzos">
                Buzos
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/camperas">
                Camperas
              </Link>
            </li>
            <li>
              <Link className="link" to="/category/gorros">
                Gorros
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link className="link" to="/cart">
        <CartWidget />
      </Link>
    </header>
  ); */
}
