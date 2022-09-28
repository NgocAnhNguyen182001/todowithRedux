import React, { useState, useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { red, pink } from "@mui/material/colors";

const color = pink[200];

function TodoForm(props) {
  // const {onSubmit} = props;
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <form className="todo-form" onSubmit={handleSubmit}>
          <Container>
            <Grid container spacing={2}>
              <Grid xs={8}>
                <TextField
                  required
                  id="outlined-required"
                  label="Vui lòng nhập tên"
                  type="text"
                  placeholder="Nhập tên..."
                  value={input}
                  name="text"
                  className="todo-input"
                  onChange={handleChange}
                  ref={inputRef}
                />
              </Grid>
              <Grid xs={4}>
                <Button
                  variant="contained"
                  className="todo-button"
                  onClick={handleSubmit}
                >
                  Thêm Sinh Viên
                </Button>
              </Grid>
            </Grid>
          </Container>
      </form>
    </Container>
  );
}

export default TodoForm;
