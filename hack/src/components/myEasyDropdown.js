import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function MyEasyDropdown(props) {
  return (
    <div>
      <FormControl fullWidth = {true}  sx={{ margin: "10px" }}>
        <InputLabel id="demo-simple-select-standard-label">
      
          {props.label}
        </InputLabel>
        <Select
          required={props.required}
          label={props.label}
          variable="standard"
          onChange={props.onChange}
          value={props.value}
          
        >
          {props.dataSource && props.dataSource.length > 0
            ? props.dataSource.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
}
