import React from 'react';
import { Routes } from 'react-router-dom';
import AuthRoutes from './AuthRoute';

import Main from '../pages/Main';
import Repository from '../pages/Repository';

export default function MainRoutes() {
   return (
      <Routes>
         <AuthRoutes path="/" component={Main} />
         <AuthRoutes path="/repository/:repository" component={Repository} />
      </Routes>
   );
}
