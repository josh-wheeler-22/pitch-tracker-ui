import React from "react";
import Container from "@mui/material/Container";
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
                  color: "rgba(96, 96, 96)",
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
            {pitches?.reverse()?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  t
                </TableCell>
                <TableCell component="th" scope="row">
                  tt
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
