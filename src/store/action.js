import { type } from "@testing-library/user-event/dist/type";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODOS = "SET_TODOS";
export const GET_ONE = "GET_ONE";
export const GET_TODOS = "GET_TODOS";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
})

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
})

export const getOne = (id) => ({
    type: GET_ONE,
    payload: id
})

export const getTodos = (data) => (dispatch) => {
    const todos = data;
    let newTodos = [];
    for(let todo of todos) {
        newTodos.unshift(todo);
    }
    dispatch(setTodos(newTodos))
}

