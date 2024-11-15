import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const BaseballDiamond = ({bases}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          backgroundColor: "#282c34",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            width: "140px",
            height: "140px",
            border: "2px solid black",
          }}
        />

        {/* Bases */}
        {/* Pitching mound */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "",
          }}
        />
        {/* Second Base */}
        <Box
          className="second-base"
          sx={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: bases.second ? "yellow" : "grey",
          }}
        />
        {/* Homeplate */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "",
          }}
        />
        {/* First Base */}
        <Box
          className="first-base"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: bases.first ? "yellow" : "grey",
          }}
        />
        {/* Third Base */}
        <Box
          className="third-base"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: bases.third ? "yellow" : "grey",
          }}
        />
      </Paper>
    </Box>
  );
};

export default BaseballDiamond;
