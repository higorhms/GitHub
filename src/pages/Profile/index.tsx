/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import { Outlet, useParams } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Avatar, Content } from './styles';
import { User } from '../../contexts/AuthContext';

import api from '../../services/api';

const Profile: React.FC = () => {
  const { owner } = useParams();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function fetchingApi(): Promise<void> {
      const response = await api.get(`/users/${owner}`);
      setUser(response.data);
    }
    fetchingApi();
  }, [owner]);

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
            <a target="_blank" href={`https://github.com/${user?.login}`}>
              <FaGithub size={50} />
            </a>
          </li>
          <li>
            <Link to={`/profile/${user.login}/followers`}>
              <strong>Followers</strong>
            </Link>
            <span>{user?.followers}</span>
          </li>
          <li>
            <Link to={`/profile/${user.login}/followings`}>
              <strong>Following</strong>
            </Link>
            <span>{user?.following}</span>
          </li>
          <li>
            <Link to={`/profile/${user.login}/repositories`}>
              <strong>Repositories</strong>
            </Link>
            <span>{user?.public_repos}</span>
          </li>
        </ul>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Profile;
