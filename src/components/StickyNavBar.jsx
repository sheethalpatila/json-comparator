import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const StickyNavBar = () => {
  return (
    <AppBar position="sticky" style={{backgroundColor:"#ffffff",padding:"5px"}} >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img style={{height:"70px",width:"70px"}} src={`${process.env.PUBLIC_URL}/smartcontrols.jpeg`} alt="companyLogo" />
          <Typography variant="h6" style={{color:"#000000",paddingLeft:"10px"}}>Json Comparator</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default StickyNavBar;
