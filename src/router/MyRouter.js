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
import SignUp from "../pages/SignUp";
import ProductSearch from "../search/productSearch";
import ProductShopping from "../product/productShopping";

function MyRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="/productSearch/:input" element={<ProductSearch />} />
          <Route element={<PrivateRouter />}>
            <Route path="/AddTodo" element={<AddTodo />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/update-todo/:id" element={<UpdateTodo />} />
            <Route path="/shopping" element={<ProductShopping />} />
          </Route>

          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default MyRouter;
