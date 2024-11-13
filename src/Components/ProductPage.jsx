import {Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import ImageContainer from "./IamgeContainer.jsx";
import ProductPriceBox from "./ProductPriceBox.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Header from "./Header.jsx";

export default function ProductPage({product}) {


  console.log(product)

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      <Header breadcrumbs={product.breadcrumbs}/>

      <Paper sx={{padding: 2}}>
        <Typography variant={"h5"}>
          {product.cluster.clusterInfoDto.metaTitle}
        </Typography>
      </Paper>

      <ImageContainer
        images={
          product.imagesUrls
        }/>

      <ProductPriceBox product={product}></ProductPriceBox>

      <ProductDescription product={product}/>
    </Stack>
  )
}