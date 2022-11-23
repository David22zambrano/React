import * as React from "react";

import MuiAppBar from "../components/AppBar";
import TabComponent from "../components/Tabs";

import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box>
      <MuiAppBar />
      <TabComponent />
    </Box>
  );
};

export default Header;
