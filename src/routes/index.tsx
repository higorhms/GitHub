import React, { lazy } from 'react';
import { Routes } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import Manager from './Manager';
import Route from './Route';

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

      <Manager path="/dashboard" isPrivate layout={AuthLayout}>
        <Route path="/" element={Dashboard} />
      </Manager>

      <Manager path="/explorer" isPrivate layout={AuthLayout}>
        <Route path="/" element={Explorer} />
      </Manager>

      <Manager path="/repository/:owner/:repo" isPrivate layout={AuthLayout}>
        <Route path="/" element={Repository} />
      </Manager>
    </Routes>
  );
};

export default MainRoutes;
