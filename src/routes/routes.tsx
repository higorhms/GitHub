import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AuthRoutes from './AuthRoute';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import FriendRepositories from '../pages/FriendRepositories';
import Explorer from '../pages/Explorer';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <AuthRoutes path="/" isPrivate={false} exact component={SignIn} />
      <AuthRoutes path="/dashboard" isPrivate component={Dashboard} />
      <AuthRoutes path="/repositories" isPrivate component={Explorer} />
      <AuthRoutes
        path="/friend/:name"
        isPrivate
        component={FriendRepositories}
      />
      <AuthRoutes
        path="/repository/:repository+"
        isPrivate
        component={Repository}
      />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default MainRoutes;
