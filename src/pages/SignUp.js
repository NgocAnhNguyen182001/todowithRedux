import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Form,
} from "@mui/material";
import React from "react";
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
import { useDispatch } from "react-redux";

export default function SignUp() {
  const singUpYupForm = yup.object().shape({
    account: yup.string().required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[0-9])(?=.{8,})/
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),
      repassword: yup.string().label('repassword').required().oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(singUpYupForm) });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data)
    const newAccount = {
      account: data.account,
      passwordid: data.password
    }
    const confirm = window.confirm("Do You Want To Sign Up");
    if (confirm){
      dispatch(addAccountThunk(newAccount))
      dispatch(getAccountThunk())
      navigate("/login")
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
            <Button type="submit" variant="contained">
              &nbsp; Sign Up
            </Button>
            {/* </Link> */}
          </Stack>
        </form>
      </Container>
    </div>
  );
}
