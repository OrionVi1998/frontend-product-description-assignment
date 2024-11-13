import {Box, Button, Paper, Rating, Typography} from "@mui/material";

export default function ProductPriceBox({product}) {

  return (
    <Paper sx={{
      minWidth:"40vw",
      padding: 2
    }}>
      <Box>
        <Typography variant={"h5"}>
          {product.summaryNewBestPrice} €
        </Typography>
      </Box>
      <Box>
        <Rating name="read-only" value={product.globalRating.score} readOnly />
        <Typography variant="caption">
          ({product.globalRating.nbReviews})
        </Typography>
      </Box>
      <Button variant="contained" color={"success"}>
        <Typography>
          Add to cart
        </Typography>
      </Button>
    </Paper>
  )
}