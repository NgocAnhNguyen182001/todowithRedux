import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WovenImageList from "../testimage";
import { Container } from "@mui/system";
import FreeSolo from "../search/search";
import Product from "../product/product";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home_banner">
        <Typography variant="h2">Welcomt To Shop Clothes</Typography>
        <div className="icon_panner">
          <FavoriteBorderIcon />
          <FavoriteBorderIcon />
          <FavoriteBorderIcon />
        </div>
        <Container className="search_container" maxWidth="sm">
          <FreeSolo />
        </Container>
      </div>
      <div className="product_container">
      <Product />
      </div>
    </React.Fragment>
  );
};

export default Home;
