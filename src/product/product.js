import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toastSuccess } from "../helpers/toastHelpers";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();
  // xử lý cart ở đây
  const [listClothes, setListClothes] = useState([]);
  console.log(listClothes)
  const checkLogin = localStorage.getItem("admin");
  //xử lý khi add vào cart
  const [amount, setAmount] = useState();
  // const handleAmount = (data) => {
  //   setAmount(data);
  // };

  const handleAddtoCard = (name, price) => {
    if (checkLogin == null) {
      navigate("/login");
    } else {
      // logic khi add này so sánh xem cái mảng đã có id đó chưa, nếu chưa thì add còn có rồi tăng số lượng lên 1.
      console.log({ name, price });
      setListClothes((listClothes) => {
        //nếu tk name vs price vs id mà không trùng thì thực hiện ở đây
        console.log("pre", listClothes);//vẫn ok
        console.log(listClothes.every(
          (item) => item.clothesname !== name && item.price !== price
        ))
        // chưa ok ở đây thôi
        if (
          listClothes.every(
            (item) => item.clothesname !== name && item.price !== price
          )
        ) {
          const itemBehind = {
            clothesname: name,
            price: price,
            amount: 1
          }
          console.log(itemBehind, listClothes)
          const newListClothes = [
            ...listClothes,
            itemBehind
          ];
// ????
          // const dataPush = [...listClothes, ...newListClothes] 
          const jsonList = JSON.stringify(newListClothes);
          localStorage.setItem(`${checkLogin}`, jsonList);
          return newListClothes;
        } else {
          const preCur = listClothes.filter(
            (item) => item.clothesname !== name && item.price !== price
          );
          const newAmount = listClothes.filter(
            (item) => item.clothesname == name && item.price == price
          );

          //mảng mới phải là tk pre - đi tk trùng, và đằng sau là tk trùng mới
          const itemBehind =  newAmount.map(item => ({
            clothesname: item.clothesname,
            price: item.price,
            amount: item.amount + 1,
          }))
          const newListClothes = [
            ...preCur, ...itemBehind
            
          ];

          
          const jsonList = JSON.stringify(newListClothes);
          localStorage.setItem(`${checkLogin}`, jsonList);
          return newListClothes;
        }
      });
      toastSuccess("Add To Card Successfull");

      //nếu trùng thì add vào local tk có cái số lượng khác với cái trên là ok
    }
  };

  return (
    <Container maxWidth="xl">
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                //   alt="green iguana"
                image={require("../img/clothes.jpg")}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Summer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Summers are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="product_price">
                <Button
                  onClick={() => handleAddtoCard("Summer", 60)}
                  size="small"
                  color="primary"
                >
                  ADD to Card
                </Button>
                <span>60$</span>
              </div>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../img/clothes1.jpg")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Winter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Winter are a widespread group of squamate reptiles, with over
                  6,000 species,rd ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="product_price">
                <Button
                  onClick={() => handleAddtoCard("Winter", 50)}
                  size="small"
                  color="primary"
                >
                  ADD to Card
                </Button>
                <span>50$</span>
              </div>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../img/clothes2.jpg")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Spring are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="product_price">
                <Button
                  onClick={() => handleAddtoCard("Spring", 30)}
                  size="small"
                  color="primary"
                >
                  ADD to Card
                </Button>
                <span>30$</span>
              </div>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../img/clothes3.jpg")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Autumn
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autumn are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="product_price">
                <Button
                  onClick={() => handleAddtoCard("Autumn", 40)}
                  size="small"
                  color="primary"
                >
                  ADD to Card
                </Button>
                <span>40$</span>
              </div>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default Product;
