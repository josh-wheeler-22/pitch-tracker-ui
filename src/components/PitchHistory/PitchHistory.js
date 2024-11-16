import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function PitchHistory({ pitches, hitter }) {
  return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table ">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  backgroundColor: "#282c34",
                  color: "white",
                },
              }}
            >
              <TableCell>Hitter</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Zone</TableCell>
              <TableCell align="right">Outcome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pitches?.toReversed()?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  Player Name
                </TableCell>
                <TableCell component="th" scope="row">
                  0-0
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.pitchType}
                </TableCell>
                <TableCell align="right">{row.zone}</TableCell>
                <TableCell align="right">{row.outcome}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default PitchHistory;
