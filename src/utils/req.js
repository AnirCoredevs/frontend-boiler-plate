import axios from 'axios';
/**
 * Make an HTTP request to a specified URI with optional data.
 * @param {Object} options - The request options.
 * @param {string} options.method - The HTTP method for the request (e.g. 'GET', 'POST').
 * @param {string} options.uri - The URI for the request.
 * @param {Object} [options.data] - The data to send with the request.
 * @return {Promise} - A promise that resolves with the server's response.
 */
const req = ({
  fullUrl,
  method = 'GET',
  uri = '',
  data = {},
  signal,
  withCredentials = true,
}) => {
  const url = fullUrl || `${process.env.REACT_APP_SERVER_URL || 'http://localhost:5173'}/${uri}`;
  const payload = {
    method,
    withCredentials,
    url,
    ...signal && { signal },
    data,
  };
  return axios(payload);
};
export default req;
