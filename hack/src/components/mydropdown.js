import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function Mydropdown(props) {
  const { label, value , onChange, datasource, required } = props;
  //datasource is used for the arrays thats goinf to pass in the menuitems list

  return (
    <>
      <InputLabel id="demo-simple-select-label"> {label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label= {label}
        variant= "standard"
        onChange = {onChange}
        fullWidth = {true}
        checked = {true}
        required = {required}

      >
        {datasource && datasource.length > 0 ? 
        datasource.map((x)=>(
        <MenuItem value={x.id}> {x.fullName} </MenuItem>
        ))
        : null }
      </Select>
    </>
  );
}
