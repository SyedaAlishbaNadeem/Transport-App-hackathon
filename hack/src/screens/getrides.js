import React, { useEffect, useState } from 'react'
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { Box, Button, Grid, Table, TableBody, TableCell, TableHead } from "@mui/material";
import Mybutton from '../components/mybutton';
import { useNavigate } from 'react-router-dom';



export default function Getrides() {


    const [list, setList] = useState([]);
    let navigate = useNavigate();



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






  return (
    <div>


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
                    <TableCell key={i}> {x.transporttypess} </TableCell>
                    <TableCell> {x.route} </TableCell> 
                    <TableCell> {x.seats} </TableCell>
                    <TableCell> {x.fees} </TableCell>
                    <TableCell> {x.time} </TableCell>
                    <TableCell>  <Mybutton label= "Book Ride" onClick={ ()=> navigate('/sign')}  size="small"  /> </TableCell>
                
                  </TableBody>
                );
              })}
         
          </Table>
        </Box>
      </Grid>






    </div>
  )
}
