import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Entrada from "./Entrada";
import Saida from "./Saida";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/entrada" element={<Entrada />} />
      </Routes>
    </BrowserRouter>
  );
}
