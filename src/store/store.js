import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_TODOS,
  GET_TODOS,
  GET_ONE,
  GET_ACCOUNT,
  ADD_ACCOUNT,
  SET_ACCOUNT,
  GET_PRODUCT,
  SET_PRODUCT,
} from "./action";

const persistConfig = {
  key: "root",
  storage,
};

const addTodo = (todoList, todo) => {
  return [todo, ...todoList];
};

const updateTodo = (todoList, todo) => {
  return todoList.map((todoItem) => {
    if (todoItem.id === todo.id) {
      return todo;
    } else return todoItem;
  });
};

const deleteTodo = (todoList, id) => {
  return todoList.filter((todo) => todo.id !== id);
};

const getOneTodo = (todoList, id) => {
  return todoList.filter((todo) => todo.id == id);
};

//account
const addAccount = (accountList, account) => {
  return [accountList, ...account];
};

const setProduct = (listOld, dataSet) => {
  //những tk mà cũ không cùng acc thi du nguyen, con tk giong update theo cai moi
      //trường hợp chưa có tk acount thì them mới vào sau mảng ban đou
  
  return listOld.every(item => item.account !== dataSet.account) ?
  
  [...listOld, dataSet]
    
  : listOld.map(item => {
      //trường hợp account không trùng
    if(item.account !== dataSet.account){
      return item;
    }
    // trường hợp trùng
    else{
      //nếu cùng account:
      return ({
         account: dataSet.account,
         product: dataSet.products
      })
    }
  })
}

const initState = {
  users: [],
  accounts: [],
  products: []
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    //product
    // case GET_PRODUCT:
    //   return {
    //     ...state,
    //     products: [...action.payload],
    //   };

    case SET_PRODUCT:
      return {
        ...state,
        products: setProduct(state.products, action.payload),
      };


    //account
    case GET_ACCOUNT:
      return {
        ...state,
        accounts: [...action.payload],
      };

    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: addAccount(state.accounts, action.payload),
      };

    case SET_ACCOUNT:
      return {
        ...state,
        accounts: [...action.payload],
      };

    //todos
    case SET_TODOS:
      return {
        ...state,
        users: [...action.payload],
      };

    // case GET_TODOS:
    //   return {
    //     ...state,
    //     users: [...action.payload],
    //   };
    case GET_ONE:
      return {
        ...state,
        users: getOneTodo(state.users, action.payload),
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
const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export const persistor = persistStore(store);

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
