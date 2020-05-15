import React from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { Container, Avatar, ProfileArea, Content, NavbarArea } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import { useTheme } from '../../hooks/ThemeContext';

const Header: React.FC = () => {
  const { handleChangeTheme, theme } = useTheme();
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
          <Switch
            onChange={() => handleChangeTheme()}
            checked={theme.title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor="#3D1225"
            onColor="#03111E"
          />
          {user && (
            <ProfileArea>
              <div>
                <strong>{user.name || ''}</strong>
                {/* <Link to="/" onClick={handleLogOut}>
                  Sair
                </Link> */}
              </div>
              <Avatar
                src={
                  user.avatar_url ||
                  'https://api.adorable.io/avatars/95/abott@adorable.png'
                }
                alt="avatar"
              />
            </ProfileArea>
          )}
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
