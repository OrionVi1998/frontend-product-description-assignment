import ProductPage from "./Components/ProductPage.jsx";
import {useEffect, useState} from "react";
import {CircularProgress, Paper, Typography} from "@mui/material";

function App() {
  const [product, setProduct] = useState(false)
  const [loaded, setLoading] = useState(true)

  useEffect(() => {
    const productUrl = "https://rakuten-vis-internsip-test-api.koyeb.app/product/" + "13060247469"
    const request = fetch(productUrl, {
      method: "GET",
      referer: "https://fr.shopping.rakuten.com"
    })
    request
      .then(response => response.json())
      .then(
        (response) => {
          setProduct(response.data)
        }
      )
      .then(() => setLoading(false))
  }, [])

  return (
    <>
      {loaded ?
        <div style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          top: 0,
          left: "0"
        }}>
          <CircularProgress/>
        </div>
        :
        product ?
          <ProductPage product={product}/>
          :
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              left: "0"
            }}
          >
            <Paper
              elevation={0}
              padding={2}>
              <Typography
                variant={"h3"}
              >
                There was an error loading the product place try again later...
              </Typography>
            </Paper>
          </div>
      }
    </>
  )
}

export default App
