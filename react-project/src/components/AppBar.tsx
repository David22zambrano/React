import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import SearchBar from "./SearchBar";
import Menu from "./MenuLogout";
import TabComponent from "./Tabs";

const MuiAppBar = () => {
  return (
    <Box flexGrow={1} >
        <AppBar color="primary" position="static">
          <Toolbar>
            <SearchBar />
            <Menu />
          </Toolbar>
        </AppBar>
    </Box>
  );
};

export default MuiAppBar;
