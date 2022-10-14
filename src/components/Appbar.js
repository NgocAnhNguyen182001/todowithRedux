import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";

const AppbarHeader = () => {
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  const logout = () => {
    localStorage.removeItem("admin");
    setLocal(null)
    navigate("/")
  };

  useEffect(() => {
    const user = localStorage.getItem('admin')
    setLocal(user)
    console.log(user)
    console.log("ádsadsadsad")
   }, []);
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WELCOME TO LIST TODO
          </Typography>
          {local !== null ? (
            <React.Fragment>
              <PersonIcon></PersonIcon>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
              </React.Fragment>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppbarHeader;
