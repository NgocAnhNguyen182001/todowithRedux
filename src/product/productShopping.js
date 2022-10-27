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
import LoadingButton from "@mui/lab/LoadingButton";
//redux

import { useDispatch } from "react-redux";
import { deleteTodoThunk, addTodosThunk, getTodosThunk } from "../store/thunk";
import { Link } from "react-router-dom";
import { setTodos } from "../store/action";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { toastSuccess } from "../helpers/toastHelpers";
function ProductShopping() {
  const checkLogin = localStorage.getItem("admin");

  const listClothes = localStorage.getItem(`${checkLogin}`);
  const myArray = JSON.parse(listClothes);
  console.log(myArray)
  return (
    <React.Fragment>
      {myArray !== null ? (
        <React.Fragment>
          <Typography variant="h2">List Clothes for Shopping</Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="left">Product Price</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Edit Options</TableCell>
                  <TableCell align="left">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myArray.map((item, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{index + 1}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{item.clothesname}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{item.price}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{item.amount}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <LoadingButton>
                        <DeleteForeverIcon className="delete-icon" />
                      </LoadingButton>

                      <Link to={`/update-todo/`}>
                        <EditIcon className="edit-icon" />
                      </Link>
                      {/* </Container> */}
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{item.amount * item.price}</Typography>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant="h2">The cart is empty</Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">
              <PersonAddIcon /> &nbsp; Shopping Now
            </Button>
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ProductShopping;
