import './App.css'
import ProductPageDesktop from "./Components/ProductPageDesktop.jsx";
import productData from './assets/response2.json'
import {useState} from "react";

function App() {
  const [product,] = useState(
    productData.data
  )
  return (
    <>
      <ProductPageDesktop product={product}/>
    </>
  )
}

export default App
