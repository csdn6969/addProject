import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCategories } from "./services/Api";
import Header from "./component/Layout/Header";
import Home from "./pages/Home";
import Footer from "./component/Layout/Footer";
import ProductDetails from "./pages/productDetails";
import Slider from "./component/Layout/Slider";
const App = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(()=>{
    getCategories({}).then(({data})=>{
      return setCategories(data.data.docs);
    })
  },[])
  return (
    <>
      <BrowserRouter>
        <Header item={categories} />
        <Slider />
        <ProductDetails/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productDetails:-id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App