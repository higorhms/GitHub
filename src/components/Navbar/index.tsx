import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Avatar, ProfileArea, Content, NavbarArea } from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface User {
  id: string;
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
}

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleLogOut(): void {
    signOut();
  }

  return (
    <Container>
      <Content>
        <NavbarArea>
          <Link to="/dashboard">HOME</Link>
          <Link to="/repositories">FINDER</Link>
        </NavbarArea>
        <aside>
          {user && (
            <ProfileArea>
              <Avatar
                src={
                  user.avatar_url ||
                  'https://api.adorable.io/avatars/95/abott@adorable.png'
                }
                alt="avatar"
              />
              <div>
                <strong>{user.name || ''}</strong>
                <Link to="/" onClick={handleLogOut}>
                  Sair
                </Link>
              </div>
            </ProfileArea>
          )}
        </aside>
      </Content>
    </Container>
  );
};

export default Navbar;
