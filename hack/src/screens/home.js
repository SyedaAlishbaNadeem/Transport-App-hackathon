// import React from 'react'



// export default function Home() {
//   return (
//     <div>
//       <>
   

//       </>

//     </div>
//   )
// }

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import MainDraw from "./mainDraw";
import Snaps from './snaps';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Bookingforms from './bookingforms';
import Getrides from './getrides';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  let gogo = () => {
    navigate('/sign');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          WELCOME TO OUR TRANSPORT APP
          </Typography>

        

          <Typography variant="h6" noWrap component="div">
            <AccountCircle className = "ms-4"  
            onClick = {gogo}
            />
          </Typography>
       
        </Toolbar>
      </AppBar>

     


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

<List>
        {[ {
            route: 'bookingform',
            name: 'Booking form',
            // icon: () => <ForumIcon/>,
        },  
        
            {
            route: 'mainDraw',
            name: 'Prices',
            // icon: () => <ForumIcon/>,
        },
            {
            route: 'getrides',
            name: 'Get your ride',
            // icon: () => <ForumIcon/>,
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>









              
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
       
        <div>
           <Link to="bookingform"> </Link>
          <Link to="mainDraw"> </Link>
          <Link to="snaps"> </Link>
          <Link to="getrides"> </Link>
         
          
        </div>

        <Routes>

         <Route path="bookingform" element={<Bookingforms/>}/>
          <Route path="mainDraw" element={<MainDraw/>}/>
          <Route path="/" element={<Snaps/>}/>
          <Route path="getrides" element={<Getrides/>}/>
         
        </Routes>










      </Main>
    </Box>
  );
}
