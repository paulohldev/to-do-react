import { Button, Paper, TextField } from '@mui/material';
import React from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = React.useState(null);
  const [id, setId] = React.useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
  };

  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Adicione uma tarefa"
          variant="outlined"
          fullWidth
          autoComplete="off"
          onChange={({ target }) => setText(target.value)}
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
};

export default Form;
