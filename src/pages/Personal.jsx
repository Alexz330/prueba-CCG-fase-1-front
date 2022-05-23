import React from "react";
import { Alert, Container, Form, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Personal = () => {
  const navi = useNavigate();
  return (
    <div>
 
      <Container className="m-5">
        <Button onClick={() => navi("vendedor")}>INGRESAR Vendedor</Button>
        <br />
        <br />

        <Button onClick={() => navi("supervisor")}>INGRESAR supervisor</Button>
      </Container>
    </div>
  );
};

export default Personal;
