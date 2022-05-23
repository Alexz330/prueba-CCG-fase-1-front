import React, { useEffect, useState, useRef } from "react";
import {
  Alert,
  Container,
  Form,
  Table,
  Button,
  Dropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router";
const Pedidos = () => {
  const form = useRef(null);
  const [supervisor, setsupervisor] = useState([]);
  const [vendedor, setVendor] = useState([]);
  const [producto, setProducto] = useState([]);
  const [cliente, setCliente] = useState([]);

  const dataSubmit = [];
  
  useEffect(() => {
    (async () => {
      setsupervisor(await myFetch("http://localhost:3000/api/supervisor"));
      setVendor(await myFetch("http://localhost:3000/api/vendedor"));
      setProducto(await myFetch("http://localhost:3000/api/producto"));
      setCliente(await myFetch("http://localhost:3000/api/cliente"));
    })();
  }, []);

  

  return (
    <Form ref={form}>
      <Container className="m-5 d-flex">
        <h3>Realizar pedidio Seleccionando una los camppos</h3>

        <Dropdown className="m-5 ">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Supervisor
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {supervisor.map((data, index) => (
              <Dropdown.Item onClick='' key={`supervisor-${index}`}>
                {data.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="m-5 ">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            vendedor
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {vendedor.map((data, index) => (
              <Dropdown.Item href={`#/action-${index}`} key={`vendedor-${index}`}>
                {data.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="m-5 ">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            producto
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {producto.map((data, index) => (
              <Dropdown.Item href={`#/action-${index}`} key={`producto-${index}`}>
                {data.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-5 ">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            cliente
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cliente.map((data, index) => (
              <Dropdown.Item href={`#/action-${index}`} key={`cliente-${index}`}>
                {data.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container>
        <Button>Ingresar Registro </Button>
      </Container>
    </Form>
  );
};

export default Pedidos;

const myFetch = async (API) => {
  const res = fetch(API);
  const data = (await res).json();
  const { body } = await data;

  return body;
};
