import {Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import ImageContainer from "./IamgeContainer.jsx";
import ProductPriceBox from "./ProductPriceBox.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Header from "./Header.jsx";

export default function ProductPage({product}) {

  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      {matches ?
        <Header breadcrumbs={product.breadcrumbs}/> : ""
      }

      <Paper sx={{padding:2}}>
        <Typography variant={"h5"}>
          {product.cluster.clusterInfoDto.metaTitle}
        </Typography>
      </Paper>
      <Stack
        direction={matches ? 'row' : 'column'}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
        spacing={2}
      >
        <ImageContainer
          images={["https://kagi.com/proxy/image8-2.jpg?c=RBcaRbZuYJR2XEtIogB_tEMTOrtNvCn0Xm-Omo2WQA4ovVXMyWy5ZFFnMu6EBju7PJ6zU35H-vsSfy0Ked2bmn5xw5J7EL4RvTl2TK_H-snmOA7qevaunZso9L1RCpESqG_FGzSKo8IpiINKeyLeiQ%3D%3D", "https://kagi.com/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCISP25zWCPG6PLXcw7NGwlGr4v6GS4_GoeKh3HNKfJYvnJVEDqjdK1GtWm0MoMTbQkzRfTWBDjidv_ObNoRn9hjA%3D%3D"]}/>

        <ProductPriceBox product={product}></ProductPriceBox>
      </Stack>
      <ProductDescription product={product}/>
    </Stack>
  )
}