import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from '@mui/icons-material/Add';
const AppbarHeader = () => {
  const navigate = useNavigate();
  const [local, setLocal] = useState(null);
  //log out
  const logout = () => {
    localStorage.removeItem("admin");
    setLocal(null);
    navigate("/");
  };

  // goi 1 lan get de lay dc local khi render man
  useEffect(() => {
    const user = localStorage.getItem("admin");
    setLocal(user);
  }, []);
   
  // const checkAdmin = localStorage.getItem("admin")
  // const account = localStorage.getItem(`${checkAdmin}`)
  // console.log(account)

  //biết là cái sản phẩm thay đổi nhưng mà   

  const checkLogin = localStorage.getItem("admin");
  const checkAmount = localStorage.getItem(`${checkLogin}`);
  const [listClothes, setListClothes] = useState([checkAmount])

   console.log(checkAmount);

  useEffect(() => {
    const checkLogin = localStorage.getItem("admin");
    const checkAmount = localStorage.getItem(`${checkLogin}`);
    const myArray = JSON.parse(checkAmount);
    setListClothes(myArray)
  }, [checkAmount])
  
  // const checkAmount = localStorage.getItem("account1");
  
  //  const arrayLength = myArray.length
  console.log("check", listClothes);
  
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
            <Link className="go_home" to="/" style={{ textDecoration: "none" }}>
              {" "}
              WELCOME TO SHOP
            </Link>
          </Typography>

          {local !== null ? (
            <React.Fragment>
              <Link to="/shopping" style={{ textDecoration: "none" }}>
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className="number_card">{listClothes !== null ? listClothes.length : 0}</span>
              </Link>
              <PersonIcon></PersonIcon>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button color="inherit">Login</Button>
              </Link>
              {/* &nbsp; */}
              <ChevronLeftSharpIcon />
              {/* &nbsp; */}
              <Link to="/singup" style={{ textDecoration: "none" }}>
                <Button color="inherit">Sign Up</Button>
              </Link>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppbarHeader;
