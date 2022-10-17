import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Form,
  checkboxClasses,
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
  
  const accountList = useSelector((state) => state.accounts)
  

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

  // function isShallowEqual(obj1, obj2) {
  //   for (let prop in obj1) {
  //     if (obj1[prop] !== obj2[prop]) return false;
  //   }

  //   for (let prop in obj2) {
  //     if (obj2[prop] !== obj1[prop]) return false;
  //   }

  //   return true;
  // }

  // const userLogin = {
  //   acount: "admin",
  //   password: "123456",
  // };
  const checkAcc = (accounts, data) => {
    console.log(accounts)
    if( accounts.account == data.account && accounts.passwordid == data.passwordid)
     return true;
     else
     return false
  }

   
  const onSubmit =  (data) => {
    console.log(data)
    if (() => accountList.some((accounts) => {
     return  checkAcc(accounts, data)
    })) {
      localStorage.setItem('admin', JSON.stringify(data.acount))
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
              {...register("account")}
            />
            {errors.acount && (
              <Typography variant="h8">Acount is required</Typography>
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
            <Button type="submit" variant="contained" >
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
