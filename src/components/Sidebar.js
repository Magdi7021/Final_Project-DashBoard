import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import GroupIcon from "@mui/icons-material/Group";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PoemsContext from "../utils/PoemsContext";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PostAddIcon from '@mui/icons-material/PostAdd';
const drawerWidth = 240;

const Sidebar = () => {
  const { logout } = useContext(PoemsContext);
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AutoStoriesIcon/>
            </ListItemIcon>
            <ListItemText primary="My poems dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/poems">
            <ListItem button>
              <ListItemIcon>
                <HistoryEduIcon />
              </ListItemIcon>
              <ListItemText primary="poems" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/categories">
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="categories" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/poets">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="poets" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        {localStorage.tokenDashboardPoems ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/" onClick={logout}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
        
      </Drawer>
    </ThemeProvider>
  );
}

export default Sidebar;
