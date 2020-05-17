import React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps, Navigate } from 'react-router';

import useAuth from '../hooks/useAuth';

interface ManagerProps extends Omit<RouteProps, 'element'> {
  isPrivate?: boolean;
  layout: React.ComponentType;
}

const Manager: React.FC<ManagerProps> = ({
  isPrivate,
  layout: Layout,
  ...rest
}) => {
  const { user } = useAuth();
  const signed = user;

  if (!signed && isPrivate) {
    return <Navigate to="/" replace />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Route {...rest} element={<Layout />} />;
};

export default Manager;
