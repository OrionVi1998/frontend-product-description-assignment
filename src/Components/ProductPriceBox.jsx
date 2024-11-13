import {Box, Button, Paper, Rating, Stack, Typography,} from "@mui/material";

export default function ProductPriceBox({product}) {

  return (
    <Paper sx={{
      padding: 2,
      minWidth: "60vw",
    }}>
        <Stack
          direction={"row"}
          minHeight={"inherit"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Box>
              <Typography variant={"h5"}>
                {product.summaryNewBestPrice} €
              </Typography>
            </Box>
            <Box>
              <Rating name="read-only" value={product.globalRating.score} readOnly/>
              <Typography variant="caption">
                ({product.globalRating.nbReviews})
              </Typography>
            </Box>
          </Box>

          <Box>
            <Button variant="contained" color={"success"}>
              <Typography>
                Add to cart
              </Typography>
            </Button>
          </Box>

        </Stack>
    </Paper>
  )
}