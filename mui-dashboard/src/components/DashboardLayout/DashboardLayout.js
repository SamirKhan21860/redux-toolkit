import React from "react";
import { AppBar, Toolbar, Typography, Drawer, IconButton } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const DashboardLayout = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Dashboard
          </Typography>
          <IconButton onClick={handleDrawerOpen} size="large" edge="start">
            <MenuIcon/>
          </IconButton>
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <Sidebar />
          <NavigateBeforeIcon onClick={handleDrawerClose}/>
        </Drawer>
      </AppBar>
    </div>
  );
};

export default DashboardLayout;
