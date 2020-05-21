import React, { lazy } from 'react';
import { Routes } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import Manager from './Manager';
import Route from './Route';

const Profile = lazy(() => import('../pages/Profile'));
const Followers = lazy(() => import('../pages/Profile/Followers'));
const Followings = lazy(() => import('../pages/Profile/Followings'));
const Repositories = lazy(() => import('../pages/Profile/Repositories'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Repository = lazy(() => import('../pages/Repository'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Explorer = lazy(() => import('../pages/Explorer'));

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Manager path="/" layout={DefaultLayout}>
        <Route path="/" element={SignIn} />
      </Manager>

      <Manager path="/" isPrivate layout={AuthLayout}>
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/explorer" element={Explorer} />
        <Route path="/repository/:owner/:repo" element={Repository} />

        <Route path="/profile" element={Profile}>
          <Route path="/followers" element={Followers} />
          <Route path="/followings" element={Followings} />
          <Route path="/repositories" element={Repositories} />
        </Route>
      </Manager>
    </Routes>
  );
};

export default MainRoutes;
