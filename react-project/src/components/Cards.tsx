import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Chip,
  IconButton,
  Button,
} from "@mui/material";

import TodayIcon from "@mui/icons-material/Today";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Cards = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="body2" color="primary.text">
          Acta de entrega Apto. 1705
        </Typography>
        <Stack
          id="card-header"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pt={1}
        >
          <Chip label="Confirmar recibido" />

          <Stack direction="row">
            <IconButton >
              <TodayIcon fontSize="small" />
            </IconButton>
            <Stack alignItems="flex-start">
              <Typography variant="caption"  >Vencimiento:</Typography>
              <Typography variant="caption">30/01/22</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          id="card-content"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pt={1}
        >
          <Stack direction="column">
            <Typography variant="caption" color="text.primary"> Proveedor </Typography>
            <Typography variant="caption" textTransform="uppercase" color="text.disabled">
              800140949-cafesalud
            </Typography>
          </Stack>
          <Stack alignItems="flex-start">
            <Button variant="outlined" color="primary">
              <ExpandMoreIcon />
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Cards;

