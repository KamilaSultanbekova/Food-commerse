import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FilterFruits from "./Pages/FilterFruits";
import FilterBeverages from "./Pages/FilterBeverages";
import Cart from "./Pages/Cart";
import Favourites from "./Pages/Favourites";
import Blog from "./Pages/Blog";
import Checkout from "./Pages/Checkout";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UpdateAcc from "./Pages/UpdateAcc";
import NotFound from "./Pages/NotFound";
import Vendor from "./Pages/Vendor";
import Crud from "./Pages/Crud";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filterfruits" element={<FilterFruits />} />
        <Route path="/filterbeverages" element={<FilterBeverages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateacc" element={<UpdateAcc />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
