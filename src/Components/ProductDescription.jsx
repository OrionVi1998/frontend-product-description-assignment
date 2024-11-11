import {Paper, Typography} from "@mui/material";

export default function ProductDescription({product}) {

  return (
    <Paper sx={{paddingInline:2}}>
      <Typography>
        <div dangerouslySetInnerHTML={{__html: product.edito}}/>
      </Typography>
    </Paper>
  )
}