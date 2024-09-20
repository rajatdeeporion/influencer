import React from 'react'
// import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
function Typographys() {
  return (
    <Div>{"This div's text looks like that of a button."}</Div>
  )
}

export default Typographys
