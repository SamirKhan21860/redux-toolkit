import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// ... (import more components if needed)
import React from "react";

const Sidebar = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>Icon</ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
