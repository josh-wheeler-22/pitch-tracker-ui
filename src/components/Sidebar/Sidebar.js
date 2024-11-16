import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Button } from "@mui/material";

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div>
      <Drawer anchor="left" open={isOpen} hideBackdrop>
        <List>
          <ListItem button>
            <ListItemText primary="Pitch Tracker" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
