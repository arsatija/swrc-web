import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import "../styles/App.css";
import Navbar from "./Navbar";
import { dark, light } from "../Themes/Theme";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Index() {
  const darkTheme = createTheme(dark);
  const lightTheme = createTheme(light);

  const [mode, setMode] = useState("dark");
  const [loggedIn, setLogin] = useState(false);

  const toggleMode = () => {
    if (mode === "dark") setMode("light");
    else setMode("dark");
  };

  // this is just for testing purposes, will be replaced by actual login logic
  const toggleLogin = () => {
    loggedIn ? setLogin(false) : setLogin(true);
  };
  const drawerWidth = 240;

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex", height: "inherit", width: "inherit" }}>
        <CssBaseline />
        <Navbar
          mode={{ mode, toggleMode }}
          loggedIn={{ loggedIn, toggleLogin }}
        />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Maps", "Mods", "Stats"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton href={"/" + text}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Stack sx={{ width: "100%", height: "100%" }}>
          <Toolbar />
          <Outlet />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Index;
