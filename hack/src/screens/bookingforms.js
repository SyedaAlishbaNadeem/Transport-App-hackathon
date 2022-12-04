import { Box, Button, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
// import BasicDatePicker from '../components/date';
import Mydropdown from '../components/mydropdown';
import Myinput from '../components/myinput';
import { sendData } from '../config/firebasemethod';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';





export default function Bookingforms() {


  const [model, setModel] = useState({});
     let navigate = useNavigate();




  //FUNCTIONS.......


  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model});
    console.log(model);
  };


//SEND AND GET DATA OF STUDENT TO THE DATABASE

let addStuser = () => {
  sendData ({...model},"Stusers");
  setModel("");
}




  return (
    <div>
      <>
      

        <h1> Transport Booking Form </h1>

       <Container maxWidth = "sm" sx={{ textAlign: "center" , backgroundColor: "lightBlue", borderRadius: "5px" }}>
        <br/>
          <Grid container  sx={{ textAlign: "center" }}  >
            <Grid item md={12}  sx={{ textAlign: "center" }}  >
              <Myinput
              required = {true}
                label="Email"
                value={model.email}
                onChange={(e) => {
                  fillModel("email", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>
<br/>
          <Grid container  sx={{ textAlign: "center" }}  >
            <Grid item md={12}  sx={{ textAlign: "center" }}  >
              <Myinput
              required = {true}
                label="Time"
                type = "time"
                value={model.password}
                onChange={(e) => {
                  fillModel("password", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>
<br/>

          <Grid container  sx={{ textAlign: "center" }}  >
            <Grid item md={12}  sx={{ textAlign: "center" }}  >
              <Myinput
         
              required = {true}
                label="firstname"
                value={model.firstName}
                onChange={(e) => {
                  fillModel("firstname", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>
         
<br/>
          <Grid container>
            <Grid item md={12} className = 'mb-3' >
              <Myinput
                label="lastname"
                value={model.lastName}
                onChange={(e) => {
                  fillModel("lastname", e.target.value);
                }}
              />
            </Grid>
          </Grid>
 <br/> 
          <Grid container>
            <Grid item md={12}>
              <Mydropdown
                label="Transport type"
                onChange={(e) => {
                  fillModel("transporttype", e.target.value);
                }}

                datasource={[
                  {
                    id: "Road Transportation",
                    fullName: "Road Transportation",
                  },
                  {
                    id: "Maritime Transportation",
                    fullName: "Maritime Transportation",
                  },
                  {
                    id: "Air Transportation",
                    fullName: "Air Transportation",
                  },
                  {
                    id: "Rail Transportation",
                    fullName: "Rail Transportation",
                  },
                  {
                    id: "Intermodal Transportation ",
                    fullName: "Intermodal Transportation ",
                  },
                ]}

              />
            </Grid>
          </Grid>


<br/>

          <Grid container>
            <Grid item md={12}>
              <Mydropdown
                label="Routes"
                onChange={(e) => {
                  fillModel("Routes", e.target.value);
                }}

                datasource={[
                  {
                    id: "Karachi",
                    fullName: "Karachi",
                  },
                  {
                    id: "Lahore",
                    fullName: "Lahore",
                  },
                  {
                    id: "Islamabad",
                    fullName: "Islamabad",
                  },
                  {
                    id: "Quetta",
                    fullName: "Quetta",
                  },
                  {
                    id: "Peshawar",
                    fullName: "Peshawar",
                  },
                ]}

              />
            </Grid>
          </Grid>
<br/>

          <Grid container>
            <Grid item md={12}>
              <Myinput
                label="contact"
                value={model.Contact}
                type = "number"
                onChange={(e) => {
                  fillModel("Contact", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>
<br/>
          <Grid container>
            <Grid item md={12}>
              <Myinput
                label="cnic"
                value={model.Cnic}
                type = "number"
                onChange={(e) => {
                  fillModel("Cnic", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>





        
<br/>

          <Grid container>
            <Grid item md={12}>
              <Myinput
                label="EmergencyConatct"
                value={model.EmergencyConatct}
                type = "number"
                onChange={(e) => {
                  fillModel("EmergencyConatct", e.target.value);
                  //FIRST NAME IS MODEL KEY , AND VALUE IS VAL
                }}
              />
            </Grid>
          </Grid>
          

         <br/> </Container>
<br/>
         

     

        <Button variant="contained" onClick={addStuser}   >Submit</Button>

      </>
    </div>
  );
};
