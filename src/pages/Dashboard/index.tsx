import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiAward } from 'react-icons/fi';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

import { Container, List, ListItem, Description } from './styles';
import Loading from '../../components/Loading';
import useLoading from '../../hooks/useLoading';

export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  full_name: string;
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
                <Link
                  to={`/repository/${repository.full_name}`}
                  key={repository.id}
                >
                  <ListItem>
                    <div>
                      <FiAward size={20} color="#1ba94c" />
                      <h1>{repository.name}</h1>
                    </div>
                    <Description>{repository.description}</Description>
                    <span>{repository.language}</span>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
