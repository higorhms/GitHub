import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Avatar, ProfileArea, Content, NavbarArea } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import Tooltip from '../Tooltip';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <NavbarArea>
          <p>GitHub</p>
          <div>
            <Link to="/dashboard">HOME</Link>
            <Link to="/repositories">EXPLORER</Link>
          </div>
        </NavbarArea>
        <aside>
          {user && (
            <ProfileArea>
              <div>
                <strong>{user.name || ''}</strong>
                <p>{user.login}</p>
              </div>
              <Avatar
                src={
                  user.avatar_url ||
                  'https://api.adorable.io/avatars/95/abott@adorable.png'
                }
                alt="avatar"
              />
              <Tooltip />
            </ProfileArea>
          )}
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
