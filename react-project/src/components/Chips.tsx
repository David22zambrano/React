import React from "react";
import { Chip, Stack } from "@mui/material";

import MenuFiltrar from "./MenuFiltrar";

const Chips = () => {
  return (
    <>
    <Stack direction="row" py={1} px={1} justifyContent="space-between">
      <Stack direction="row" spacing={1}>
        <Chip label="Todas" variant="outlined" color="primary" />
        <Chip label="Vencidas" variant="outlined" color="primary" />
        <Chip label="Actuales" variant="outlined" color="primary" />
      </Stack>
      <Stack>
        <MenuFiltrar />
      </Stack>
    </Stack>
    </>
  );
};

export default Chips;
