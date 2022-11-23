import React from "react";
import { Tabs, Tab, Box, Paper} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const TabComponent = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box width="100%" >
      <Paper elevation={8} >
      <Tabs
        variant="fullWidth"
        aria-label="full width tabs example"
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        
      >
        <Tab   
          icon={<PersonOutlineOutlinedIcon fontSize="small" />}
          iconPosition="start"
          value="one"
          label="Asignadas a mi"
          
        />
        <Tab
          icon={<WorkOutlineOutlinedIcon fontSize="small" />}
          iconPosition="start"
          value="two"
          label="Para mi cargo"
        />
      </Tabs>
      </Paper>
    </Box>
  );
};

export default TabComponent;
