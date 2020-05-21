import React from 'react';

import { Outlet } from 'react-router';
import { Container, Avatar, Content } from './styles';
import useAuth from '../../hooks/useAuth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar>
        <img src={user?.avatar_url} alt="avatar" />
        <h3>{user?.name}</h3>
        <p>{user?.login}</p>
        <span>{user?.bio}</span>
      </Avatar>

      <Content>
        <ul>
          <li>
            <strong>Followers</strong>
            <strong>{user?.followers}</strong>
          </li>
          <li>
            <strong>Following</strong>
            <strong>{user?.following}</strong>
          </li>
          <li>
            <strong>Repositories</strong>
            <strong>{user?.public_repos}</strong>
          </li>
        </ul>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Profile;
