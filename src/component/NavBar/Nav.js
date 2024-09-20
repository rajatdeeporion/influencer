import React from "react";
// import Style from "../NavBar/style/Style.module.css";
// import { Navimg,Linkedin,Git,Github } from "../../assets";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Nav() {
  return (
    <Box>
      <AppBar component={'nav'}  sx={{bgcolor:'black'}}>
         <Toolbar>
            <Typography>Restorent</Typography>
         </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
