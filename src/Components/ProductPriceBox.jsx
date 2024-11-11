import {Box, Paper} from "@mui/material";

export default function ProductPriceBox({product}) {
  return (
    <Box>
      <Paper>
        {product.globalRating.score}
      </Paper>
      <Paper>
        {product.summaryNewBestPrice}
      </Paper>
    </Box>
  )
}