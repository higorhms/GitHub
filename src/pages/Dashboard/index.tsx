import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAward } from 'react-icons/fi';

import { Container, List, ListItem, Description } from './styles';
import api from '../../services/api';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';

interface Repository {
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
    api.get(`/users/${user?.login}/repos`).then((response) => {
      setRepositories(response.data);
    });
    setTimeout(() => {
      handleStartLoading(false);
    }, 3000);
  }, [user, handleStartLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <h1>My Repositories</h1>
      <List>
        {repositories?.map((repository) => (
          <Link to={`/repository/${repository.full_name}`} key={repository.id}>
            <ListItem>
              <div>
                <FiAward />
                <h1>{repository.name}</h1>
              </div>
              <Description>{repository.description}</Description>
              <span>{repository.language}</span>
            </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
