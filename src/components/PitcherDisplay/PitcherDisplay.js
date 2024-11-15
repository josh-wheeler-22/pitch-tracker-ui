import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';

function PitcherDisplay({ pitcher }) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <Card sx={{ backgroundColor: 'grey'}}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h6" component="div" sx={{ color: "blue" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  disabled={!isEditing}
                  id="input-with-sx"
                  label=""
                  placeholder="name"
                  variant="standard"
                />
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            {isEditing ? (
              <Button variant="text" onClick={() => setIsEditing(false)}>
                <SaveIcon />
              </Button>
            ) : (
              <Button variant="text" onClick={() => setIsEditing(true)}>
                <EditIcon />
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PitcherDisplay;
