import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Form,
} from "@mui/material";
//tost test

import React, { useEffect } from "react";
import {
  json,
  Link,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addAccountThunk, getAccountThunk } from "../store/thunk";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import { toastSuccess } from "../helpers/toastHelpers";


export default function SignUp() {
  // do sign up vơi sign in nằm ngoài router home nên khi render màn hình cần use Effect để get dữ liệu 1 lần
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountThunk());
  }, [dispatch]);

  const accountList = useSelector((state) => state.accounts);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(singUpYupForm) });





  const singUpYupForm = yup.object().shape({
    account: yup.string().required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        // /^(?=.*[0-9])(?=.{8,})/
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),
    repassword: yup
      .string()
      .label("repassword")
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  //xu ly su kien dang ky
  const onSubmit = (data) => {
    console.log(data);
    const newAccount = {
      account: data.account,
      passwordid: data.password,
    };
    if (accountList.some((item) => item.account == data.account)) {
      window.confirm("Accont already exist");
    } else {
      const confirm = window.confirm("Do You Want To Sign Up");
      if (confirm) {
        dispatch(addAccountThunk(newAccount));
        dispatch(getAccountThunk());
        navigate("/login");
        toastSuccess("Sign Up Successfully")
      }
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h2"> Form Sign Up </Typography>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Input Acount"
              variant="outlined"
              {...register("account")}
            />
            {errors.account && (
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
              <Typography variant="h8">
                Password must be have few 6 characters
              </Typography>
            )}
            <TextField
              type="password"
              id="outlined-basic"
              label="Input the same Password"
              variant="outlined"
              {...register("repassword")}
            />
            {errors.repassword && (
              <Typography variant="h8">Passwords must match</Typography>
            )}
            {/* van de o day nha khi nhan link vao thi no chua duoc thuc hien cai button ma nha */}
            {/* <Link to="/" style={{ textDecoration: 'none' } condition=}> */}
            <Button className="button_Login_signup" type="submit" variant="contained">
              &nbsp; Sign Up
            </Button>
            
            {/* </Link> */}
          </Stack>
        </form>
      </Container>
    </div>
  );
}
