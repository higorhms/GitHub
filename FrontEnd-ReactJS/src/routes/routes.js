import React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoutes from './AuthRoute';

import Main from '../pages/Main';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';

export default function MainRoutes() {
   return (
      <Switch>
         <AuthRoutes path="/" exact component={SignIn} />
         <AuthRoutes path="/dashboard" isPrivate component={Main} />
         <AuthRoutes
            path="/repository/:repository"
            isPrivate
            component={Repository}
         />
      </Switch>
   );
}
