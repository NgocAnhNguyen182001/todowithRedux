import Todo from './Todo';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.users)
  return (
    <Container maxWidth="sm">
      <Todo
        todos={todos}
      />
    </Container>
  );
}
export default TodoList;

// const [todos, setTodos] = useState([]);

//   const addTodo = todo => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
//   };

//   const removeTodo = id => {
//     const removedArr = [...todos].filter(todo => todo.id !== id);

//     setTodos(removedArr);
//   };

//   const completeTodo = id => {
//     let updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };