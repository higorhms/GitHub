import React from 'react';
import { useNavigate, Route } from 'react-router-dom';

import authLayout from '../pages/_layouts/auth';
import defaultLayout from '../pages/_layouts/default';

export default function AuthRoutes({
   component: Component,
   isPrivate,
   ...rest
}) {
   const { signed } = false;

   // if (!signed && isPrivate) {
   //     return <Redirect to="/" />;
   // }

   // if (signed && !isPrivate) {
   //     return <Redirect to="/dashboard" />;
   // }

   const Layout = isPrivate ? authLayout : defaultLayout;

   return (
      <Route
         {...rest}
         element={
            <Layout>
               <Component />
            </Layout>
         }
      />
   );
}
