import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function MainRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/repository/:repository" element={<Repository />} />
      </Routes>
   );
}
