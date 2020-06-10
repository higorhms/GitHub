/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import { RepositoryInfo, Issues, Container } from './styles';
import api from '../../services/api';

interface Repository {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { owner, repo } = useParams();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    Promise.all([
      api.get(`/repos/${owner}/${repo}`),
      api.get(`/repos/${owner}/${repo}/issues`),
    ]).then(([repositoryResponse, issueResponse]) => {
      setRepository(repositoryResponse.data);
      setIssues(issueResponse.data);
    });
  }, [owner, repo]);

  return (
    <Container>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository?.owner.avatar_url}
              alt={repository?.owner.login}
            />
            <div>
              <strong>{repository?.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>Stars</strong>
              <strong>{repository.stargazers_count}</strong>
            </li>
            <li>
              <strong>Forks</strong>
              <strong>{repository.forks_count}</strong>
            </li>
            <li>
              <strong>Issues abertas</strong>
              <strong>{repository.open_issues_count}</strong>
            </li>
            <li>
              <a
                target="_blank"
                href={`https://github.com/${repository.owner.login}/${repository.name}`}
              >
                <FaGithub size={50} />
              </a>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues?.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={25} />
          </a>
        ))}
      </Issues>
    </Container>
  );
};

export default Repository;
