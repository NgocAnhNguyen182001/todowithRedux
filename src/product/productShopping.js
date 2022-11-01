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
import { SvgIcon } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteTodoThunk,
  addTodosThunk,
  getTodosThunk,
  getAccountThunk,
  getProductsThunk,
} from "../store/thunk";
import { Link } from "react-router-dom";
import { setTodos } from "../store/action";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { toastSuccess } from "../helpers/toastHelpers";
import AddIcon from "@mui/icons-material/Add";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { array } from "yup";
function ProductShopping() {
  const checkLogin = localStorage.getItem("admin");
  console.log(checkLogin);
  const listClothes = localStorage.getItem(`${checkLogin}`);
  const myArray = JSON.parse(listClothes);

  const [listChange, setListChange] = useState(myArray);
  const dispatch = useDispatch();

  const handleDelete = (name, price) => {
    if (window.confirm("Are you sure to Delete Product???")) {
      const newList = listChange.filter(
        (item) => item.clothesname !== name && item.price !== price
      );
      setListChange(newList);
      localStorage.setItem(`${checkLogin}`, JSON.stringify(newList));
      dispatch(getProductsThunk());
    }
  };

  const handleAddAmount = (name, price) => {
    const newList = listChange.map((item) => {
      if (item.clothesname !== name && item.price !== price) {
        return item;
      } else {
        return {
          clothesname: name,
          price: price,
          amount: item.amount + 1,
        };
      }
    });
    setListChange(newList);
    localStorage.setItem(`${checkLogin}`, JSON.stringify(newList));
  };

  // Edit Card
  const handleRemoveAmount = (name, price) => {
    const newList = listChange.map((item) => {
      if (item.clothesname !== name && item.price !== price) {
        return item;
      } else {
        //nếu > 1 mới cho - 1
        if (item.amount > 1) {
          return {
            clothesname: name,
            price: price,
            amount: item.amount - 1,
          };
        }
        //nhỏ hơn 1 thì trừ nó thành xóa mất r
        else {
          if (window.confirm("Do you want to Delete Product")) {
            return NaN;
          } else {
            return item;
          }
        }
        //khi amount bằng 0 thì cần Alert thông báo bạn có muốn xóa không có thì gọi hàm xóa ở đây
      }
    });

    //nếu mảng đó không có undefine thì mới truyền lên local
    if (newList.every((item) => typeof item !== "number")) {
      setListChange(newList);
      localStorage.setItem(`${checkLogin}`, JSON.stringify(newList));
    }
    //còn có undefine thì xóa phần tử undefine đấy đi song mới sét lên local
    else {
      const newListEdit = newList.filter((item) => typeof item !== "number");
      setListChange(newListEdit);
      localStorage.setItem(`${checkLogin}`, JSON.stringify(newListEdit));
      dispatch(getProductsThunk());
    }
  };

  return (
    <React.Fragment>
      {listChange.length > 0 ? (
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
                  <TableCell align="left">{`Total (${listChange.reduce(
                    (total, cur) => total + cur.amount * cur.price,
                    0
                  )})$`}</TableCell>
                  <TableCell align="left">Edit Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listChange.map((item, index) => (
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
                        <Typography variant="h5">{`${item.price}$`}</Typography>
                      </Stack>
                    </TableCell>
                    <div className="amout_icon">
                      <TableCell align="left">
                        <Stack spacing={2}>
                          <AddIcon
                            className="add_edit_amount"
                            onClick={() =>
                              handleAddAmount(item.clothesname, item.price)
                            }
                            color="primary"
                          />
                          <Typography variant="h5">{item.amount}</Typography>
                          <RemoveSharpIcon
                            className="add_edit_amount"
                            onClick={() =>
                              handleRemoveAmount(item.clothesname, item.price)
                            }
                            color="primary"
                          />
                        </Stack>
                      </TableCell>
                    </div>

                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Typography variant="h5">{`${
                          item.amount * item.price
                        }$`}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        onClick={() =>
                          handleDelete(item.clothesname, item.price)
                        }
                      >
                        <DeleteForeverIcon className="delete-icon" />
                      </Button>
                      {/* </Container> */}
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
