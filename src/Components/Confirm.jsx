import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialogSlide({ todos, deleteAll, ...props }) {
  const [open, setOpen] = React.useState(false);
  const btnRef = React.useRef();

  // Abre o modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Fecha o modal
  const handleClose = ({ target }) => {
    setOpen(false);
    // Se o botão for 'APAGAR TUDO', apaga tudo
    if (target === btnRef.current) {
      deleteAll();
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} {...props}>
        Apagar Tudo
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Você está prestes a apagar tudo'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Tem certeza que deseja apagar tudo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button ref={btnRef} onClick={handleClose}>
            Apagar tudo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
