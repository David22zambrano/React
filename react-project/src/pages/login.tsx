import React from "react";

import SGDLogo from "../images/SGD-logo";
import BySincoLogo from "../images/BySinco-logo";
import {
  Paper,
  Grid,
  Container,
  TextField,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt={2}
        xs={12}
      >
        <Paper elevation={0}>
          <Stack
            spacing={1}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box  >
              <SGDLogo />
            </Box>
            <Typography variant="body2" color="primary.dark">
              Sistema de gestión documental
            </Typography>
          </Stack>

          <Stack
            display="flex"
            alignItems="center"
            justifyContent="center"
            spacing={6}
            pt={8}
            width={315}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
            >
              <Stack spacing={4}>
                <TextField
                  label="Usuario"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  required
                />

                <TextField
                  label="Contraseña"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  required
                />
              </Stack>
            </Box>
            <Button variant="contained" size="large" color="primary">
              Ingresar
            </Button>
            <Box>
              <BySincoLogo />
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
