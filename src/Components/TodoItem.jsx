import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Paper } from '@mui/material';

export default function TodoItem({ deleteTodo, todo }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      {checked ? (
        <Paper style={{ padding: '0.5em 0em', opacity: 0.4 }}>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => deleteTodo(todo.id)}
              >
                <HighlightOffIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  onChange={({ target }) => setChecked(target.checked)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </ListItem>
        </Paper>
      ) : (
        <Paper style={{ padding: '0.5em 0em' }}>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => deleteTodo(todo.id)}
              >
                <HighlightOffIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  onChange={({ target }) => setChecked(target.checked)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </ListItem>
        </Paper>
      )}
    </>
  );
}
