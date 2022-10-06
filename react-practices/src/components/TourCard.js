// import React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from '@mui/icons-material';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036_960_720.jpg"
          alt=""
          className=""
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            funciono funciono funciono xd
          </Typography>
          <Box
            sx={{
              display: "flex",
              alingItems: "center",
            }}
          >
            <AccessTime />
            <Typography variant="body2" component="p">
              5 Hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
