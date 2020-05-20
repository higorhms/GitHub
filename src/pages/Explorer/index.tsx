import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  Form,
  Repositories,
  Error,
  Subtitle,
  FormContainer,
  AnimationContainer,
} from './styles';
import api from '../../services/api';
import LogoAnimation from '../../animations/LogoAnimation';
import SearchAnimation from '../../animations/SearchAnimation';
import useLoading from '../../hooks/useLoading';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Explorer: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { isLoading, handleStartLoading } = useLoading();
  const [repositories, setRepositories] = useState<Repository[]>(() => {
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
    (repository: Repository) => {
      const findRepository = repositories.find(
        (repo) => repo.full_name === repository.full_name,
      );

      return !!findRepository;
    },
    [repositories],
  );

  const handleAddRepository = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      handleStartLoading(true);

      e.preventDefault();
      try {
        if (!newRepo) {
          setErrorMessage('Type the owner/repository you are trying to find');
          handleStartLoading(false);
          return;
        }

        const response = await api.get<Repository>(`/repos/${newRepo}`);

        const repository = response.data;

        const repositoryAlreadyExist = checkExistRepository(response.data);

        if (repositoryAlreadyExist) {
          setErrorMessage('This repository already exist in your list');
          handleStartLoading(false);
          return;
        }

        setRepositories([...repositories, repository]);
        setNewRepo('');
        setErrorMessage('');
        handleStartLoading(false);
      } catch (error) {
        setErrorMessage('This repository does not exist');
        handleStartLoading(false);
      }
    },
    [newRepo, repositories, handleStartLoading, checkExistRepository],
  );

  return (
    <Container>
      <FormContainer>
        <Title>Explore your favorite repositories</Title>
        <Subtitle>Find any repository you want!</Subtitle>

        <Form onSubmit={handleAddRepository} hasError={!!errorMessage}>
          <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Example: Owner/Repository"
          />

          <button type="submit">
            {isLoading ? <p>Searching...</p> : <SearchAnimation />}
          </button>
        </Form>

        {errorMessage && <Error>{errorMessage}</Error>}

        <Repositories>
          {repositories.map((repository) => (
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

              <FiChevronRight size={25} />
            </Link>
          ))}
        </Repositories>
      </FormContainer>
      <AnimationContainer>
        <LogoAnimation />
      </AnimationContainer>
    </Container>
  );
};

export default Explorer;
