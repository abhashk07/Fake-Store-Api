import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Products from "./components/Products";
import Product from "./components/Product";
import { Switch, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Currency from './components/Currency'
import LoginPage from "./components/LoginPage";
import Star from "./components/Star";
import Pagination from "./components/Pagination";
import AddProductForm from "./components/AddProductForm";


function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar data={data} setData={setData} />
      <Routes>
        <Route path="/product" element={<Products data={data} setData={setData} />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart data={cartData} setData={setCartData} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<Product cartData={cartData} setCartData={setCartData} />} />
        <Route path="/currency" element={<Currency />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/star" element={<Star />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route path="/AddProductForm" element={<AddProductForm/>}></Route>
      </Routes>
    </>
  );
}

export default App;
