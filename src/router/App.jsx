import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";

import Layout from "../container/Layout";

import Personal from "../pages/Personal";
import Productos from "../pages/Productos";
import Pedidos from "../pages/Pedidos";
import Clientes from "../pages/Clientes";
import Reportes from "../pages/Reportes";
import FormVendedor from "../components/FormVendedor";
import FormSupervisor from "../components/FormSupervisor";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exac path="/home" element={<Home />} />

          <Route exac path="/personal" element={<Personal />} />
          <Route exac path="/personal/vendedor" element={<FormVendedor />} />
          <Route
            exac
            path="/personal/supervisor"
            element={<FormSupervisor />}
          />

          <Route exac path="/Productos" element={<Productos />} />
          <Route exac path="/Pedidos" element={<Pedidos />} />
          <Route exac path="/Clientes" element={<Clientes />} />
          <Route exac path="/Reportes" element={<Reportes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
