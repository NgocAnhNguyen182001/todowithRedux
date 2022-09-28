import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseLine, Grid, Toolbar, Container } from '@mui/material';
import PhotoCamera from '@mui/material'
import { makeStyles } from '@mui/material'
import TodoList from './components/TodoList';
import ButtonAppBar from './components/Appbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTodosThunk } from './store/thunk';

function App() {
  const dispatch =  useDispatch();
useEffect(() => {
  dispatch(getTodosThunk())
}, [dispatch])
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
