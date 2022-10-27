import { Typography } from "@mui/material";

import { Link, useParams } from "react-router-dom";
import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ProductSearch() {
  const listClothes = [
    { title: "Summer", year: 1994 },
    { title: "Winter", year: 1972 },
    { title: "Autumn", year: 1974 },
    { title: "Spring", year: 2008 },
  ];
  const { input } = useParams();
 const ListofSearch = listClothes.filter((item) =>
                item.title.toLowerCase().includes(input.toLowerCase())
              )
              console.log(ListofSearch.length)
  //đã lấy được input để so sánh từ đó list ra Product
  return (
    <div>
     {ListofSearch.length !== 0 ? (
      <Container maxWidth="xl">
        <Typography variant="h2">List Product for your Search</Typography>
        {/* link đến Form Add, dùng router  */}
        <Container maxWidth="xl">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            {
              ListofSearch.map((item, key) => (
                (item !== null && item!== "undefine")?
                (
                <Box gridColumn="span 3" key={key}>
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
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Summers are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button size="small" color="primary">
                          ADD to Card
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>)
                : (
                  <Typography variant="h2">No Product for your Search</Typography>
                )
              ))}
            {/* element in hear */}
          </Box>
        </Container>
      </Container>
     ): (
      <Typography variant="h2">Don't Have Product For Your Search</Typography>
     )}
      
    </div>
  );
}

export default ProductSearch;
