import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#282c34", opacity: "60%" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Pitch Tracker
        </Typography>
        <Button color="inherit">Home</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
