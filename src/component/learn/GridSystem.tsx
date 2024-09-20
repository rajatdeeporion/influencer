import React from 'react'
import Grid from '@mui/material/Grid2';



function GridSystem() {
   
  return (
    <div>
    
    <Grid container spacing={0}  style={{ backgroundColor: 'green',height:"100vh" }} 
    size={{ xs: 12,sm:1,md:12,lg:1,xl:12 }}
    >
      <Grid size={{xs:6}} >
        <h1 style={{ backgroundColor: 'red',height:"100vh" }}>One</h1>
      </Grid>
      <Grid size={{xs:3}} >
        <h1 style={{ backgroundColor: 'blue',height:"100vh" }}>Two</h1>
      </Grid>
    </Grid>
    </div>
  )
}

export default GridSystem
