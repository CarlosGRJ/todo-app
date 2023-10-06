import { useState } from 'react';

function useToast() {
  const [showToast, setShowToast] = useState(false);

  // To call the toast and show it on the screen
  const toastOn = () => {
    setShowToast(true);
  };

  // Call it when you no longer want the toast, but the toast could also have a timer
  const toastOff = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowToast(false);
  };

  return { showToast, toastOn, toastOff };
}

export default useToast;
