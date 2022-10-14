import React from "react";
import { Outlet } from "react-router";
import  AppbarHeader from "./Appbar";
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { useEffect } from "react";
import { useState } from "react";

const LayoutHome = () => {
  
  return (
    <div>
      <AppbarHeader />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutHome;
