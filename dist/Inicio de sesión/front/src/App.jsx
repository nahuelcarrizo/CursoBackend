import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/login/Logout.jsx";
import ProductForm from "./components/ProductForm";
import SignUp from "./components/signup/SignUp";
import SignUpFail from "./components/signup/SignUpFail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          {/*           <Route path="/login/fail" element={<LoginFail />}></Route> */}
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signup/fail" element={<SignUpFail />}></Route>
          <Route path="/home" element={<ProductForm />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
