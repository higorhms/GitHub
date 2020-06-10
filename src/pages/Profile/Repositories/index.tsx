import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, ListItem, Description } from './styles';
import api from '../../../services/api';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  full_name: string;
}

const Repositories: React.FC = () => {
  const { owner } = useParams();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`/users/${owner}/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, [owner]);

  return (
    <Container>
      {repositories?.map((repository) => (
        <Link to={`/repository/${repository.full_name}`} key={repository.id}>
          <ListItem>
            <div>
              <FiAward />
              <p>{repository.name}</p>
            </div>
            <Description>{repository.description}</Description>
            <span>{repository.language}</span>
          </ListItem>
        </Link>
      ))}
    </Container>
  );
};

export default Repositories;
