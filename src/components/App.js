import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import Entrada from "./Entrada";
import Saida from "./Saida";
import GlobalStyle from "./globalStyles";
import UserContext from "../context/UserContext";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [userData, setUserData] = React.useState();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/saida" element={<Saida />} />
          <Route path="/entrada" element={<Entrada />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
