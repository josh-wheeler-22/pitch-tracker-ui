import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircle from "@mui/icons-material/AccountCircle";

function PitcherDisplay({ pitcher }) {
  const [rows, setRows] = useState([
    { name: 'John', hand: 'Right' },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { name: '', hand: '' }]);
  };

  const handleDeleteRow = (name) => {
    setRows(rows.filter(row => row.name !== name));
  };

  const handleInputChange = (id, field, value) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid>
              <Typography variant="h6" component="div" sx={{ color: "#282c34" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "282c34", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label=""
                    placeholder="name"
                    variant="standard"
                  />
                </Box>
              </Typography>
              <br/>
              <Typography variant="h6" component="div" sx={{ color: "#282c34" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "#282c34", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label=""
                    placeholder="pitcher name"
                    variant="standard"
                  />
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ color: "#282c34" }}>
            <TableCell>Lineup</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ color: "#282c34" }}>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                <input 
                  value={row.name} 
                  onChange={e => handleInputChange('name', e.target.value)} 
                />
              </TableCell>
              <TableCell>
                <Button sx={{ color: "#282c34" }} onClick={() => handleDeleteRow(row.name)}><DeleteIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button sx={{ color: "#282c34" }} onClick={handleAddRow}>Add Row</Button>
    </TableContainer>
    </Container>
  );
}

export default PitcherDisplay;
