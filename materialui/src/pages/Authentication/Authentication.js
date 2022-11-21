import React from "react";
import Grid from "@mui/material/Grid";
import CommonBotton from "../../components/Navbar/common/comoonButton/CommonBotton";

const Authentication = () => {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };
  return (
    <Grid item xs={8 }>
      This is authentication page.
      <CommonBotton variant="contained" sx={buttonStyles}>
        Add user
      </CommonBotton>
      <CommonBotton variant="outline" sx={buttonStyles}>
        Delete user
      </CommonBotton>
    </Grid>
  );
};

export default Authentication;
