import { Box } from '@mui/material';
import React from 'react';
import { style } from './style';

const LeftSideBar = () => {
  return (
    <Box sx={style.marketplaceLeftSideBarContainer}>
      <Box>Search</Box>
      <Box>Category</Box>
    </Box>
  );
};

export default LeftSideBar;
