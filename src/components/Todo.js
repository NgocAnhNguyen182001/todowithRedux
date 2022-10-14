import React, { createContext, useState } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
//iport table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import LoadingButton from '@mui/lab/LoadingButton';
//redux

import { useDispatch } from "react-redux";
import { deleteTodoThunk, addTodosThunk, getTodosThunk } from "../store/thunk";
import { Link } from "react-router-dom";
import { setTodos } from "../store/action";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
//use context để truyền cho tk todolist trước khi map

function Todo({ todos }) {
  //ok vấn đề ở đây
  // console.log(todos);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  //redux
  // const [todosList, setTodosList] = useState(todos);

  const [todosList, setTodosList] = useState(todos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTodosList(todos);
  }, [todos]);

  const handleDeleteRedux = async (id) => {
     // id row cần id của t
      
    


    const confirm = window.confirm("Do You Want To Delete Todo??");
    if (confirm) {
      setLoading(true, id)
      await dispatch(deleteTodoThunk(id));
      const newTodos = todos.filter((todoItem) => todoItem.id !== id);
     



      dispatch(getTodosThunk());
      // setTodosList(newTodos);
      // console.log({ id, newTodos });
      setTodosList(newTodos);
      setTimeout(() => setLoading(false), 2000)
      
    }
  };
  // console.log(todos);
  //form react

  


  return (
    <React.Fragment>
      <Typography variant="h2">List User In Redux</Typography>

      <Link
        to={{
          pathname: "/AddTodo",
        }}
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained">
          <PersonAddIcon /> &nbsp; Add User in Redux
        </Button>
      </Link>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Edit Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todosList.map((todo, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Stack spacing={2}>
                    <Typography variant="h5">{todo.id}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Stack spacing={2}>
                    <Typography variant="h5">{todo.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Stack spacing={2}>
                    <Typography variant="h5">{todo.age}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Stack spacing={2}>
                    <Typography variant="h5">{todo.email}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Container className="icons">
                    {/* button delete */}
                    {/* van de o day tat ca tk row deu dung chung 1 tk loading can index loading voi moi row khac nhau */}
                    <LoadingButton loading={ loading} >
                      <DeleteForeverIcon
                        onClick={() => handleDeleteRedux(todo.id)}
                        className="delete-icon"
                      />
                    </LoadingButton>

                    <Link to={`/update-todo/${todo.id}`}>
                      <EditIcon className="edit-icon" />
                    </Link>
                  </Container>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default Todo;
