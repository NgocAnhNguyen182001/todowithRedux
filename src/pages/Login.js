import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { json, Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useHistory from "use-history";
import { useEffect } from "react";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import YupPassword from 'yup-password'
import { useDispatch, useSelector } from "react-redux";
import { getAccountThunk } from "../store/thunk";


function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountThunk());
  }, [dispatch]);
  // lay dc mang roi nha
  const accountList = useSelector((state) => state.accounts)
  
  console.log(accountList)

  const logionYupForm = yup.object().shape({
    account: yup.string().required(),
    password: yup.string().required('Please Enter your password')
    .matches(
      /^(?=.*[0-9])(?=.{8,})/
  )})

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(logionYupForm)});


   
  const onSubmit =  (data) => {
    console.log(data)
    if (accountList.some((item) =>
      item.account == data.account && item.passwordid == data.password
    )) {
      localStorage.setItem('admin', JSON.stringify(data.account))
      navigate('/todoList')
      // console.log("Dang nhap thanh cong");
    } else 
    {
    window.alert("Account Or Password is False");
    console.log("Account Or Password is False");
    }
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
              {...register("account")}
            />
            {errors.account && (
              <Typography variant="h8">Account is required</Typography>
            )}
            <TextField
            type="password"
              id="outlined-basic"
              label="Input Password"
              variant="outlined"
              {...register("password")}
            />
            {errors.password && (
              <Typography  variant="h8">Password must be have few 8 characters</Typography>
            )}
            {/* van de o day nha khi nhan link vao thi no chua duoc thuc hien cai button ma nha */}
            {/* <Link to="/" style={{ textDecoration: 'none' } condition=}> */}
            <Button className="button_Login_signup" type="submit" variant="contained" >
              &nbsp; Sign in
            </Button>
            {/* </Link> */}
            <Typography  variant="h8">
            If you don't have acount, please click here to
            <Link to="/singup" style={{ textDecoration: "none" }}>
            &nbsp;
            Sign Up
            </Link>
            </Typography>

          </Stack>
        </form>
      </Container>
    </div>
  );
}

export default Login;
