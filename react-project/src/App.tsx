import * as React from "react";
import { Container, Grid, ThemeProvider, CssBaseline } from "@mui/material";

import Login from "./pages/login";
import Home from "./pages/home";
import { tema } from "./configuracion/configuracion";

function App() {
  return (
    <ThemeProvider theme={tema}>

        <CssBaseline />

        <Home />

        </ThemeProvider>

  );
}

export default App;
