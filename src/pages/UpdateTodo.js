import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Form,
} from "@mui/material";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateTodosThunk, getTodosThunk, getOneThunk } from "../store/thunk";
import { useEffect } from "react";
import { getOneTodo } from "../api/todoApi";
import { useState } from "react";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { toastSuccess } from "../helpers/toastHelpers";


function UpdateTodo() {

  const todoUpdateForm = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().email().required(),
  }).required();
 



  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({resolver: yupResolver(todoUpdateForm)});
  const { id } = useParams();
  const todoList = useSelector((state) => state.users);
  const todoItem = todoList.filter(todo => todo.id == id)
  console.log(todoList)
  console.log(todoItem)

  useEffect(() => {
    reset(...todoItem)
  }, []);

  const dispatch = useDispatch();
  const handleUpdateRedux = (userNew) => {
    dispatch(updateTodosThunk(userNew)); // add in api
    //và bên redux của chưa get về đc bên store redux
    // dispatch(getTodosThunk());
  };
  const onSubmit = async (data) => {
    await handleUpdateRedux(data);
    navigate("/todoList");
    toastSuccess("Edit User is Successfull")
    //fix dataa de cho dependenci no hieu
  };

  
  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h2">Update info Todo</Typography>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name",)}
            />
            {errors.name && <span>Request input Name</span>}
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              {...register("age", { required: true })}
            />
            {errors.age && <span>Age is Number and required</span>}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Email must have @ / ex: naa@gmail.com</span>}

            {/* van de o day nha khi nhan link vao thi no chua duoc thuc hien cai button ma nha */}
            {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
            <Button type="submit" variant="contained">
              <PersonAddIcon /> &nbsp; Update Now
            </Button>
            {/* </Link> */}
          </Stack>
        </form>
      </Container>
    </div>
  );
}

export default UpdateTodo;
