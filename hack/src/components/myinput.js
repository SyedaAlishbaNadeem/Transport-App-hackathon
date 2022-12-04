import { TextField } from '@mui/material';
import React from 'react'

function Myinput(props) {

const {label , value ,onChange, type, disabled, required , size} = props;


  return (
<TextField 
 label = {label}  value = {value} type = {type} required = {required}
onChange = {onChange}  disabled = {disabled}   fullWidth = {true} size = {size}  />
  )
}
export default Myinput;