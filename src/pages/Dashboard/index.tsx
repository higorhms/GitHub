/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

import { Container, List, ListItem, Description } from './styles';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchApi(): Promise<void> {
      const [repositoriesResponse] = await Promise.all([
        api.get(`/users/${user?.login}/repos`),
      ]);
      setRepositories(repositoriesResponse.data);
    }
    fetchApi();
  }, [user]);

  return (
    <Container>
      <h1>Your Repositories</h1>
      <List>
        {repositories &&
          repositories.map((repository) => (
            <a
              target="_blank"
              href={`https://github.com/${user?.login}/${repository.name}`}
              key={repository.id}
            >
              <ListItem>
                <div>
                  <p>{repository.name}</p>
                  <p>{repository.language}</p>
                </div>
                <Description>{repository.description}</Description>
              </ListItem>
            </a>
          ))}
      </List>
    </Container>
  );
};

export default Dashboard;
