import React, {  useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import authLayout from '../pages/_layouts/auth';
import defaultLayout from '../pages/_layouts/default';
import { AuthContext } from '../hooks/AuthContext';

export default function AuthRoutes({
   component: Component,
   isPrivate,
   ...rest
}) {
  const {user}  = useContext(AuthContext);
  const signed = user;

   if (!signed && isPrivate) {
      return <Redirect to="/" />;
   }

   if (signed && !isPrivate) {
      return <Redirect to="/dashboard" />;
   }

   const Layout = isPrivate ? authLayout : defaultLayout;

   return (
      <Route
         {...rest}
         render={props => (
            <Layout>
               <Component {...props} />
            </Layout>
         )}
      />
   );
}
