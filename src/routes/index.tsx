import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import FriendRepositories from '../pages/FriendRepositories';
import Explorer from '../pages/Explorer';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" isPrivate={false} exact component={SignIn} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/repositories" isPrivate component={Explorer} />
      <Route path="/friend/:name" isPrivate component={FriendRepositories} />
      <Route path="/repository/:repository+" isPrivate component={Repository} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default MainRoutes;
