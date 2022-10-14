import React, { useEffect, useState } from "react";
import AddTodo from "../pages/AddTodo";
import LayoutHome from "../components/LayoutHome";
import Home from "../components/home";
import Login from "../pages/Login";
import UpdateTodo from "../pages/UpdateTodo";
import NotFound from "../pages/NotFound";
import TodoList from "../components/TodoList";
import { Navigate, Route, Routes } from "react-router";
import PrivateRouter from "./PrivateRouter";

function MyRouter() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRouter />}>
            <Route
              path="/AddTodo"
              element={<AddTodo />}
              // element={localStore !== null ? <AddTodo /> : <Navigate to="/" />}
            />
            <Route
              path="/todoList"
              // element={localStore !== null ? <TodoList /> : <Navigate to="/" />}
              element={<TodoList />}
            />
            <Route
              path="/update-todo/:id"
              // element={
              //   localStore !== null ? <UpdateTodo /> : <Navigate to="/" />
              // }
              element={<UpdateTodo />}
            />
          </Route>

          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default MyRouter;
