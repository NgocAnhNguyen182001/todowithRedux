import Todo from "./Todo";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddTodo from "../pages/AddTodo";
import { Route, Routes, Link } from "react-router-dom";
import { getTodosThunk } from "../store/thunk";
import React, { useEffect } from "react";
import { useState } from "react";
import { Backdrop } from '@mui/material';
function TodoList() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);
  const todosCur = useSelector((state) => state.users);
  //đã bắt đc thay đổi của todos khi click add
  // vấn đề bên mảng chưa map ra đc
  const [todos, setTodos] = useState(todosCur);
  useEffect(() => {
    setTodos(todosCur);
  }, [todosCur]);
  const [open, setOpen] = useState(true);
  // console.log(todos);
  // loading de choi thoi gian call api
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false)
    }, 6000);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const user = localStorage.getItem('admin')
   }, []);
  return (
    <React.Fragment>


        <Backdrop
        sx={{ color: '#fff', backgroundColor:'#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress disableShrink />
      </Backdrop>
  { (todos && todos.length !== 0) ?
     (
      // <Container maxWidth="sm">
        <Todo todos={todos} />
      // </Container>
    )
   
    : (
      <Container maxWidth="sm">
        <Typography variant="h2">Don't Have Element</Typography>
        {/* link đến Form Add, dùng router  */}
        <Link to="/AddTodo" style={{ textDecoration: "none" }}>
          <Button variant="contained">
            <PersonAddIcon /> &nbsp; Add User Now
          </Button>
        </Link>
      </Container>
    ) }
    </React.Fragment>
    )
}
export default TodoList;
