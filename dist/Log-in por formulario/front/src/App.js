import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/session/login" element={<Login />}></Route>
          <Route path="/session/home" element={<ProductForm />}></Route>
          <Route path="/session/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
