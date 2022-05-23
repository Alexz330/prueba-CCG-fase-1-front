import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Aplicacion de prueba
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/personal">
            Personal
          </Nav.Link>

          <Nav.Link as={Link} to="/Productos">
            Productos
          </Nav.Link>

          <Nav.Link as={Link} to="/Pedidos">
            Pedidos
          </Nav.Link>

          <Nav.Link as={Link} to="/Clientes">
            clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/Reportes">
            clientes
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
