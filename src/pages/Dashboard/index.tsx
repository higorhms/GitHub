/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

import { Container, List, ListItem, Description, Title } from './styles';
import Loading from '../../components/Loading';
import useLoading from '../../hooks/useLoading';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const { user } = useAuth();
  const { isLoading, handleStartLoading } = useLoading();

  useEffect(() => {
    async function fetchApi(): Promise<void> {
      api.get(`/users/${user?.login}/repos`).then((response) => {
        setRepositories(response.data);
        setTimeout(() => {
          handleStartLoading();
        }, 2000);
      });
    }
    fetchApi();
  }, [user]);

  return (
    <>
      <Title>Your Repositories</Title>
      {isLoading ? (
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
