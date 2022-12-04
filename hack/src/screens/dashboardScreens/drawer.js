import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getDatabase, ref, push, set,  onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { signoutuser } from '../../config/firebasemethod';
import { Button } from '@mui/material';
import TransportUser from './transportUsers';
import BookSeats from './bookSeats';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BookIcon from '@mui/icons-material/Book';


const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

useEffect(() => {
  signoutuser ()
}, [""])






  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List>
        {[
            {
            route: 'transportUsers',
            name: 'Transport Users',
            // icon: () => <DirectionsCarIcon/>,
        },
            {
            route: 'bookSeats',
            name: 'Book your Ride',
            // icon: () => <CircleNotificationsIcon/>,
        },
         
        ].map((e, index) => (
          <ListItem    key={index} disablePadding>
            <ListItemButton 
            onClick={ ()=>{
                navigate (e.route)
             } }>
              {/* <ListItemIcon>
                {text.icon()}
              </ListItemIcon> */}
               <ListItemIcon>
                {index % 2 === 0 ? <DirectionsCarIcon sx={{color:"blue"}} /> : <BookIcon sx={{color:"blue"}} />}
              </ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
let navigate = useNavigate();



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <div>
          <Link to="transportUsers"> </Link>
          <Link to="bookseats"> </Link>
          {/* <Link to="quiz"> </Link>
          <Link to="result"> </Link>
          <Link to="resultData"> </Link> */}
        </div>

        <Routes>
          <Route path="/*" element={<TransportUser/>} />
          <Route path="bookseats" element={<BookSeats/>} />
          {/* <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="resultData" element={<ResultData />} /> */}
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
