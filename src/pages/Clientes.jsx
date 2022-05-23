import React, { useRef, useState,useEffect } from "react";
import { Alert, Container, Form, Table, Button } from "react-bootstrap";

const Cliente = () => {
  const form = useRef(null);


  const [cliente, setCliente] = useState([]);
  const [update, setUpdate] =useState("")

  useEffect(() => {
    const peticion = async () => {
      const res = fetch(`http://localhost:3000/api/cliente`);
      const clientes = (await res).json();

      const { body } = await clientes;
      console.log(body)
      setCliente(body);
      
    };

    peticion();
  }, [update]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      direccion: formData.get("direccion"),
    };
    console.log(data);
    
    setUpdate(data)

    const res = await fetch(`http://localhost:3000/api/cliente`, {
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
        <Form ref={form} className="m-5 w-50">
          <h5>Agregar Cliente</h5>

          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar nombre"
              name="nombre"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar apellido"
              name="apellido"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Direccion </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Direccion"
              name="direccion"
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
              <th>Nombre</th>
              <th>Apellido</th>
         
              <th>Direccion</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cliente.map((vend, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{vend.nombre}</td>
                <td>{vend.apellido}</td>
      
                <td>{vend.Direccion}</td>
                
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

export default Cliente;
