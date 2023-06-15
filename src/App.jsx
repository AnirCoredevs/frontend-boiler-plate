import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return <RouterProvider router={Routes} fallbackElement={<>Just blank for now!</>} />;
}

export default App;
