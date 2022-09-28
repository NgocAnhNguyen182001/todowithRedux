import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_TODOS,
  GET_TODOS,
} from "./action";


const addTodo = (todoList, todo) => {
  return [todo, ...todoList];
};

const updateTodo = (todoList, todo) => {
  return todoList.map((todoItem) => {
   if(todoItem.id === todo.id){
    return todo
   }
   else
   return todoItem;
  }) ;
}
const deleteTodo = (todoList, id) => {
  return todoList.filter((todo) => todo.id !== id);
};

const initState = {
  users: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        users: [...action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        users: [...action.payload],
      };
    case ADD_TODO:
      return { ...state, users: addTodo(state.users, action.payload) };

    case DELETE_TODO:
      return { ...state, users: deleteTodo(state.users, action.payload) };
    case UPDATE_TODO:
      return { ...state, users: updateTodo(state.users, action.payload) };
    default:
      return state;
  }
};
const store = createStore(todoReducer, applyMiddleware(thunk));
export default store;

// export const getAllData = () => {
//   axios({
//     method: "GET",
//     url: "https://6319c7cd6b4c78d91b434a01.mockapi.io/api/v1/users",
//     // data: null
//   })
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
//thêm 1 cái useEffect để ren der ra lần đầu tiên khi mình mocAPI nó gọi lại