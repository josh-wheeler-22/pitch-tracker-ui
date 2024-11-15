import React from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function PitchHistory({ pitches }) {
  return (
    <Container sx={{ backgroundColor: "grey" }}>
      <TableContainer component={Paper} sx={{ backgroundColor: "grey" }}>
        <Table aria-label="simple table " sx={{ backgroundColor: "grey" }}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Zone</TableCell>
              <TableCell align="right">Outcome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pitches?.map((row, index) => (
              <TableRow key={index}>
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
    </Container>
  );
}

export default PitchHistory;
