import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <ToolBar>
          <Typography variant="title" color="inherit">
            Weather Pocket
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
