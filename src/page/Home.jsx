import React from 'react';

import Form from '../Components/Form';
import TodoItem from '../Components/TodoItem';
import { Container, List } from '@mui/material';
import Confirm from '../Components/Confirm';
import './Home.css';

const Home = () => {
  const [todos, setTodos] = React.useState([]);

  // Adiciona um (1) to-do
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Deleta um (1) to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Deleta todos os to-do's
  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '1em' }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: '1em' }}>
        {todos.length ? (
          <Confirm className="animeLeft" deleteAll={deleteAll} todos={todos} />
        ) : null}

        {todos.map((todo) => (
          <div
            className="animeLeft"
            key={todo.id}
            style={{ marginTop: '.5em' }}
          >
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Home;
