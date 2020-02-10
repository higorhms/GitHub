import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AuthRoutes from './AuthRoute';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import Repositories from '../pages/Repositories';

export default function MainRoutes() {
   return (
      <Switch>
         <AuthRoutes path="/" exact component={SignIn} />
         <AuthRoutes path="/dashboard" isPrivate component={Dashboard} />
         <AuthRoutes path="/repositories" isPrivate component={Repositories} />
         <AuthRoutes
            path="/repository/:repository"
            isPrivate
            component={Repository}
         />
         <Redirect path="*" to="/" />
      </Switch>
   );
}
