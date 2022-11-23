import React from "react";
import { Box, Menu, MenuItem, ListItemIcon, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import RepeatIcon from "@mui/icons-material/Repeat";

const MenuIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1}}>
    <IconButton
      aria-label="more"
      id="menu-button"
      color="inherit"

      aria-controls={open ? "basic-menu" : undefined}
      aria-expanded={open ? "true" : undefined}
      aria-haspopup="true"
      onClick={handleClick}
    >
      <MoreVertIcon fontSize="small" />
    </IconButton>
    <Menu 
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}

    >
        <MenuItem  onClick={handleClose}>
          <ListItemIcon>
            <RepeatIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">Cambiar empresa o sucursal</Typography>
        </MenuItem>
        <MenuItem  onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography  variant="body2">Cerrar sesion</Typography>
        </MenuItem>
      </Menu>
      </Box>
  );
};

export default MenuIcon;
