import React, { VFC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
export type Props={
  buttonLabel: string
  dialogContentText: string
  submitButtonLabel: string
  cancelButtonLabel: string
  dialogTitle: string
}

export const DraggableDialog:VFC<Props>=(props)=> {
  const { buttonLabel, dialogContentText, submitButtonLabel, cancelButtonLabel, dialogTitle} = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {buttonLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        { dialogTitle }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            { dialogContentText }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            { submitButtonLabel }
          </Button>
          <Button onClick={handleClose} color="primary">
            { cancelButtonLabel }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}