import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Loading } from '../components';

export default function Private({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  return user?.isLoggedIn ? children : <Navigate to="/user/login" />;
}
