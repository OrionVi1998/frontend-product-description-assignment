import {
  AppBar,
  Box,
  Breadcrumbs, InputBase,
  Link,
  Paper, Stack,
  styled,
  Toolbar,
  Typography, useMediaQuery
} from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: "8px",
  backgroundColor: theme.palette.common.white
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.black
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: theme.palette.common.black,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`
  },
}));

export default function Header({breadcrumbs}) {

  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <AppBar
      position={"sticky"}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          '@media all': {
            minHeight: matches ? "" : "auto",
          },
          padding:1
        }}
      >
        <Stack
          direction={matches ? "row" : "column"}
          spacing={1}
        >
          <Paper
            sx={{
              padding: 1
            }}
            elevation={0}
          >
            {breadcrumbs ?
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small"/>}
              >
                {breadcrumbs.map(b =>
                  (<Link key={b.label}>
                    <Typography>
                      {b.label}
                    </Typography>
                  </Link>))}
              </Breadcrumbs>
              : ""}
          </Paper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
        </Stack>
        {matches ?
          <Box>
            <Typography>
              Icon
            </Typography>
          </Box>
          : ""}

      </Toolbar>
    </AppBar>
  )
}