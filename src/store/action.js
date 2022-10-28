import { type } from "@testing-library/user-event/dist/type";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODOS = "SET_TODOS";
export const GET_ONE = "GET_ONE";
export const GET_TODOS = "GET_TODOS";
export const GET_ACCOUNT = "GET_ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const SET_ACCOUNT = "SET_ACCOUNT";

export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

//product
export const getProducts = (data) => (dispatch) => {
    const products = data;
    let newProducts = [];
    for(let product of products) {
        newProducts.unshift(product);
    }
    dispatch(setProducts(newProducts))
}

export const setProducts = (products) => ({
    type: SET_PRODUCT,
    payload: products
})

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})



//account
export const getAccount = (data) => (dispatch) => {
    const accounts = data;
    let newAccounts = [];
    for(let account of accounts) {
        newAccounts.unshift(account);
    }
    dispatch(setAccount(newAccounts))
}

export const setAccount = (accounts) => ({
    type: SET_ACCOUNT,
    payload: accounts
})

export const addAccount = (account) => ({
    type: ADD_ACCOUNT,
    payload: account
})
//todos
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

