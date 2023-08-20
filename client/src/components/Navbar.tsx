import {
  Box,
  AppBar,
  Typography,
  styled,
  alpha,
  InputBase,
  Toolbar,
  Button,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import { DarkMode, LightMode, SearchRounded } from "@mui/icons-material";
import icon from "../media/clonecommando.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

type NavbarHeader = {
  mode: { mode: string; toggleMode: any };
  loggedIn: { loggedIn: boolean; toggleLogin: any };
};

function Navbar({ mode, loggedIn }: NavbarHeader) {
  const theme = useTheme();
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button sx={{ color: "white" }} href="/">
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <img height={"40"} src={icon} alt="SWRC"></img>
              <Typography variant="h5" component="div">
                SWRC
              </Typography>
            </Stack>
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchRounded />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack direction={"row"} minWidth={120} justifyContent={"right"}>
            <IconButton onClick={mode.toggleMode}>
              {mode.mode === "dark" ? (
                <DarkMode sx={{ color: "white" }} />
              ) : (
                <LightMode sx={{ color: "white" }} />
              )}
            </IconButton>
            <Button
              sx={{ color: "primary.contrastText" }}
              onClick={loggedIn.toggleLogin}
            >
              {loggedIn.loggedIn ? "LOGOUT" : "LOGIN"}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
