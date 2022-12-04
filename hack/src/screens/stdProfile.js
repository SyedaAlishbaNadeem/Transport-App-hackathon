import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function StdProfile() {
  return (
    <div>
      

<Container container>
<Grid   sx={{ padding: 1}} md={3} item> 

<Paper sx= {{width: '100%', padding:2, textAlign:" center"}}  >
<Box>
    <Avatar />
    <img  src = "https://images.unsplash.com/photo-1668104365744-6c7732fabe0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" 
    sx = {{width:50, height:50}}
    />
</Box>
<Box>
    <Typography sx={{fontWeight: "bold"}} variant = "h5">
        Alishba
    </Typography>
</Box>
      
</Paper>


   </Grid>



</Container>






    </div>
  )
}
