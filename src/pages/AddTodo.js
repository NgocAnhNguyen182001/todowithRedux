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
import { useDispatch } from "react-redux";
import { addTodosThunk, getTodosThunk } from "../store/thunk";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

//use form va yum de validate cai form nhap thong tin

export default function AddTodo(props) {
  const stateLocation = useLocation().state;

  const navigate = useNavigate();

  const todoAddForm = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().email().required(),
  }).required();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(todoAddForm)});

  const dispatch = useDispatch();
  const handleCreateRedux = async (userNew) => {
    await dispatch(addTodosThunk(userNew)); // add in api
    //và bên redux của chưa get về đc bên store redux
     dispatch(getTodosThunk());
    //gán cho hàm nó map cái Array mới
  };
  const onSubmit =   (data) => {
    handleCreateRedux(data);
      navigate("/todoList");
    //fix dataa de cho dependence no hieu
    
  };
 
  


  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h2">Add infor Todo</Typography>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name")}
            />
            {errors.name && <span>Request input Name</span>}
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              {...register("age")}
            />
            {errors.age && <span>Age is Number and required</span>}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            />
            {errors.email && <span>Email must have @ / ex: naa@gmail.com</span>}

            {/* van de o day nha khi nhan link vao thi no chua duoc thuc hien cai button ma nha */}
            {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
            <Button type="submit" variant="contained">
              <PersonAddIcon /> &nbsp; Add User Now
            </Button>
            {/* </Link> */}
          </Stack>
        </form>
      </Container>
    </div>
  );
}
