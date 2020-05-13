/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { FaBook } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';

import {
  Container,
  RepositoriesContainer,
  List,
  ListItem,
  Name,
  Description,
  Language,
  Avatar,
  Separator,
  AvatarContainer,
  FollowersContainer,
} from './styles';
import api from '../../services/api';
import CardFollow from '../../components/CardFollow';
import { User } from '../../hooks/AuthContext';

interface RepositoryParams {
  name: string;
}

interface Repository {
  id: string;
  name: string;
  language: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const FriendRepositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [profile, setProfile] = useState<User>({} as User);
  const { name } = params;

  useEffect(() => {
    async function fetchApi(): Promise<void> {
      const [
        repositoriesResponse,
        profileReponse,
        followersResponse,
        followingResponse,
      ] = await Promise.all([
        api.get(`/users/${name}/repos`),
        api.get(`/users/${name}`),
        api.get(`/users/${name}/followers`),
        api.get(`/users/${name}/following`),
      ]);

      setRepositories(repositoriesResponse.data);
      setProfile(profileReponse.data);
      setFollowers(followersResponse.data);
      setFollowing(followingResponse.data);
    }
    fetchApi();
  }, [name]);

  return (
    <Container>
      <RepositoriesContainer>
        <AvatarContainer>
          <Avatar
            src={
              profile.avatar_url ||
              'https://api.adorable.io/avatars/95/abott@adorable.png'
            }
            alt="avatar"
          />
          <h1>{name}</h1>
        </AvatarContainer>
        <Separator />
        <List>
          {repositories &&
            repositories.map((r) => (
              <a
                target="_blank"
                href={`https://github.com/${name}/${r.name}`}
                key={r.id}
              >
                <ListItem>
                  <Name>
                    <div>
                      <FaBook size={15} />
                      <p>{r.name}</p>
                    </div>
                    <Language>{r.language}</Language>
                  </Name>
                  <Description>{r.description}</Description>
                </ListItem>
              </a>
            ))}
        </List>
      </RepositoriesContainer>

      <FollowersContainer>
        <h1>Friends</h1>
        <CardFollow title="Following" list={following} />
        <Separator />
        <CardFollow title="Followers" list={followers} />
      </FollowersContainer>
    </Container>
  );
};

export default FriendRepositories;
