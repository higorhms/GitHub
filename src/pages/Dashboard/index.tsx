/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

import { Container, List, ListItem, Description, Title } from './styles';
import Loading from '../../components/Loading';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchApi(): Promise<void> {
      const [repositoriesResponse] = await Promise.all([
        api.get(`/users/${user?.login}/repos`),
      ]);
      setRepositories(repositoriesResponse.data);

      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
    fetchApi();
  }, [user]);

  return (
    <>
      <Title>Your Repositories</Title>
      {loading ? (
        <Loading />
      ) : (
        <Container>
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
      )}
    </>
  );
};

export default Dashboard;
