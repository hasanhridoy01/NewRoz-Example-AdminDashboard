import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

// Create a styled MenuItem with conditional shadow
const StyledMenuItem = styled(MenuItem)(({ theme, active }) => ({
  ...(active && {
    boxShadow: `0 4px 8px ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.action.hover,
  }),
}));

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(null); // State for active menu item
  const open = Boolean(anchorEl);
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      file: "Document1.pdf",
      time: "2023-07-07 10:30 AM",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      file: "Image2.png",
      time: "2023-07-07 11:00 AM",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      file: "Report3.docx",
      time: "2023-07-07 11:30 AM",
      image: "https://via.placeholder.com/40",
    },
  ]); // Example messages; replace with your actual message source

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
    // Optionally, you could close the menu after clicking an item
    handleClose();
  };

  return (
    <div>
      {messages.length > 0 && (
        <Box sx={{ color: "action.active", cursor: "pointer" }}>
          <Badge
            color="success"
            variant="dot"
            overlap="circular"
            onClick={handleClick}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            
          >
            <NotificationsNoneIcon />
          </Badge>
        </Box>
      )}
      <Menu
        id="message-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "message-button",
        }}
        anchorOrigin={{
          vertical: "bottom", // Positioning the menu relative to the bottom of the button
          horizontal: "center", // Center the menu horizontally relative to the button
        }}
        transformOrigin={{
          vertical: "top", // Transform the menu so that its top aligns with the bottom of the button
          horizontal: "center", // Center the menu horizontally relative to the button
        }}
        PaperProps={{
          style: {
            marginTop: "22px", // Adjust the gap as needed
            padding: "9px",
            width: "300px",
            backgroundColor: "#f5f5f5", // Example background color
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "10px 16px 0px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#e0e0e0",
          }}
        >
          Notification
        </Typography>
        <Typography
          sx={{
            padding: "0px 18px 12px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#e0e0e0",
            fontSize: "12px",
          }}
        >
          You have {messages.length} Notification
        </Typography>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <StyledMenuItem
              key={message.id}
              onClick={() => handleMenuItemClick(index)}
              active={index === activeIndex} // Pass the active state
            >
              <Avatar
                alt={`Message ${message.id}`}
                src={message.image}
                sx={{ marginRight: 2 }}
              />
              <div>
                <Typography variant="body1">{`File: ${message.file}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`Time: ${message.time}`}</Typography>
              </div>
            </StyledMenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>No Notification</MenuItem>
        )}
      </Menu>
    </div>
  );
}
