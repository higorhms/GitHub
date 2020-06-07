import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch, FiUser } from 'react-icons/fi';

import { Container } from './styles';
import useAuth from '../../hooks/useAuth';

const BottomNavigator: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Link to="/dashboard">
        <FiHome />
      </Link>
      <Link to="/explorer">
        <FiSearch />
      </Link>
      <Link to={`/profile/${user?.login}/followers`}>
        <FiUser />
      </Link>
    </Container>
  );
};

export default BottomNavigator;
