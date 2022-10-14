import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Form,
} from "@mui/material";
import React from "react";
import { json, Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useHistory from "use-history";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function isShallowEqual(obj1, obj2) {
    for (let prop in obj1) {
      if (obj1[prop] !== obj2[prop]) return false;
    }

    for (let prop in obj2) {
      if (obj2[prop] !== obj1[prop]) return false;
    }

    return true;
  }

  const userLogin = {
    acount: "admin",
    password: "123456",
  };
  const onSubmit =  (data) => {
    if (isShallowEqual(userLogin, data)) {
      localStorage.setItem('admin', JSON.stringify(userLogin.acount))
      navigate('/todoList')
    } else 
    window.alert("tai khoan hoac mat khau khong dung");
    console.log("tai khoan hoac mat khau khong dung");
  };


  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h2"> Form Login </Typography>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Input Acount"
              variant="outlined"
              {...register("acount", { required: true })}
            />
            {errors.acount && (
              <Typography variant="h8">Acount is required</Typography>
            )}
            <TextField
              id="outlined-basic"
              label="Input Password"
              variant="outlined"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <Typography variant="h8">Password is required</Typography>
            )}
            {/* van de o day nha khi nhan link vao thi no chua duoc thuc hien cai button ma nha */}
            {/* <Link to="/" style={{ textDecoration: 'none' } condition=}> */}
            <Button type="submit" variant="contained" >
              &nbsp; Sign in
            </Button>
            {/* </Link> */}
          </Stack>
        </form>
      </Container>
    </div>
  );
}

export default Login;
