import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Circle = styled("div")({
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  backgroundColor: "grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function OutCounterDisplay(props) {
  const { outs } = props;

  console.log(outs)
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Circle className={(outs > 0 ? 'yellow-fill' : '')} />
      </Grid>
      <Grid item>
        <Circle className={(outs > 1 ? 'yellow-fill' : '')} />
      </Grid>
      <Grid item>
        <Circle className={(outs > 2 ? 'yellow-fill' : '')} />
      </Grid>
    </Grid>
  );
}

export default OutCounterDisplay;
