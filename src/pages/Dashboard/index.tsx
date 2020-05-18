/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

import { Container, List, ListItem, Description } from './styles';
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
    handleStartLoading(true);
    async function fetchApi(): Promise<void> {
      api.get(`/users/${user?.login}/repos`).then((response) => {
        setRepositories(response.data);
      });
    }
    fetchApi();
    setTimeout(() => {
      handleStartLoading(false);
    }, 3000);
  }, [user, handleStartLoading]);

  return (
    <>
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
                    </div>
                    <Description>{repository.description}</Description>
                    <span>{repository.language}</span>
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
