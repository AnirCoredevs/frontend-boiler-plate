import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return <RouterProvider router={Routes} fallbackElement={<>Just blank for now!</>} />;
}

export default App;
