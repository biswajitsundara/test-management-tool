import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img src="./file.png" alt="" style={{width:'80px'}}/>
          &nbsp;
          <Typography variant="h6" color="inherit" component="div">
            Test Management Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}