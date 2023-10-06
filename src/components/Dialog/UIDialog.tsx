import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface UIDialogProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  content: string;
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
}

function UIDialog({
  open,
  handleClose,
  handleConfirm,
  title,
  content,
  cancelButtonLabel = 'Cancel',
  confirmButtonLabel = 'Confirm'
}: UIDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelButtonLabel}</Button>
        <Button onClick={handleConfirm} autoFocus>
          {confirmButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UIDialog;
