import React from "react";
// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./const/navbarItems";
import { navbarStyles } from "./styles";
import {useparams, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  const drawerWidth = 220;
  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((text, index) => (
          <ListItem button key={text.id}
          onClick= {() => navigate(text.route)} >
            <ListItemIcon sx={navbarStyles.icons}> {text.icon} </ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={text.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
