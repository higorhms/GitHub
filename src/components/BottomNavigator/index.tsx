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
        <FiHome size={20} />
        <p>Home</p>
      </Link>
      <Link to="/explorer">
        <FiSearch size={20} />
        <p>Explorer</p>
      </Link>
      <Link to={`/profile/${user?.login}/followers`}>
        <FiUser size={20} />
        <p>Me</p>
      </Link>
    </Container>
  );
};

export default BottomNavigator;
