import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Home = () => {

 
  return (
    <React.Fragment>
        <div className="home_banner">
          <Typography variant="h2">
            Welcomt To Home Page Public
          </Typography>
          <div className="icon_panner">
            <FavoriteBorderIcon />
            <FavoriteBorderIcon />
            <FavoriteBorderIcon />
          </div>
        </div>
  
    </React.Fragment>
  );
};

export default Home;
