import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';

// Define the keyframes for rotation animation
const RotatingIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  padding: '8px',
  background: 'none',
  transition: 'background-color 0.3s',
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'rotate 2s linear infinite', // Apply rotation animation
}));

const SettingsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <RotatingIconButton onClick={handleClick}>
        <SettingsIcon />
      </RotatingIconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ marginTop: '13px' }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default SettingsMenu;
