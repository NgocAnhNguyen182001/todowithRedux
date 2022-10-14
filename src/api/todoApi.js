import { Replay10, TornadoSharp } from "@mui/icons-material";
import axios from "axios";

export const axiosWork = axios.create({
    baseURL: "https://6319c7cd6b4c78d91b434a01.mockapi.io/api/v1",
    timeout: 0
})

export const getTodoApi = () => {
    return axiosWork.get(`/users`);
}

export const addTodoAPI = (todo) => {
    return axiosWork.post(`/users`, todo);
}

export const deleteTodoAPI = (id) => {
    return axiosWork.delete(`/users/${id}`);
}

export const getOneTodo = (id) => {
    return axiosWork.get(`/users/${id}`);
}

export const updateTodoAPI = (todo) => {
    return axiosWork.put(`/users/${todo.id}`,{
        name: todo.name,
        age: todo.age,
        email: todo.email
    });
}