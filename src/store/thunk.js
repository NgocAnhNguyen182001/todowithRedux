import * as actionsAPI from "../api/todoApi";
import * as actions from "./action";
//product

export const getProductsThunk = () => async (dispatch) => {
    try {
        //lấy dữ liệu trên local ở đây cho nhanh
        const response = await localStorage.getItem("admin");
        const data = await localStorage.getItem(`${response}`);
        const dataTrans = JSON.parse(data)
        //ok này
        dispatch(actions.getProducts(response ,dataTrans))
    } catch (error) {
        console.log(error);
    }
}

//account
export const getAccountThunk = () => async (dispatch) => {
    try {
        const response = await actionsAPI.getAccountApi();
        dispatch(actions.getAccount(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const addAccountThunk = (account) => async (dispatch) => {
    try {
         await actionsAPI.addAccountAPI(account);
        dispatch(actions.addAccount(account))
    } catch (error) {
        console.log(error);
    }
}


//todos
export const getTodosThunk = () => async (dispatch) => {
    try {
        const response = await actionsAPI.getTodoApi();
        dispatch(actions.getTodos(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const addTodosThunk = (todo) => async (dispatch) => {
    try {
         await actionsAPI.addTodoAPI(todo);
        dispatch(actions.addTodo(todo))
    } catch (error) {
        console.log(error);
    }
}

export const updateTodosThunk = (todo) => async (dispatch) => {
    try {
         await actionsAPI.updateTodoAPI(todo);
        dispatch(actions.updateTodo(todo))
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodoThunk = (id) => async (dispatch) => {
    try {
         await actionsAPI.deleteTodoAPI(id);
        dispatch(actions.deleteTodo(id))
    } catch (error) {
        console.log(error);
    }
}

export const getOneThunk = (id) => async (dispatch) => {
    try {
        await actionsAPI.getOneTodo(id);
       dispatch(actions.getOne(id))
   } catch (error) {
       console.log(error);
   }
}
