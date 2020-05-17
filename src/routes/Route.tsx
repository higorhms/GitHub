import React, { Suspense } from 'react';
import { RouteProps } from 'react-router';
import { Route as ReactRoute } from 'react-router-dom';

import Loading from '../components/Loading';

interface RProps extends Omit<RouteProps, 'element'> {
  element: React.ComponentType;
}

const routes: React.FC<RProps> = ({ element: Element, ...rest }) => {
  return (
    <ReactRoute
      {...rest}
      element={
        <Suspense fallback={<Loading />}>
          <Element />
        </Suspense>
      }
    />
  );
};

export default routes;
