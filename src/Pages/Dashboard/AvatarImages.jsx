import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function AvatarImages() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    handleClose();
  };

  const handleProfile = () => {
    // Add your profile navigation logic here
    handleClose();
  };

  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar 
          alt="Remy Sharp" 
          src="/static/images/avatar/1.jpg" 
          onClick={handleClick} 
          style={{ cursor: 'pointer' }} 
        />
      </StyledBadge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          padding: 2,
          marginTop: '13px',
          '& .MuiMenu-paper': {
            width: 200,
            height: 'auto',
          },
        }}
      >
        <div style={{ padding: '10px 20px' }}>
          <Typography variant="h6" component="div">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            User Role
          </Typography>
        </div>
        <Divider />
        <MenuItem 
          onClick={handleProfile}
          sx={{ padding: '10px 20px' }}
        >
          Profile
        </MenuItem>
        <MenuItem 
          onClick={handleLogout}
          sx={{ padding: '10px 20px' }}
        >
          Edit Profile
        </MenuItem>
        <MenuItem 
          onClick={handleLogout}
          sx={{ padding: '10px 20px' }}
        >
          Index
        </MenuItem>
        <MenuItem 
          onClick={handleLogout}
          sx={{ padding: '10px 20px' }}
        >
          Message
        </MenuItem>
        <MenuItem 
          onClick={handleLogout}
          sx={{ padding: '10px 20px' }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
}
