import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, ListItem, Description } from './styles';
import api from '../../../services/api';
import { Repository } from '../../Dashboard';

const Repositories: React.FC = () => {
  const { owner } = useParams();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function fetchApi(): Promise<void> {
      api.get(`/users/${owner}/repos`).then((response) => {
        setRepositories(response.data);
      });
    }
    fetchApi();
  }, [owner]);

  return (
    <Container>
      {repositories &&
        repositories.map((repository) => (
          <Link to={`/repository/${repository.full_name}`} key={repository.id}>
            <ListItem>
              <div>
                <FiAward size={20} color="#1ba94c" />
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
