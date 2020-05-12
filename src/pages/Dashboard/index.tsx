/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { FaBook } from 'react-icons/fa';
import api from '../../services/api';

import {
  Container,
  RepositoriesContainer,
  List,
  ListItem,
  Name,
  Description,
  Language,
  FollowersContainer,
  Separator,
} from './styles';
import CardFollow from '../../components/CardFollow';
import { useAuth } from '../../hooks/AuthContext';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (user) {
      setProfile(user);
    }

    async function fetchApi(): Promise<void> {
      const [
        repositoriesResponse,
        followersResponse,
        followingResponse,
      ] = await Promise.all([
        api.get(`/users/${profile.login}/repos`),
        api.get(`/users/${profile.login}/followers`),
        api.get(`/users/${profile.login}/following`),
      ]);
      setRepositories(repositoriesResponse.data);
      setFollowers(followersResponse.data);
      setFollowing(followingResponse.data);
    }
    fetchApi();
  }, [profile, user]);

  return (
    <Container>
      <RepositoriesContainer>
        <h1>Your Repositories</h1>
        <List>
          {repositories &&
            repositories.map((repository) => (
              <a
                target="_blank"
                href={`https://github.com/${profile.login}/${repository.name}`}
                key={repository.id}
              >
                <ListItem>
                  <Name>
                    <div>
                      <FaBook size={15} />
                      <p>{repository.name}</p>
                    </div>
                    <Language>{repository.language}</Language>
                  </Name>
                  <Description>{repository.description}</Description>
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

export default Dashboard;
