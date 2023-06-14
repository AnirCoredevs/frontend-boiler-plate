import React from 'react';
import { Outlet } from 'react-router-dom';

function WebsiteLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default WebsiteLayout;
