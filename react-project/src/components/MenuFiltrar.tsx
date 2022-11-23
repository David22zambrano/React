import React from "react";
import {
  Chip,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MenuFiltrar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack>
      <Typography variant="body2">
        Filtrar
        <IconButton
          aria-label="more"
          id="menu-button"
          color="inherit"
          aria-controls={open ? "basic-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ExpandMoreIcon fontSize="small" />
        </IconButton>
      </Typography>
      <Menu
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography variant="body2" pl={1} color="primary.light">
          Actividad
        </Typography>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox></Checkbox>
          </ListItemIcon>
          <Typography variant="body2">Confirmar recibido</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox></Checkbox>
          </ListItemIcon>
          <Typography variant="body2">
            Redistribucion de correspondencia
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox></Checkbox>
          </ListItemIcon>
          <Typography variant="body2">
            Redistribucion de correspondencia
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox></Checkbox>
          </ListItemIcon>
          <Typography variant="body2">Confirmar recibido</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography variant="body2">Confirmar recibido</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography variant="body2">Confirmar recibido</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <Typography variant="body2">Confirmar recibido</Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default MenuFiltrar;
