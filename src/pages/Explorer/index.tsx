import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  Title,
  Form,
  Repositories,
  Subtitle,
  Repository,
  IconArea,
} from './styles';
import api from '../../services/api';
import useLoading from '../../hooks/useLoading';

interface RepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Explorer: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const { isLoading, handleStartLoading } = useLoading();
  const [repositories, setRepositories] = useState<RepositoryProps[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GitHubExplorer:repositories',
    );
    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const checkExistRepository = useCallback(
    (repository: RepositoryProps) => {
      const findRepository = repositories.find(
        (repo) => repo.full_name === repository.full_name,
      );

      return !!findRepository;
    },
    [repositories],
  );

  const handleAddRepository = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      handleStartLoading(true);

      try {
        if (!newRepo) {
          toast.error('Type the owner/repository you are trying to find');
          handleStartLoading(false);
          return;
        }

        const response = await api.get<RepositoryProps>(`/repos/${newRepo}`);

        const repository = response.data;

        const repositoryAlreadyExist = checkExistRepository(response.data);

        if (repositoryAlreadyExist) {
          toast.error('This repository already exist in your list');
          return;
        }

        setRepositories([...repositories, repository]);
        setNewRepo('');
      } catch (error) {
        toast.error('This repository does not exist');
      } finally {
        handleStartLoading(false);
      }
    },
    [newRepo, repositories, handleStartLoading, checkExistRepository],
  );

  const handleDeleteRepository = useCallback(
    (repository): void => {
      const filtredRepositories = repositories.filter(
        (repo) => repo.full_name !== repository.full_name,
      );

      setRepositories(filtredRepositories);
    },
    [repositories],
  );

  return (
    <Container>
      <Title>Explore your favorite repositories</Title>
      <Subtitle>Find any repository you want!</Subtitle>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Example: Owner/Repository"
        />

        <button type="submit">
          {isLoading ? <p>Searching...</p> : <p>Search</p>}
        </button>
      </Form>

      <Repositories>
        {repositories?.map((repository) => (
          <Repository key={repository.full_name}>
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                alt={repository.owner.login}
                src={repository.owner.avatar_url}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </Link>

            <IconArea onClick={() => handleDeleteRepository(repository)}>
              <FiTrash2 />
            </IconArea>
          </Repository>
        ))}
      </Repositories>
    </Container>
  );
};

export default Explorer;
