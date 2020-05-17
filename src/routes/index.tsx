import React from 'react';
import { Routes } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import Explorer from '../pages/Explorer';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" isPrivate element={<Dashboard />} />
      <Route path="/repositories" isPrivate element={<Explorer />} />
      <Route
        path="/repository/:repository+"
        isPrivate
        element={<Repository />}
      />
    </Routes>
  );
};

export default MainRoutes;
