import "./App.css";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
// import { Redirect } from "react-router-dom";

import MyRouter from "./router/MyRouter";
function App() {
  return (

    <div className="todo-app">
      <MyRouter />
    </div>
  );
}

export default App;
