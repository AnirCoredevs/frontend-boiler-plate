import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import WebsiteLayout from '../layout/website';
import DashboardLayout from '../layout/dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Route>,
  ),
);

export default Routes;
