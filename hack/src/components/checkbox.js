import { Radio } from "@mui/material";
import React from "react";

export default function Checkbox(props) {
  return (
    <span style={props.style}>
      <spna> {props.label} </spna>

      <Radio
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
    </span>
  );
}
