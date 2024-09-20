import React from 'react'
import { Button } from '@mui/material'
function Buttons() {
  return (
    <div>
     <Button variant="outlined">Contained</Button>
     <Button variant="contained">Contained</Button>
     <Button variant="outlined">Contained</Button>
     <Button href="#">Contained</Button>
     <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>

    </div>
  )
}

export default Buttons
