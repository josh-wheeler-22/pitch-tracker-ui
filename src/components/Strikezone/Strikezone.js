import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function Strikezone({ setZone, zone }) {
  const theme = useTheme();
  console.log(zone);
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Grid container>
        {Array.from(Array(3)).map((_, rowIndex) => (
          <Grid container item xs={12} key={rowIndex}>
            {Array.from(Array(3)).map((_, colIndex) => (
              <Grid
                onClick={() => setZone(rowIndex + "." + colIndex)}
                item
                xs={4}
                key={colIndex}
                sx={{
                  border: "1px solid black",
                  height: 200,
                  width: 10,
                  background: zone === rowIndex + "." + colIndex ? "yellow" : "grey",
                  "&:hover": {
                    backgroundColor: theme.palette.grey[100],
                    cursor: "pointer",
                    "& .addIcon": {
                      color: "purple",
                    },
                  },
                }}
              >
                {rowIndex}.{colIndex}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Strikezone;
