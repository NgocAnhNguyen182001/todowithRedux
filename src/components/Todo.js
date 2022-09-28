import React, { useState } from "react";
import TodoForm from "./TodoForm";

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
//redux
import { useDispatch } from "react-redux";
import { deleteTodoThunk, addTodosThunk } from "../store/thunk";

function Todo({ todos }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  //redux

  const handleDeleteRedux = (id) => {
    dispatch(deleteTodoThunk(id));
  };
  //bat thay doi 2 cai input
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");

  const handleCreateRedux = (userNew) => {
    dispatch(addTodosThunk(userNew));
  };
  const handleChangeID = (e) => {
    setInputId(e.target.value);
  };
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleSubmitRd = (e) => {
    e.preventDefault();
    handleCreateRedux({ id: inputId, name: inputName });
    setInputId("");
    setInputName("");
  };
  //bat su kien input de them moi vao
  const handleUpdateRedux = (user) => {
    console.log(user);
  };
  //form react

  return (
    <React.Fragment>
      <Typography variant="h2">List User In Redux</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow align="center">
              <TableCell>
                <TextField
                  required
                  id="outlined-required"
                  label="Nhập ID"
                  type="text"
                  placeholder="Nhan ID"
                  onChange={handleChangeID}
                  value={inputId}
                />
                &nbsp; &nbsp;
                <TextField
                  required
                  id="outlined-required"
                  label="Nhập tên"
                  type="text"
                  placeholder="Nhập tên "
                  onChange={handleChangeName}
                  value={inputName}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={handleSubmitRd}>
                  <PersonAddIcon /> &nbsp; Add User in Redux
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Họ và tên</TableCell>
              <TableCell align="left">Tùy Chọn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
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
                  <Container className="icons">
                    <DeleteForeverIcon
                      onClick={() => handleDeleteRedux(todo.id)}
                      className="delete-icon"
                    />
                    <EditIcon
                      onClick={handleUpdateRedux}
                      className="edit-icon"
                    />
                  </Container>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TodoForm todos={todos}></TodoForm> */}
    </React.Fragment>
  );
}

export default Todo;
