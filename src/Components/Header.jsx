import {AppBar, Breadcrumbs, Link, Toolbar} from "@mui/material";

export default function Header() {
  return (
    <AppBar style={{backgroundColor: 'blue'}}>
      <Toolbar>
        My header
      </Toolbar>
      <Breadcrumbs>
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>Product name</Link>
      </Breadcrumbs>
    </AppBar>
  )
}