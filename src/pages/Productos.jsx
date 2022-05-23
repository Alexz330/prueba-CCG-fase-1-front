import React, { useRef, useState, useEffect } from "react";
import { Alert, Container, Form, Table, Button } from "react-bootstrap";

const Productos = () => {
  const form = useRef(null);

  const [productos, setProductos] = useState([]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    const peticion = async () => {
      const res = fetch(`http://localhost:3000/api/producto`);
      const producto = (await res).json();

      const { body } = await producto;
      console.log(body);
      setProductos(body);
    };

    peticion();
  }, [update]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      nombre: formData.get("nombre"),
      descripcion: formData.get("descripcion"),
      precio: formData.get("precio"),
      
    };
    console.log(data);

    setUpdate(data);

    const res = await fetch(`http://localhost:3000/api/producto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Container>
      <Alert className="f2" variant="light">
        <h1 className="">Bienvenido</h1>
      </Alert>
      <div className="d-flex">
        <Form ref={form} className="m-5">
          <h5>Agregar tarea</h5>

          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar titulo"
              name="nombre"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              name="descripcion"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="descripcion"
              name="precio"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Agregar
          </Button>
        </Form>
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>nombre</th>
              <th>Descripcion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((tarea, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{tarea.nombre}</td>
                <td>{tarea.descripcion}</td>
                <td>
                  {" "}
                  <Button variant="success" onClick="">
                    Actualizar
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" onClick="">
                    Borrar
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Productos;
