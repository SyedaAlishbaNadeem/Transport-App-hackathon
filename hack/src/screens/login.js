// import React from 'react'
// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { loginUser } from '../config/firebasemethod';
// import { useNavigate } from 'react-router-dom';





// export default function Login() {
//     let [email, setEmail] = useState("");
//     let [password, setPassword] = useState("");
// let navigate = useNavigate();

// let login = () => {
//  loginUser({email, password})
 
//  .then((data)=>{
//   navigate('/drawer')
//     console.log(data);    

//     })
//     .catch((error)=>{
//     console.log(error);
//     alert("Hey you are not admin");
//     })
// }



//   return (
//     <div>
// <>



// <TextField
//                 margin="normal"
//                 required
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value = {email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

// <TextField
//                 margin="normal"
//                 required
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value = {password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

// <br/>

//                <button
//                   className="btn btn-primary"
//                   type="submit"
//                   sx={{ mt: 3, mb: 2 }}
//                   onClick={login}
//                 >
//         LOGIN
//                 </button>


// </>




      
//     </div>
//   )
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from 'react-router-dom';
import { loginUser } from '../config/firebasemethod';
import { CircularProgress } from '@mui/material';
import { useState } from "react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {


  let [email, setEmail] = React.useState("");
      let [password, setPassword] = React.useState("");
  let navigate = useNavigate();
  const [isLoading, setLoader] = React.useState(false)
  
  let login = () => {
    setLoader(true);
   loginUser({email, password})
   
   .then((data)=>{
    navigate('/drawer')
    setLoader(false);
      console.log(data);    
  
      })
      .catch((error)=>{
        setLoader(false);
      console.log(error);
      alert("Hey you are not admin");
      })
  }
  











  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value = {email}
                 onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}                     
              />


              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}


              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button> */}


{ isLoading ? <CircularProgress/>:
 <button
              className=" btn btn-primary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled = {isLoading}
                onClick = {login}
              >
                Login
              </button> }





              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
             onClick={()=> navigate('/sign')} >

           Go to Sign in if you are new user
              </Button>










              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


