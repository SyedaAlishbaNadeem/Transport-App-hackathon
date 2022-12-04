import React, { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { Grid, TableBody, TableCell, TableHead } from "@mui/material";
import Table from "../../components/myTable";

export default function TransportUser() {
  const [list, setList] = useState([]);
  const [key, setKey] = useState();

  let getData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "Stusers/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setList([...Object.values(data)]);
    });
  };

  console.log(list);

  useEffect(() => {
    getData();
    // setData();
  }, []);

  return (
    <div>
      <h1> <u>TRANSPORT USERS </u>  </h1>
      
      <br/>
      <br/>

{/* 
 <Table>
        <TableHead>
          <TableCell>FIRST NAME</TableCell>
          <TableCell> NAME</TableCell>
          <TableCell>CNIC</TableCell>
        </TableHead>

   

          {list.map((x, i) => {
            return (
                  <TableBody>
                <TableCell key={i}> {x.firstname} </TableCell>
                <TableCell >  {x.lastname} </TableCell>
                <TableCell> {x.Cnic} </TableCell>
                </TableBody>
            );
          })}
 
      </Table>     */}

    <table className="m-10 p-10">
        <tr>
        <td>EMAIL</td>
          <td>FIRST NAME</td>
          <td>LAST NAME</td> 
          <td>CONTACT</td>
          <td>CNIC</td>
          <td>EMERGENCY CONTACT</td>
          <td>ROUTES</td>
          <td>TRANSPORT TYPE</td>
          
    
        </tr>

        <tbody className="m-10 p-10">
          {list.map((x, i) => {
            return (
              <tr>
                <td key={i}> {x.email} </td>
                <td> {x.firstname} </td>
                <td> {x.lastname} </td>
                <td> {x.Contact} </td>
                <td> {x.Cnic} </td>
                <td> {x.EmergencyConatct} </td>
                <td> {x.Routes} </td>
                <td> {x.transporttype} </td>
              </tr>
            );
          })}
        </tbody>
      </table> 

    </div>
  );
}
