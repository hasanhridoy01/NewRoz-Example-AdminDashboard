import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { InputAdornment, Menu, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PagesIcon from "@mui/icons-material/Pages"; // Import Pages Icon
import FormatIndentIncreaseSharpIcon from "@mui/icons-material/FormatIndentIncreaseSharp"; // Import Forms Icon
import TableChartIcon from "@mui/icons-material/TableChart"; // Import Tables Icon
import MapIcon from "@mui/icons-material/Map"; // Import Maps Icon
import Flag from "react-world-flags";
import Message from "./Message";
import Notifications from "./Notification";
import AvatarImages from "./AvatarImages";
import SettingsMenu from "./Settings";
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import CrisisAlertSharpIcon from '@mui/icons-material/CrisisAlertSharp';

const drawerWidth = 240;

const flagStyle = {
  width: "24px",
  height: "19px", // Rounded flag
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const iconMap = {
  Dashboard: <DashboardIcon />,
  Pages: <PagesIcon />,
  Forms: <FormatIndentIncreaseSharpIcon />,
  Tables: <TableChartIcon />,
  Maps: <MapIcon />,
  Loading: <RestartAltSharpIcon />,
  Utilities: <CrisisAlertSharpIcon />,
};

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState("Dashboard");

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Flag section
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState("FR");

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (countryCode) => {
    setSelectedCountry(countryCode);
    handleClose();
  };

  // Render content based on selectedTab
  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <Typography>Dashboard Content</Typography>;
      case "Pages":
        return <Typography>Pages Content</Typography>;
      case "Forms":
        return <Typography>Forms Content</Typography>;
      case "Tables":
        return <Typography>Tables Content</Typography>;
      case "Maps":
        return <Typography>Maps Content</Typography>;
      case "Loading":
        return <Typography>Loading Content</Typography>;
      case "Utilities":
        return <Typography>Utilities Content</Typography>;
      default:
        return <Typography>Select a tab</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <IconButton
              color="gray"
              aria-label="toggle drawer"
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
              }}
            >
              {open ? (
                theme.direction === "rtl" ? (
                  <MenuOpenIcon />
                ) : (
                  <MenuOpenIcon />
                )
              ) : (
                <MenuIcon />
              )}
            </IconButton>
            <TextField
              placeholder="Search for anything..."
              variant="outlined"
              sx={{
                backgroundColor: "#ECF0FA",
                borderRadius: "23px",
                marginLeft: 2,
                marginRight: 0,
                width: "350px",
                color: "gray",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "& .MuiInputBase-input": {
                    height: "23px",
                    padding: "8px",
                    paddingLeft: "15px",
                    fontSize: "14px",
                    color: "gray",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "gray", fontSize: "20px" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <IconButton onClick={handleClick} style={{ padding: 0 }}>
                <Flag code={selectedCountry} style={flagStyle} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  style: {
                    marginTop: "22px",
                    padding: "8px",
                  },
                }}
              >
                <MenuItem onClick={() => handleSelect("FR")}>
                  <Flag code="FR" style={flagStyle} />
                  <span style={{ marginLeft: "9px" }}>France</span>
                </MenuItem>
                <MenuItem onClick={() => handleSelect("DE")}>
                  <Flag code="DE" style={flagStyle} />
                  <span style={{ marginLeft: "9px" }}>Germany</span>
                </MenuItem>
                <MenuItem onClick={() => handleSelect("IT")}>
                  <Flag code="IT" style={flagStyle} />
                  <span style={{ marginLeft: "9px" }}>Italy</span>
                </MenuItem>
                <MenuItem onClick={() => handleSelect("ES")}>
                  <Flag code="ES" style={flagStyle} />
                  <span style={{ marginLeft: "9px" }}>Spain</span>
                </MenuItem>
              </Menu>
            </div>
            <div style={{ marginLeft: "25px", marginRight: "10px" }}>
              <Message />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Notifications />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <AvatarImages />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <SettingsMenu />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginLeft: "11px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <DashboardIcon
              sx={{ fontSize: 24, color: "gray", marginRight: 1 }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "400", fontStyle: "italic", color: "gray" }}
            >
              Dashboard
            </Typography>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Pages",
            "Forms",
            "Tables",
            "Maps",
            "Loading",
            "Utilities",
          ].map((text) => (
            <ListItem disablePadding sx={{ display: "block" }} key={text}>
              <ListItemButton
                onClick={() => setSelectedTab(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {iconMap[text]}
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 5, backgroundColor: "#ECF0FA", height: "100vh" }}
      >
        <DrawerHeader />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
