import { Button, Grid, Table, TableBody, TableCell, TableHead } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Myinput from "../../components/myinput";

import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { sendData } from "../../config/firebasemethod";
import Mybutton from "../../components/mybutton";





export default function BookSeats() {
  const [myCourse, setMyCourse] = useState({});
  let navigate = useNavigate();
  const [list, setList] = useState([]);
let [atrainer, setAtrainer] = useState("");
let [trainerArray, setTrainerArray] =  useState([]);








  //GET THE VALUES READY TO SEND IN THE FIREBASE
  let fillCourse = (key, value) => {
    myCourse[key] = value;
    setMyCourse({ ...myCourse});
    console.log(myCourse);
  };


//   let addAssistant = () => {
//   setTrainerArray ([...trainerArray, atrainer] );
// console.log(trainerArray);
//   setAtrainer("");
// }




  //SEND DATA IN FIREBASE
  let addBooking = () => {
sendData({...myCourse }, "Bookseats");
  };




  //GET DATA ON THE PAGE
  let getBookingData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "Bookseats/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setList([...Object.values(data)]);
    });
  };

  useEffect(() => {
    getBookingData();

    // setData();
  }, []);


  let dlt = (i, x)=>{
    list.splice(i,1)
    setList([...list]);
    }


  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Myinput
          label="Transport Type"
          type="text"
          //obj.key
          value={myCourse.transporttypess}
          //obj.key.value 
          onChange={(e) => fillCourse("transporttypess", e.target.value)}
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Myinput
          label="Seats Available"
          type="number"
          value={myCourse.seats}
          onChange={(e) => fillCourse("seats", e.target.value)}
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Myinput
          label="Time"
          type="time"
          value={myCourse.time}
          onChange={(e) => fillCourse("time", e.target.value)}
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Myinput
          label="Route"
          type="text"
          value={myCourse.route}
          onChange={(e) => fillCourse("route", e.target.value)}
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Myinput
          label="Price"
          type="number"
          value={myCourse.fees}
          onChange={(e) => fillCourse("fees", e.target.value)}
        />
      </Box>

      {/* <Box sx={{ padding: 2 }}>
        <Myinput
          label="Assistent Trainer"
          type="text"
          value={atrainer}
          onChange={(e) => setAtrainer(e.target.value)}
        />
        {trainerArray && trainerArray.length> 0 ? trainerArray.map((e)=> <p>{e} </p> ): null}




          <Button variant="contained" onClick={addAssistant} className = "mt-3">
        {" "}
       Add trainer
      </Button>
      </Box> */}



      <Button variant="contained" onClick={addBooking}>
        {" "}
        Submit
      </Button>









{/* //RENDER COURSE DATA */}
      <Grid container sx={{ padding: 10, margin: 2}}>
        <Box>
          <Table item md={4}>
            <TableHead>
              <TableCell> TRANSPORT TYPE </TableCell>
              <TableCell>ROUTES</TableCell>
              <TableCell>NUMBER OF SEATS</TableCell>
              <TableCell>PAYMENT</TableCell>
              <TableCell>TIME </TableCell>
            </TableHead>

              {list.map((x, i) => {
                return (
                  <TableBody>
                    <TableCell key={i}> {x.transporttypess
} </TableCell>
                    <TableCell> {x.route} </TableCell>
                    <TableCell> {x.seats} </TableCell>
                    <TableCell> {x.fees} </TableCell>
                    <TableCell> {x.time} </TableCell>
                    <TableCell>  <Mybutton label= "Delete" onClick={ dlt }  /> </TableCell>
                
                  </TableBody>
                );
              })}
         
          </Table>
        </Box>
      </Grid>
    </div>
  );
}
