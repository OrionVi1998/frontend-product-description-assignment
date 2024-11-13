import ProductPage from "./Components/ProductPage.jsx";
import productData from './assets/response2.json'
import {useState} from "react";

function App() {
  const [product,] = useState(
    productData.data
  )
  return (
    <>
      <ProductPage product={product}/>
    </>
  )
}

export default App
