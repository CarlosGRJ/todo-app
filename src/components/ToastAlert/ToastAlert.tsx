import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {
  type AlertProps,
  type AlertColor
} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

interface ToastAlertProps {
  severity?: AlertColor;
  showToast: boolean;
  toastOn: () => void;
  toastOff: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  duration?: number;
  message?: string;
}

function ToastAlert({
  severity = 'info',
  showToast,
  toastOff,
  duration,
  message = 'No message'
}: ToastAlertProps) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={showToast}
        autoHideDuration={duration}
        onClose={toastOff}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="topright"
      >
        <Alert onClose={toastOff} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default ToastAlert;
