import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#282c34', 
        opacity: "60%",
        color: 'white', 
        py: 3,
        px: { xs: 2, sm: 4 }, 
        mt: 'auto' // Push footer to the bottom
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Pitch Tracker. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box display="flex" justifyContent="center" spacing={2}>
            {/* <Link href="#" color="inherit" underline="none">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="none">
              Contact
            </Link>
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;