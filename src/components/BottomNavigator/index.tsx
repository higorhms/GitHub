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
        <p>Home</p>
      </Link>
      <Link to="/explorer">
        <FiSearch />
        <p>Explorer</p>
      </Link>
      <Link to={`/profile/${user?.login}/followers`}>
        <FiUser />
        <p>Me</p>
      </Link>
    </Container>
  );
};

export default BottomNavigator;
