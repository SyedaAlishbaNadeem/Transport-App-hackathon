import { Button } from '@mui/material';
import React from 'react'

export default function Mybutton(props) {
  return (
    <div>
      <Button onClick={props.onClick} disabled={props.disabled}   variant = {props.variant ?? "contained"}> {props.label} </Button>
    </div>
  )
}
