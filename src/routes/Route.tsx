import React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps, Navigate } from 'react-router';
import { useAuth } from '../hooks/AuthContext';
import authLayout from '../pages/_layouts/auth';
import defaultLayout from '../pages/_layouts/default';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
}

const CustomRoute: React.FC<CustomRouteProps> = ({
  element: Element,
  isPrivate,
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

  const Layout = isPrivate ? authLayout : defaultLayout;

  return (
    <Layout>
      <Route {...rest} element={Element} />
    </Layout>
  );
};

export default CustomRoute;
