import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  aspectRatio: 1,
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
    cursor: "pointer",
    "& .addIcon": {
      color: "purple",
    },
  },
}));

function Strikezone({ onZoneClick, zone }) {
  return (
    <Box>
      <Box sx={{ width: "100%"}}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 1, md: 2 }}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <Grid key={value} size={4}>
              <Item onClick={() => onZoneClick(value)} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Strikezone;
