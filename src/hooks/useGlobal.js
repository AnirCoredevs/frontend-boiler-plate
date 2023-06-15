import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

/**
 * socket - function that creates a socket connection
 *
 * @return {Object}  - returns an instance of socket.io with the specified URL and options
 */
const socket = io(import.meta.env.REACT_APP_SOCKET_URL || 'http://localhost:4000', {
  withCredentials: true,
  autoConnect: false,
});

const useGlobal = () => {
  /**
   * notifySubscribe - function to subscribe user for push notifications
   *
   * @return {Promise}  - returns a Promise that resolves with the push subscription
   * if successful or rejects with an error message if unsuccessful.
   */
  const notifySubscribe = () => new Promise((resolve, reject) => {
    navigator.serviceWorker.ready.then((reg) => {
      reg.pushManager.getSubscription().then((exists) => {
        if (exists !== null) resolve(exists);
        reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: import.meta.env.REACT_APP_PUBLIC_VAPID,
        })
          .then((sub) => resolve(sub))
          .catch((e) => {
            if (Notification.permission !== 'granted') return console.log('Permission was not granted.');
            return reject(e);
          });
      });
    });
  });

  /**
   * hitToast - function to display a snackbar notification
   *
   * @param {String} message  - the message to be displayed on the snackbar
   * @param {String} variant  - the variant of the snackbar, either 'success' or 'error'
   *
   * @return {Function}  - returns a function that displays the snackbar with
   * the specified message and variant. If the variant is not 'success'
   * or 'error', an error snackbar will be displayed.
   */
  const hitToast = (message, variant) => {
    if (!['success', 'error'].includes(variant)) return enqueueSnackbar('Invalid variant!', { variant: 'error' });
    return enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    // call the rtk hooks thats needs to populate data at the initialization of application.
  }, []);

  return {
    socket,
    hitToast,
    notifySubscribe,
  };
};
export default useGlobal;
