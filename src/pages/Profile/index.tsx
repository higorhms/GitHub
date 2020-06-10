/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, useParams } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiPower } from 'react-icons/fi';

import { Container, Avatar, Content } from './styles';
import api from '../../services/api';
import useTheme from '../../hooks/useTheme';
import useAuth from '../../hooks/useAuth';

export interface User {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const Profile: React.FC = () => {
  const { owner } = useParams();
  const [user, setUser] = useState<User>({} as User);
  const { theme, handleChangeTheme } = useTheme();
  const { signOut } = useAuth();

  useEffect(() => {
    api.get(`/users/${owner}`).then((response) => {
      setUser(response.data);
    });
  }, [owner]);

  const themeChangerIcon = useMemo(() => {
    return theme.title === 'light' ? <FiMoon /> : <FiSun />;
  }, [theme.title]);

  return (
    <Container>
      <Avatar>
        <img src={user?.avatar_url} alt="avatar" />
        <h3>{user?.name}</h3>
        <p>{user?.login}</p>
        <span>{user?.bio}</span>
        <div>
          <button type="button" onClick={handleChangeTheme}>
            {themeChangerIcon}
          </button>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
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
            <Link to={`/profile/${user.login}/following`}>
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
