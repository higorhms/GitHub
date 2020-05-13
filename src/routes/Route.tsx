import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

// Context of Authentication
import { useAuth } from '../hooks/AuthContext';

// Layouts
import authLayout from '../pages/_layouts/auth';
import defaultLayout from '../pages/_layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { user } = useAuth();
  const signed = user;

  if (!signed && isPrivate) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to={{ pathname: '/dashboard' }} />;
  }

  const Layout = isPrivate ? authLayout : defaultLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
