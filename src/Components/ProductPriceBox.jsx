import {Box, Button, Paper, Rating, Stack, Typography, useMediaQuery} from "@mui/material";

export default function ProductPriceBox({product}) {
  const matches = useMediaQuery('(min-width:1000px)')

  return (
    <Paper sx={{
      padding: 2,
      minHeight: "inherit",
      minWidth: matches ? "40vw" : "90vw",
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